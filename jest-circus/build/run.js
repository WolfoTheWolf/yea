'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _throat = _interopRequireDefault(require('throat'));

var _state = require('./state');

var _types = require('./types');

var _utils = require('./utils');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const run = async () => {
  const {rootDescribeBlock} = (0, _state.getState)();
  await (0, _state.dispatch)({
    name: 'run_start'
  });
  await _runTestsForDescribeBlock(rootDescribeBlock, true);
  await (0, _state.dispatch)({
    name: 'run_finish'
  });
  return (0, _utils.makeRunResult)(
    (0, _state.getState)().rootDescribeBlock,
    (0, _state.getState)().unhandledErrors
  );
};

const _runTestsForDescribeBlock = async (
  describeBlock,
  isRootBlock = false
) => {
  await (0, _state.dispatch)({
    describeBlock,
    name: 'run_describe_start'
  });
  const {beforeAll, afterAll} = (0, _utils.getAllHooksForDescribe)(
    describeBlock
  );
  const isSkipped = describeBlock.mode === 'skip';

  if (!isSkipped) {
    for (const hook of beforeAll) {
      await _callCircusHook({
        describeBlock,
        hook
      });
    }
  }

  if (isRootBlock) {
    const concurrentTests = collectConcurrentTests(describeBlock);
    const mutex = (0, _throat.default)((0, _state.getState)().maxConcurrency);

    for (const test of concurrentTests) {
      try {
        const promise = mutex(test.fn); // Avoid triggering the uncaught promise rejection handler in case the
        // test errors before being awaited on.
        // eslint-disable-next-line @typescript-eslint/no-empty-function

        promise.catch(() => {});

        test.fn = () => promise;
      } catch (err) {
        test.fn = () => {
          throw err;
        };
      }
    }
  } // Tests that fail and are retried we run after other tests
  // eslint-disable-next-line no-restricted-globals

  const retryTimes = parseInt(global[_types.RETRY_TIMES], 10) || 0;
  const deferredRetryTests = [];

  for (const child of describeBlock.children) {
    switch (child.type) {
      case 'describeBlock': {
        await _runTestsForDescribeBlock(child);
        break;
      }

      case 'test': {
        const hasErrorsBeforeTestRun = child.errors.length > 0;
        await _runTest(child, isSkipped);

        if (
          hasErrorsBeforeTestRun === false &&
          retryTimes > 0 &&
          child.errors.length > 0
        ) {
          deferredRetryTests.push(child);
        }

        break;
      }
    }
  } // Re-run failed tests n-times if configured

  for (const test of deferredRetryTests) {
    let numRetriesAvailable = retryTimes;

    while (numRetriesAvailable > 0 && test.errors.length > 0) {
      // Clear errors so retries occur
      await (0, _state.dispatch)({
        name: 'test_retry',
        test
      });
      await _runTest(test, isSkipped);
      numRetriesAvailable--;
    }
  }

  if (!isSkipped) {
    for (const hook of afterAll) {
      await _callCircusHook({
        describeBlock,
        hook
      });
    }
  }

  await (0, _state.dispatch)({
    describeBlock,
    name: 'run_describe_finish'
  });
};

function collectConcurrentTests(describeBlock) {
  if (describeBlock.mode === 'skip') {
    return [];
  }

  const {hasFocusedTests, testNamePattern} = (0, _state.getState)();
  return describeBlock.children.flatMap(child => {
    switch (child.type) {
      case 'describeBlock':
        return collectConcurrentTests(child);

      case 'test':
        const skip =
          !child.concurrent ||
          child.mode === 'skip' ||
          (hasFocusedTests && child.mode !== 'only') ||
          (testNamePattern &&
            !testNamePattern.test((0, _utils.getTestID)(child)));
        return skip ? [] : [child];
    }
  });
}

const _runTest = async (test, parentSkipped) => {
  await (0, _state.dispatch)({
    name: 'test_start',
    test
  });
  const testContext = Object.create(null);
  const {hasFocusedTests, testNamePattern} = (0, _state.getState)();
  const isSkipped =
    parentSkipped ||
    test.mode === 'skip' ||
    (hasFocusedTests && test.mode !== 'only') ||
    (testNamePattern && !testNamePattern.test((0, _utils.getTestID)(test)));

  if (isSkipped) {
    await (0, _state.dispatch)({
      name: 'test_skip',
      test
    });
    return;
  }

  if (test.mode === 'todo') {
    await (0, _state.dispatch)({
      name: 'test_todo',
      test
    });
    return;
  }

  const {afterEach, beforeEach} = (0, _utils.getEachHooksForTest)(test);

  for (const hook of beforeEach) {
    if (test.errors.length) {
      // If any of the before hooks failed already, we don't run any
      // hooks after that.
      break;
    }

    await _callCircusHook({
      hook,
      test,
      testContext
    });
  }

  await _callCircusTest(test, testContext);

  for (const hook of afterEach) {
    await _callCircusHook({
      hook,
      test,
      testContext
    });
  } // `afterAll` hooks should not affect test status (pass or fail), because if
  // we had a global `afterAll` hook it would block all existing tests until
  // this hook is executed. So we dispatch `test_done` right away.

  await (0, _state.dispatch)({
    name: 'test_done',
    test
  });
};

const _callCircusHook = async ({
  hook,
  test,
  describeBlock,
  testContext = {}
}) => {
  await (0, _state.dispatch)({
    hook,
    name: 'hook_start'
  });
  const timeout = hook.timeout || (0, _state.getState)().testTimeout;

  try {
    await (0, _utils.callAsyncCircusFn)(hook, testContext, {
      isHook: true,
      timeout
    });
    await (0, _state.dispatch)({
      describeBlock,
      hook,
      name: 'hook_success',
      test
    });
  } catch (error) {
    await (0, _state.dispatch)({
      describeBlock,
      error,
      hook,
      name: 'hook_failure',
      test
    });
  }
};

const _callCircusTest = async (test, testContext) => {
  await (0, _state.dispatch)({
    name: 'test_fn_start',
    test
  });
  const timeout = test.timeout || (0, _state.getState)().testTimeout;
  (0, _utils.invariant)(
    test.fn,
    "Tests with no 'fn' should have 'mode' set to 'skipped'"
  );

  if (test.errors.length) {
    return; // We don't run the test if there's already an error in before hooks.
  }

  try {
    await (0, _utils.callAsyncCircusFn)(test, testContext, {
      isHook: false,
      timeout
    });

    if (test.failing) {
      test.asyncError.message =
        'Failing test passed even though it was supposed to fail. Remove `.failing` to remove error.';
      await (0, _state.dispatch)({
        error: test.asyncError,
        name: 'test_fn_failure',
        test
      });
    } else {
      await (0, _state.dispatch)({
        name: 'test_fn_success',
        test
      });
    }
  } catch (error) {
    if (test.failing) {
      await (0, _state.dispatch)({
        name: 'test_fn_success',
        test
      });
    } else {
      await (0, _state.dispatch)({
        error,
        name: 'test_fn_failure',
        test
      });
    }
  }
};

var _default = run;
exports.default = _default;

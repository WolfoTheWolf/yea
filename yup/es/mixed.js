import _extends from "@babel/runtime/helpers/esm/extends";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import has from "lodash-es/has";
import cloneDeepWith from "lodash-es/cloneDeepWith";
import _toArray from "lodash-es/toArray";
import { mixed as locale } from './locale';
import Condition from './Condition';
import runValidations from './util/runValidations';
import prependDeep from './util/prependDeep';
import isSchema from './util/isSchema';
import createValidation from './util/createValidation';
import printValue from './util/printValue';
import Ref from './Reference';
import { getIn } from './util/reach';

var RefSet = /*#__PURE__*/function () {
  function RefSet() {
    this.list = new Set();
    this.refs = new Map();
  }

  var _proto = RefSet.prototype;

  _proto.describe = function describe() {
    var description = [];

    for (var _iterator = this.list, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var item = _ref;
      description.push(item);
    }

    for (var _iterator2 = this.refs, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var _ref3 = _ref2,
          ref = _ref3[1];
      description.push(ref.describe());
    }

    return description;
  };

  _proto.toArray = function toArray() {
    return _toArray(this.list).concat(_toArray(this.refs.values()));
  };

  _proto.add = function add(value) {
    Ref.isRef(value) ? this.refs.set(value.key, value) : this.list.add(value);
  };

  _proto.delete = function _delete(value) {
    Ref.isRef(value) ? this.refs.delete(value.key) : this.list.delete(value);
  };

  _proto.has = function has(value, resolve) {
    if (this.list.has(value)) return true;
    var item,
        values = this.refs.values();

    while (item = values.next(), !item.done) {
      if (resolve(item.value) === value) return true;
    }

    return false;
  };

  _proto.clone = function clone() {
    var next = new RefSet();
    next.list = new Set(this.list);
    next.refs = new Map(this.refs);
    return next;
  };

  _proto.merge = function merge(newItems, removeItems) {
    var next = this.clone();
    newItems.list.forEach(function (value) {
      return next.add(value);
    });
    newItems.refs.forEach(function (value) {
      return next.add(value);
    });
    removeItems.list.forEach(function (value) {
      return next.delete(value);
    });
    removeItems.refs.forEach(function (value) {
      return next.delete(value);
    });
    return next;
  };

  _createClass(RefSet, [{
    key: "size",
    get: function get() {
      return this.list.size + this.refs.size;
    }
  }]);

  return RefSet;
}();

export default function SchemaType(options) {
  var _this = this;

  if (options === void 0) {
    options = {};
  }

  if (!(this instanceof SchemaType)) return new SchemaType();
  this._deps = [];
  this._conditions = [];
  this._options = {
    abortEarly: true,
    recursive: true
  };
  this._exclusive = Object.create(null);
  this._whitelist = new RefSet();
  this._blacklist = new RefSet();
  this.tests = [];
  this.transforms = [];
  this.withMutation(function () {
    _this.typeError(locale.notType);
  });
  if (has(options, 'default')) this._defaultDefault = options.default;
  this.type = options.type || 'mixed'; // TODO: remove

  this._type = options.type || 'mixed';
}
var proto = SchemaType.prototype = {
  __isYupSchema__: true,
  constructor: SchemaType,
  clone: function clone() {
    var _this2 = this;

    if (this._mutate) return this; // if the nested value is a schema we can skip cloning, since
    // they are already immutable

    return cloneDeepWith(this, function (value) {
      if (isSchema(value) && value !== _this2) return value;
    });
  },
  label: function label(_label) {
    var next = this.clone();
    next._label = _label;
    return next;
  },
  meta: function meta(obj) {
    if (arguments.length === 0) return this._meta;
    var next = this.clone();
    next._meta = _extends(next._meta || {}, obj);
    return next;
  },
  withMutation: function withMutation(fn) {
    var before = this._mutate;
    this._mutate = true;
    var result = fn(this);
    this._mutate = before;
    return result;
  },
  concat: function concat(schema) {
    if (!schema || schema === this) return this;
    if (schema._type !== this._type && this._type !== 'mixed') throw new TypeError("You cannot `concat()` schema's of different types: " + this._type + " and " + schema._type);
    var next = prependDeep(schema.clone(), this); // new undefined default is overridden by old non-undefined one, revert

    if (has(schema, '_default')) next._default = schema._default;
    next.tests = this.tests;
    next._exclusive = this._exclusive; // manually merge the blacklist/whitelist (the other `schema` takes
    // precedence in case of conflicts)

    next._whitelist = this._whitelist.merge(schema._whitelist, schema._blacklist);
    next._blacklist = this._blacklist.merge(schema._blacklist, schema._whitelist); // manually add the new tests to ensure
    // the deduping logic is consistent

    next.withMutation(function (next) {
      schema.tests.forEach(function (fn) {
        next.test(fn.OPTIONS);
      });
    });
    return next;
  },
  isType: function isType(v) {
    if (this._nullable && v === null) return true;
    return !this._typeCheck || this._typeCheck(v);
  },
  resolve: function resolve(options) {
    var schema = this;

    if (schema._conditions.length) {
      var conditions = schema._conditions;
      schema = schema.clone();
      schema._conditions = [];
      schema = conditions.reduce(function (schema, condition) {
        return condition.resolve(schema, options);
      }, schema);
      schema = schema.resolve(options);
    }

    return schema;
  },
  cast: function cast(value, options) {
    if (options === void 0) {
      options = {};
    }

    var resolvedSchema = this.resolve(_extends({}, options, {
      value: value
    }));

    var result = resolvedSchema._cast(value, options);

    if (value !== undefined && options.assert !== false && resolvedSchema.isType(result) !== true) {
      var formattedValue = printValue(value);
      var formattedResult = printValue(result);
      throw new TypeError("The value of " + (options.path || 'field') + " could not be cast to a value " + ("that satisfies the schema type: \"" + resolvedSchema._type + "\". \n\n") + ("attempted value: " + formattedValue + " \n") + (formattedResult !== formattedValue ? "result of cast: " + formattedResult : ''));
    }

    return result;
  },
  _cast: function _cast(rawValue) {
    var _this3 = this;

    var value = rawValue === undefined ? rawValue : this.transforms.reduce(function (value, fn) {
      return fn.call(_this3, value, rawValue);
    }, rawValue);

    if (value === undefined && has(this, '_default')) {
      value = this.default();
    }

    return value;
  },
  _validate: function _validate(_value, options) {
    var _this4 = this;

    if (options === void 0) {
      options = {};
    }

    var value = _value;
    var originalValue = options.originalValue != null ? options.originalValue : _value;

    var isStrict = this._option('strict', options);

    var endEarly = this._option('abortEarly', options);

    var sync = options.sync;
    var path = options.path;
    var label = this._label;

    if (!isStrict) {
      value = this._cast(value, _extends({
        assert: false
      }, options));
    } // value is cast, we can check if it meets type requirements


    var validationParams = {
      value: value,
      path: path,
      schema: this,
      options: options,
      label: label,
      originalValue: originalValue,
      sync: sync
    };

    if (options.from) {
      validationParams.from = options.from;
    }

    var initialTests = [];
    if (this._typeError) initialTests.push(this._typeError(validationParams));
    if (this._whitelistError) initialTests.push(this._whitelistError(validationParams));
    if (this._blacklistError) initialTests.push(this._blacklistError(validationParams));
    return runValidations({
      validations: initialTests,
      endEarly: endEarly,
      value: value,
      path: path,
      sync: sync
    }).then(function (value) {
      return runValidations({
        path: path,
        sync: sync,
        value: value,
        endEarly: endEarly,
        validations: _this4.tests.map(function (fn) {
          return fn(validationParams);
        })
      });
    });
  },
  validate: function validate(value, options) {
    if (options === void 0) {
      options = {};
    }

    var schema = this.resolve(_extends({}, options, {
      value: value
    }));
    return schema._validate(value, options);
  },
  validateSync: function validateSync(value, options) {
    if (options === void 0) {
      options = {};
    }

    var schema = this.resolve(_extends({}, options, {
      value: value
    }));
    var result, err;

    schema._validate(value, _extends({}, options, {
      sync: true
    })).then(function (r) {
      return result = r;
    }).catch(function (e) {
      return err = e;
    });

    if (err) throw err;
    return result;
  },
  isValid: function isValid(value, options) {
    return this.validate(value, options).then(function () {
      return true;
    }).catch(function (err) {
      if (err.name === 'ValidationError') return false;
      throw err;
    });
  },
  isValidSync: function isValidSync(value, options) {
    try {
      this.validateSync(value, options);
      return true;
    } catch (err) {
      if (err.name === 'ValidationError') return false;
      throw err;
    }
  },
  getDefault: function getDefault(options) {
    if (options === void 0) {
      options = {};
    }

    var schema = this.resolve(options);
    return schema.default();
  },
  default: function _default(def) {
    if (arguments.length === 0) {
      var defaultValue = has(this, '_default') ? this._default : this._defaultDefault;
      return typeof defaultValue === 'function' ? defaultValue.call(this) : cloneDeepWith(defaultValue);
    }

    var next = this.clone();
    next._default = def;
    return next;
  },
  strict: function strict(isStrict) {
    if (isStrict === void 0) {
      isStrict = true;
    }

    var next = this.clone();
    next._options.strict = isStrict;
    return next;
  },
  _isPresent: function _isPresent(value) {
    return value != null;
  },
  required: function required(message) {
    if (message === void 0) {
      message = locale.required;
    }

    return this.test({
      message: message,
      name: 'required',
      exclusive: true,
      test: function test(value) {
        return this.schema._isPresent(value);
      }
    });
  },
  notRequired: function notRequired() {
    var next = this.clone();
    next.tests = next.tests.filter(function (test) {
      return test.OPTIONS.name !== 'required';
    });
    return next;
  },
  nullable: function nullable(isNullable) {
    if (isNullable === void 0) {
      isNullable = true;
    }

    var next = this.clone();
    next._nullable = isNullable;
    return next;
  },
  transform: function transform(fn) {
    var next = this.clone();
    next.transforms.push(fn);
    return next;
  },

  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */
  test: function test() {
    var opts;

    if (arguments.length === 1) {
      if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'function') {
        opts = {
          test: arguments.length <= 0 ? undefined : arguments[0]
        };
      } else {
        opts = arguments.length <= 0 ? undefined : arguments[0];
      }
    } else if (arguments.length === 2) {
      opts = {
        name: arguments.length <= 0 ? undefined : arguments[0],
        test: arguments.length <= 1 ? undefined : arguments[1]
      };
    } else {
      opts = {
        name: arguments.length <= 0 ? undefined : arguments[0],
        message: arguments.length <= 1 ? undefined : arguments[1],
        test: arguments.length <= 2 ? undefined : arguments[2]
      };
    }

    if (opts.message === undefined) opts.message = locale.default;
    if (typeof opts.test !== 'function') throw new TypeError('`test` is a required parameters');
    var next = this.clone();
    var validate = createValidation(opts);
    var isExclusive = opts.exclusive || opts.name && next._exclusive[opts.name] === true;

    if (opts.exclusive && !opts.name) {
      throw new TypeError('Exclusive tests must provide a unique `name` identifying the test');
    }

    next._exclusive[opts.name] = !!opts.exclusive;
    next.tests = next.tests.filter(function (fn) {
      if (fn.OPTIONS.name === opts.name) {
        if (isExclusive) return false;
        if (fn.OPTIONS.test === validate.OPTIONS.test) return false;
      }

      return true;
    });
    next.tests.push(validate);
    return next;
  },
  when: function when(keys, options) {
    if (arguments.length === 1) {
      options = keys;
      keys = '.';
    }

    var next = this.clone(),
        deps = [].concat(keys).map(function (key) {
      return new Ref(key);
    });
    deps.forEach(function (dep) {
      if (dep.isSibling) next._deps.push(dep.key);
    });

    next._conditions.push(new Condition(deps, options));

    return next;
  },
  typeError: function typeError(message) {
    var next = this.clone();
    next._typeError = createValidation({
      message: message,
      name: 'typeError',
      test: function test(value) {
        if (value !== undefined && !this.schema.isType(value)) return this.createError({
          params: {
            type: this.schema._type
          }
        });
        return true;
      }
    });
    return next;
  },
  oneOf: function oneOf(enums, message) {
    if (message === void 0) {
      message = locale.oneOf;
    }

    var next = this.clone();
    enums.forEach(function (val) {
      next._whitelist.add(val);

      next._blacklist.delete(val);
    });
    next._whitelistError = createValidation({
      message: message,
      name: 'oneOf',
      test: function test(value) {
        if (value === undefined) return true;
        var valids = this.schema._whitelist;
        return valids.has(value, this.resolve) ? true : this.createError({
          params: {
            values: valids.toArray().join(', ')
          }
        });
      }
    });
    return next;
  },
  notOneOf: function notOneOf(enums, message) {
    if (message === void 0) {
      message = locale.notOneOf;
    }

    var next = this.clone();
    enums.forEach(function (val) {
      next._blacklist.add(val);

      next._whitelist.delete(val);
    });
    next._blacklistError = createValidation({
      message: message,
      name: 'notOneOf',
      test: function test(value) {
        var invalids = this.schema._blacklist;
        if (invalids.has(value, this.resolve)) return this.createError({
          params: {
            values: invalids.toArray().join(', ')
          }
        });
        return true;
      }
    });
    return next;
  },
  strip: function strip(_strip) {
    if (_strip === void 0) {
      _strip = true;
    }

    var next = this.clone();
    next._strip = _strip;
    return next;
  },
  _option: function _option(key, overrides) {
    return has(overrides, key) ? overrides[key] : this._options[key];
  },
  describe: function describe() {
    var next = this.clone();
    var description = {
      type: next._type,
      meta: next._meta,
      label: next._label,
      tests: next.tests.map(function (fn) {
        return {
          name: fn.OPTIONS.name,
          params: fn.OPTIONS.params
        };
      }).filter(function (n, idx, list) {
        return list.findIndex(function (c) {
          return c.name === n.name;
        }) === idx;
      })
    };
    if (next._whitelist.size) description.oneOf = next._whitelist.describe();
    if (next._blacklist.size) description.notOneOf = next._blacklist.describe();
    return description;
  },
  defined: function defined(message) {
    if (message === void 0) {
      message = locale.defined;
    }

    return this.nullable().test({
      message: message,
      name: 'defined',
      exclusive: true,
      test: function test(value) {
        return value !== undefined;
      }
    });
  }
};

var _loop = function _loop() {
  var method = _arr[_i3];

  proto[method + "At"] = function (path, value, options) {
    if (options === void 0) {
      options = {};
    }

    var _getIn = getIn(this, path, value, options.context),
        parent = _getIn.parent,
        parentPath = _getIn.parentPath,
        schema = _getIn.schema;

    return schema[method](parent && parent[parentPath], _extends({}, options, {
      parent: parent,
      path: path
    }));
  };
};

for (var _i3 = 0, _arr = ['validate', 'validateSync']; _i3 < _arr.length; _i3++) {
  _loop();
}

for (var _i4 = 0, _arr2 = ['equals', 'is']; _i4 < _arr2.length; _i4++) {
  var alias = _arr2[_i4];
  proto[alias] = proto.oneOf;
}

for (var _i5 = 0, _arr3 = ['not', 'nope']; _i5 < _arr3.length; _i5++) {
  var _alias = _arr3[_i5];
  proto[_alias] = proto.notOneOf;
}

proto.optional = proto.notRequired;
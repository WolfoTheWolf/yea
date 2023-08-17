"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ariaAbstractRoles = _interopRequireDefault(require("./etc/roles/ariaAbstractRoles"));

var _ariaLiteralRoles = _interopRequireDefault(require("./etc/roles/ariaLiteralRoles"));

var _ariaDpubRoles = _interopRequireDefault(require("./etc/roles/ariaDpubRoles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var roles = [].concat(_ariaAbstractRoles.default, _ariaLiteralRoles.default, _ariaDpubRoles.default);
roles.forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      roleDefinition = _ref2[1];

  // Conglomerate the properties
  var _iterator = _createForOfIteratorHelper(roleDefinition.superClass),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var superClassIter = _step.value;

      var _iterator2 = _createForOfIteratorHelper(superClassIter),
          _step2;

      try {
        var _loop = function _loop() {
          var superClassName = _step2.value;
          var superClassRoleTuple = roles.find(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 1),
                name = _ref4[0];

            return name === superClassName;
          });

          if (superClassRoleTuple) {
            var superClassDefinition = superClassRoleTuple[1];

            for (var _i2 = 0, _Object$keys = Object.keys(superClassDefinition.props); _i2 < _Object$keys.length; _i2++) {
              var prop = _Object$keys[_i2];

              if ( // $FlowIssue Accessing the hasOwnProperty on the Object prototype is fine.
              !Object.prototype.hasOwnProperty.call(roleDefinition.props, prop)) {
                Object.assign(roleDefinition.props, _defineProperty({}, prop, superClassDefinition.props[prop]));
              }
            }
          }
        };

        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});
var rolesMap = {
  entries: function entries() {
    return roles;
  },
  get: function get(key) {
    var item = roles.find(function (tuple) {
      return tuple[0] === key ? true : false;
    });
    return item && item[1];
  },
  has: function has(key) {
    return !!this.get(key);
  },
  keys: function keys() {
    return roles.map(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 1),
          key = _ref6[0];

      return key;
    });
  },
  values: function values() {
    return roles.map(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2),
          values = _ref8[1];

      return values;
    });
  }
};
var _default = rolesMap;
exports.default = _default;
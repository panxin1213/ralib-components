"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MessageCode;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _classnames = _interopRequireDefault(require("classnames"));

var _componentContext = _interopRequireDefault(require("../component-context"));

require("./style.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function MessageCode(props) {
  var _classNames2;

  var context = (0, _react.useContext)(_componentContext.default);

  var time = props.time,
      buttonType = props.buttonType,
      onSend = props.onSend,
      wrapperProps = props.wrapperProps,
      buttonProps = props.buttonProps,
      placeholder = props.placeholder,
      className = props.className,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
      others = _objectWithoutProperties(props, ["time", "buttonType", "onSend", "wrapperProps", "buttonProps", "placeholder", "className", "prefixCls"]);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  function handleClick() {
    return _handleClick.apply(this, arguments);
  } // 开始倒计时


  function _handleClick() {
    _handleClick = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var ok;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setLoading(true);
              _context.t0 = onSend;

              if (!_context.t0) {
                _context.next = 7;
                break;
              }

              _context.next = 6;
              return onSend();

            case 6:
              _context.t0 = _context.sent;

            case 7:
              ok = _context.t0;

              if (ok === true) {
                setCount(time);
              }

            case 9:
              _context.prev = 9;
              setLoading(false);
              return _context.finish(9);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0,, 9, 12]]);
    }));
    return _handleClick.apply(this, arguments);
  }

  (0, _react.useEffect)(function () {
    var st = setTimeout(function () {
      var nextCount = count - 1;
      if (nextCount < 0) window.clearTimeout(st);
      setCount(nextCount);
    }, 1000);
    return function () {
      return clearInterval(st);
    };
  }, [count]);
  prefixCls = "".concat(prefixCls, "-message-code");
  var rootClass = (0, _classnames.default)(prefixCls, className);
  var inputClass = (0, _classnames.default)(_defineProperty({}, "".concat(prefixCls, "-text-input"), buttonType === 'text'));
  var buttonTextClass = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-text-button"), buttonType === 'text'), _defineProperty(_classNames2, "".concat(prefixCls, "-button"), true), _classNames2)); // 时间大于 0 发送按钮不可点击

  var disabled = count > 0;
  return /*#__PURE__*/_react.default.createElement(_antd.Spin, {
    spinning: loading,
    size: 'small'
  }, /*#__PURE__*/_react.default.createElement("div", Object.assign({
    className: rootClass,
    // @ts-ignore
    style: _objectSpread({}, wrapperProps.style || {})
  }, wrapperProps), /*#__PURE__*/_react.default.createElement(_antd.Input, Object.assign({
    className: inputClass,
    placeholder: placeholder
  }, others)), /*#__PURE__*/_react.default.createElement(_antd.Button, Object.assign({
    className: buttonTextClass,
    type: buttonType,
    disabled: disabled,
    onClick: handleClick
  }, buttonProps), disabled ? "\u91CD\u65B0\u53D1\u9001(".concat(count, "s)") : '发送验证码 ')));
}

MessageCode.defaultProps = {
  time: 60,
  buttonType: 'default',
  wrapperProps: {},
  buttonProps: {},
  placeholder: '请输入短信验证码'
};
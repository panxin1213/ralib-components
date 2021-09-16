"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _componentContext = _interopRequireDefault(require("../component-context"));

var _hooks = require("@ra-lib/hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ModalContent = /*#__PURE__*/(0, _react.forwardRef)(function (props, _ref) {
  var context = (0, _react.useContext)(_componentContext.default);
  var antdContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext);
  var antdPrefixCls = antdContext.getPrefixCls();

  var children = props.children,
      _props$loading = props.loading,
      propsLoading = _props$loading === void 0 ? false : _props$loading,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      _props$bodyStyle = props.bodyStyle,
      bodyStyle = _props$bodyStyle === void 0 ? {} : _props$bodyStyle,
      _props$fitHeight = props.fitHeight,
      fitHeight = _props$fitHeight === void 0 ? false : _props$fitHeight,
      _props$okHtmlType = props.okHtmlType,
      okHtmlType = _props$okHtmlType === void 0 ? '' : _props$okHtmlType,
      _props$onOk = props.onOk,
      onOk = _props$onOk === void 0 ? function () {
    return undefined;
  } : _props$onOk,
      _props$onCancel = props.onCancel,
      onCancel = _props$onCancel === void 0 ? function () {
    return undefined;
  } : _props$onCancel,
      otherHeight = props.otherHeight,
      _props$loadingTip = props.loadingTip,
      loadingTip = _props$loadingTip === void 0 ? context.loadingTip : _props$loadingTip,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
      fullScreen = props.fullScreen,
      footer = props.footer,
      _props$okText = props.okText,
      okText = _props$okText === void 0 ? context.okText : _props$okText,
      _props$cancelText = props.cancelText,
      cancelText = _props$cancelText === void 0 ? context.cancelText : _props$cancelText,
      others = _objectWithoutProperties(props, ["children", "loading", "style", "bodyStyle", "fitHeight", "okHtmlType", "onOk", "onCancel", "otherHeight", "loadingTip", "prefixCls", "fullScreen", "footer", "okText", "cancelText"]);

  var _useState = (0, _react.useState)(propsLoading),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  if (context.isMobile && fullScreen === undefined) fullScreen = true;
  var defaultOtherHeight = 50;

  if (fullScreen) {
    defaultOtherHeight = 0;
    fitHeight = true;
  }

  var rootRef = (0, _react.useRef)(null);

  var _useHeight = (0, _hooks.useHeight)(rootRef, otherHeight || defaultOtherHeight),
      _useHeight2 = _slicedToArray(_useHeight, 1),
      height = _useHeight2[0];

  var outerStyle = _objectSpread({
    display: 'flex',
    flexDirection: 'column',
    height: fitHeight ? height : 'auto'
  }, style); // 多次连续设置loading时，保值loading不间断显示


  (0, _react.useEffect)(function () {
    if (propsLoading) {
      setLoading(true);
    } else {
      var timer = setTimeout(function () {
        setLoading(false);
      }, 100);
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [propsLoading]);
  return /*#__PURE__*/_react.default.createElement(_antd.Spin, {
    spinning: loading,
    tip: loadingTip
  }, /*#__PURE__*/_react.default.createElement("div", Object.assign({
    className: "".concat(prefixCls, "-modal-content"),
    ref: function ref(rootDom) {
      rootRef.current = rootDom; // @ts-ignore
      // eslint-disable-next-line no-param-reassign

      if (_ref) _ref.current = rootDom;
    },
    style: outerStyle
  }, others), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "-modal-content-inner"),
    style: _objectSpread({
      flex: 1,
      padding: 16,
      overflow: fitHeight || fullScreen ? 'auto' : ''
    }, bodyStyle)
  }, children), footer !== false ? /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(antdPrefixCls, "-modal-footer"),
    style: {
      flex: 0
    }
  }, footer || /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    onClick: onOk,
    htmlType: okHtmlType
  }, okText), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    onClick: onCancel
  }, cancelText))) : null));
});
var _default = ModalContent;
exports.default = _default;
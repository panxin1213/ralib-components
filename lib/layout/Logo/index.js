"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _classnames = _interopRequireDefault(require("classnames"));

var _componentContext = _interopRequireDefault(require("../../component-context"));

require("./style.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Header(props) {
  var context = (0, _react.useContext)(_componentContext.default);
  var className = props.className,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      height = props.height,
      width = props.width,
      logo = props.logo,
      title = props.title,
      sideCollapsed = props.sideCollapsed,
      showSide = props.showSide,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? 'dark' : _props$theme;

  function handleLogoClick() {
    props.history.push('/');
  }

  prefixCls = "".concat(prefixCls, "-layout-logo");
  var rootClass = (0, _classnames.default)(prefixCls, className, {
    collapsed: sideCollapsed,
    'no-side': !showSide,
    dark: theme === 'dark'
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: rootClass,
    style: _objectSpread({
      width: width,
      flex: "0 0 ".concat(width, "px")
    }, style),
    onClick: handleLogoClick
  }, typeof logo === 'string' ? /*#__PURE__*/_react.default.createElement("img", {
    className: "".concat(prefixCls, "-image"),
    style: {
      height: height - 16
    },
    src: logo,
    alt: "logo"
  }) : {
    logo: logo
  }, sideCollapsed ? null : /*#__PURE__*/_react.default.createElement("h1", {
    className: "".concat(prefixCls, "-title")
  }, title));
}

var _default = (0, _reactRouterDom.withRouter)(Header);

exports.default = _default;
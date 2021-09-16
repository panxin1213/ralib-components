"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MyBreadcrumb;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _reactRouterDom = require("react-router-dom");

var _componentContext = _interopRequireDefault(require("../../component-context"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./style.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function MyBreadcrumb(props) {
  var context = (0, _react.useContext)(_componentContext.default);
  var className = props.className,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
      pageTitle = props.pageTitle,
      selectedMenu = props.selectedMenu,
      selectedMenuParents = props.selectedMenuParents,
      breadcrumb = props.breadcrumb,
      appendBreadcrumb = props.appendBreadcrumb;
  if (breadcrumb === false) return null;
  prefixCls = "".concat(prefixCls, "-layout-breadcrumb");
  var rootClass = (0, _classnames.default)(prefixCls, className);

  var dataSource = _toConsumableArray(selectedMenuParents);

  var current = pageTitle ? {
    title: pageTitle
  } : selectedMenu;
  if (current) dataSource.push(current);
  if (breadcrumb) dataSource = breadcrumb;

  if (appendBreadcrumb) {
    if (!Array.isArray(appendBreadcrumb)) appendBreadcrumb = [appendBreadcrumb];
    dataSource = [].concat(_toConsumableArray(dataSource), _toConsumableArray(appendBreadcrumb));
  }

  if (!dataSource.length) return null;
  return /*#__PURE__*/_react.default.createElement(_antd.Breadcrumb, {
    className: rootClass
  }, dataSource.map(function (item, index) {
    var icon = item.icon,
        title = item.title,
        path = item.path;
    var isLast = index === dataSource.length - 1;
    title = /*#__PURE__*/_react.default.createElement("span", null, icon, title);
    if (path && !isLast) title = /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: path
    }, title);
    return /*#__PURE__*/_react.default.createElement(_antd.Breadcrumb.Item, {
      key: title
    }, title);
  }));
}
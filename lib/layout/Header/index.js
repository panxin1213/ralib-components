"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _classnames = _interopRequireDefault(require("classnames"));

var _util = require("@ra-lib/util");

var _componentContext = _interopRequireDefault(require("../../component-context"));

var _layoutType = _interopRequireDefault(require("../layout-type"));

var _Menu = _interopRequireDefault(require("../Menu"));

var _SideToggle = _interopRequireDefault(require("../SideToggle"));

var _MenuPane = _interopRequireDefault(require("../MenuPane"));

var _Logo = _interopRequireDefault(require("../Logo"));

require("./style.less");

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

function Header(props) {
  var context = (0, _react.useContext)(_componentContext.default);
  var className = props.className,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
      height = props.height,
      sideWidth = props.sideWidth,
      logo = props.logo,
      title = props.title,
      sideCollapsed = props.sideCollapsed,
      showSide = props.showSide,
      onToggleSide = props.onToggleSide,
      selectedMenuPath = props.selectedMenuPath,
      menuTreeData = props.menuTreeData,
      _props$showToggle = props.showToggle,
      showToggle = _props$showToggle === void 0 ? true : _props$showToggle,
      _props$showMenuPane = props.showMenuPane,
      showMenuPane = _props$showMenuPane === void 0 ? false : _props$showMenuPane,
      layoutType = props.layoutType,
      extra = props.extra,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? 'default' : _props$theme,
      logoTheme = props.logoTheme;

  var _useState = (0, _react.useState)(selectedMenuPath),
      _useState2 = _slicedToArray(_useState, 2),
      topSelectedMenuPath = _useState2[0],
      setTopSelectedMenuPath = _useState2[1];

  var _useState3 = (0, _react.useState)(menuTreeData),
      _useState4 = _slicedToArray(_useState3, 2),
      topMenus = _useState4[0],
      setTopMenus = _useState4[1];

  (0, _react.useEffect)(function () {
    var parentNodes = (0, _util.findParentNodes)(menuTreeData, selectedMenuPath, 'path');

    if (parentNodes && parentNodes.length) {
      var node = topMenus.find(function (item) {
        return item.id === parentNodes[0].id;
      });

      if (node) {
        setTopSelectedMenuPath(node.path);
      }
    }
  }, [topMenus, menuTreeData, selectedMenuPath]);
  (0, _react.useEffect)(function () {
    if (layoutType === _layoutType.default.TOP_MENU) {
      setTopMenus(menuTreeData);
    }

    if (layoutType === _layoutType.default.TOP_SIDE_MENU) {
      var menus = menuTreeData.map(function (topNode) {
        var _ref = (0, _util.getFirstNode)(topNode, 'path') || {},
            path = _ref.path,
            url = _ref.url,
            target = _ref.target;

        return _objectSpread(_objectSpread({}, topNode), {}, {
          children: [],
          path: path,
          url: url,
          target: target
        });
      });
      setTopMenus(menus);
    }
  }, [menuTreeData, layoutType]);
  prefixCls = "".concat(prefixCls, "-layout-header");
  var rootClass = (0, _classnames.default)(prefixCls, className, {
    collapsed: sideCollapsed,
    dark: theme === 'dark'
  });
  var contentClass = (0, _classnames.default)("".concat(prefixCls, "-content"));
  return /*#__PURE__*/_react.default.createElement("header", {
    className: rootClass,
    style: {
      height: height
    }
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, {
    logo: logo,
    title: title,
    height: height,
    width: sideWidth,
    sideCollapsed: sideCollapsed,
    showSide: showSide,
    theme: logoTheme
  }), showToggle ? /*#__PURE__*/_react.default.createElement(_SideToggle.default, {
    sideCollapsed: sideCollapsed,
    onToggleSide: onToggleSide,
    theme: theme
  }) : null, showMenuPane ? /*#__PURE__*/_react.default.createElement(_MenuPane.default, null) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: contentClass
  }, /*#__PURE__*/_react.default.createElement("div", null, [_layoutType.default.TOP_MENU, _layoutType.default.TOP_SIDE_MENU].includes(layoutType) && topMenus.length ? /*#__PURE__*/_react.default.createElement(_Menu.default, {
    mode: "horizontal",
    theme: theme,
    keepMenuOpen: false,
    showSearchMenu: false,
    menuTreeData: topMenus,
    selectedMenuPath: topSelectedMenuPath
  }) : null), extra));
}

var _default = (0, _reactRouterDom.withRouter)(Header);

exports.default = _default;
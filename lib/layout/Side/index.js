"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Side;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _componentContext = _interopRequireDefault(require("../../component-context"));

var _util = require("@ra-lib/util");

var _Menu = _interopRequireDefault(require("../Menu"));

var _layoutType = _interopRequireDefault(require("../layout-type"));

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

function Side(props) {
  var context = (0, _react.useContext)(_componentContext.default);
  var className = props.className,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
      headerHeight = props.headerHeight,
      sideWidth = props.sideWidth,
      sideCollapsed = props.sideCollapsed,
      selectedMenuPath = props.selectedMenuPath,
      searchMenuPlaceholder = props.searchMenuPlaceholder,
      collectedMenuTitle = props.collectedMenuTitle,
      showSearchMenu = props.showSearchMenu,
      renderSide = props.renderSide,
      menuTreeData = props.menuTreeData,
      keepMenuOpen = props.keepMenuOpen,
      sideMinWidth = props.sideMinWidth,
      layoutType = props.layoutType,
      selectedMenuParents = props.selectedMenuParents,
      theme = props.theme,
      _props$collectedMenus = props.collectedMenus,
      collectedMenus = _props$collectedMenus === void 0 ? [{
    id: '2',
    title: '用户管理',
    path: '/users'
  }, {
    id: '3',
    title: '角色管理',
    path: '/roles'
  }] : _props$collectedMenus,
      onMenuCollect = props.onMenuCollect;
  var collectionMenuId = 'collection-menu';
  var showCollectedMenus = !!collectedMenus;
  var sideMenus = (0, _react.useMemo)(function () {
    var nextSideMenus = [];

    if (_layoutType.default.SIDE_MENU === layoutType) {
      nextSideMenus = _toConsumableArray(menuTreeData);
    }

    if (_layoutType.default.TOP_SIDE_MENU === layoutType) {
      var parentNodes = (0, _util.findParentNodes)(menuTreeData, selectedMenuPath, 'path');

      if (parentNodes && parentNodes.length) {
        nextSideMenus = _toConsumableArray(parentNodes[0].children || []);
      }
    }

    if (!showCollectedMenus) return nextSideMenus; // 添加我的收藏菜单

    var collectionMenu = {
      id: collectionMenuId,
      children: collectedMenus
    };
    var collectionMenuIds = (0, _util.findGenerationNodes)(collectionMenu, collectionMenuId).map(function (item) {
      return "".concat(item.id);
    });
    collectionMenu.title = "".concat(collectedMenuTitle, "\uFF08").concat(collectionMenuIds.length, "\uFF09");
    nextSideMenus.unshift(collectionMenu); // 标记是否已收藏

    var loop = function loop(nodes) {
      return nodes.forEach(function (node) {
        var id = node.id,
            children = node.children; // eslint-disable-next-line no-param-reassign

        node.isCollected = collectionMenuIds.includes("".concat(id)) && id !== collectionMenuId;
        if (children) loop(children);
      });
    };

    loop(nextSideMenus);
    return nextSideMenus;
  }, [collectedMenuTitle, menuTreeData, collectedMenus, showCollectedMenus, layoutType, selectedMenuPath]);
  prefixCls = "".concat(prefixCls, "-layout-side");
  var rootClass = (0, _classnames.default)(prefixCls, className, {
    dark: theme === 'dark',
    collapsed: sideCollapsed
  });
  var footerClass = (0, _classnames.default)("".concat(prefixCls, "-footer"));
  return /*#__PURE__*/_react.default.createElement("aside", {
    className: rootClass,
    style: {
      top: headerHeight,
      width: sideWidth
    }
  }, renderSide ? renderSide({
    menuTreeData: menuTreeData,
    Menu: _Menu.default
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, [_layoutType.default.SIDE_MENU, _layoutType.default.TOP_SIDE_MENU].includes(layoutType) ? /*#__PURE__*/_react.default.createElement(_Menu.default, {
    theme: theme,
    sideMinWidth: sideMinWidth,
    keepMenuOpen: keepMenuOpen,
    selectedMenuPath: selectedMenuPath,
    sideCollapsed: sideCollapsed,
    menuTreeData: sideMenus,
    searchMenuPlaceholder: searchMenuPlaceholder,
    showSearchMenu: showSearchMenu,
    selectedMenuParents: selectedMenuParents,
    showCollectedMenus: showCollectedMenus,
    collectionMenuId: collectionMenuId,
    onMenuCollect: onMenuCollect
  }) : null, /*#__PURE__*/_react.default.createElement("footer", {
    className: footerClass
  })));
}
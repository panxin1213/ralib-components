function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import React, { useRef, useEffect, useContext, useReducer, forwardRef, useImperativeHandle } from 'react';
import classNames from 'classnames'; // @ts-ignore

import { getTreeData, findNode, findParentNodes } from '@ra-lib/util';
import ComponentContext from '../component-context';
import Header from './Header';
import MobileHeader from './MobileHeader';
import Tab from './Tab';
import PageHeader from './PageHeader';
import Side from './Side';
import LAYOUT_TYPE from './layout-type';
import KeepPageAlive from './KeepPageAlive'; // @ts-ignore

import logoImage from './logo.png';
import './style.less';

function reducer(state, action) {
  var type = action.type,
    payload = action.payload;

  switch (type) {
    case 'setState':
      {
        if (payload && _typeof(payload) === 'object' && !Array.isArray(payload)) {
          return _objectSpread(_objectSpread({}, state), payload);
        }

        return _objectSpread({}, state);
      }

    case 'toggleSide':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          sideCollapsed: !state.sideCollapsed
        });
      }

    default:
      throw new Error("no such action type [".concat(type, "]"));
  }
}

var Layout = /*#__PURE__*/forwardRef(function (props, ref) {
  var context = useContext(ComponentContext);
  var initialState = {
    prefixCls: context.prefixCls,
    logo: props.logo,
    title: props.title,
    hashRouter: props.hashRouter,
    baseName: props.baseName,
    isMobile: context.isMobile,
    headerTheme: props.headerTheme,
    headerHeight: props.headerHeight,
    sideMaxWidth: props.sideMaxWidth,
    sideMinWidth: props.sideMinWidth,
    sideCollapsed: props.sideCollapsed,
    showSearchMenu: props.showSearchMenu,
    searchMenuPlaceholder: props.searchMenuPlaceholder,
    collectedMenuTitle: props.collectedMenuTitle,
    renderSide: props.renderSide,
    showSide: props.showSide,
    sideTheme: props.sideTheme,
    logoTheme: props.logoTheme,
    keepMenuOpen: props.keepMenuOpen,
    showHeader: props.showHeader,
    showHeaderSideToggle: props.showHeaderSideToggle,
    showPageHeader: props.showPageHeader,
    pageHeaderHeight: props.pageHeaderHeight,
    showTab: props.showTab,
    persistTab: props.persistTab,
    tabHeight: props.tabHeight,
    layoutType: props.layoutType,
    keepPageAlive: props.keepPageAlive,
    showTabHeaderExtra: props.showTabHeaderExtra,
    showTabSideToggle: props.showTabSideToggle,
    menuTreeData: undefined,
    selectedMenu: null,
    selectedMenuParents: undefined // 初始化不能设置为[] 会产生死循环

  }; // 初始之后还可变数据，不存到state中

  var children = props.children,
    className = props.className,
    menus = props.menus,
    collectedMenus = props.collectedMenus,
    onMenuCollect = props.onMenuCollect,
    headerExtra = props.headerExtra,
    routes = props.routes,
    render404 = props.render404;

  var _useReducer = useReducer(reducer, _objectSpread({}, initialState)),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];

  var layoutAction = {
    state: state,
    setState: function setState(payload) {
      return dispatch({
        type: 'setState',
        payload: payload
      });
    },
    toggleSide: function toggleSide() {
      return dispatch({
        type: 'toggleSide'
      });
    }
  }; // 通过ref将一系列方法、数据返回给调用者使用

  useImperativeHandle(ref, function () {
    return layoutAction;
  });
  var prefixCls = state.prefixCls,
    layoutType = state.layoutType,
    keepPageAlive = state.keepPageAlive,
    hashRouter = state.hashRouter,
    baseName = state.baseName,
    isMobile = state.isMobile,
    showTab = state.showTab,
    tabHeight = state.tabHeight,
    showTabHeaderExtra = state.showTabHeaderExtra,
    showTabSideToggle = state.showTabSideToggle,
    persistTab = state.persistTab,
    showHeader = state.showHeader,
    headerTheme = state.headerTheme,
    headerHeight = state.headerHeight,
    logo = state.logo,
    title = state.title,
    showHeaderSideToggle = state.showHeaderSideToggle,
    sideMaxWidth = state.sideMaxWidth,
    sideMinWidth = state.sideMinWidth,
    showSearchMenu = state.showSearchMenu,
    searchMenuPlaceholder = state.searchMenuPlaceholder,
    collectedMenuTitle = state.collectedMenuTitle,
    renderSide = state.renderSide,
    sideCollapsed = state.sideCollapsed,
    selectedMenuPath = state.selectedMenuPath,
    showSide = state.showSide,
    sideTheme = state.sideTheme,
    logoTheme = state.logoTheme,
    _state$menuTreeData = state.menuTreeData,
    menuTreeData = _state$menuTreeData === void 0 ? [] : _state$menuTreeData,
    keepMenuOpen = state.keepMenuOpen,
    selectedMenu = state.selectedMenu,
    _state$selectedMenuPa = state.selectedMenuParents,
    selectedMenuParents = _state$selectedMenuPa === void 0 ? [] : _state$selectedMenuPa,
    showPageHeader = state.showPageHeader,
    pageHeaderHeight = state.pageHeaderHeight,
    pageTitle = state.pageTitle,
    breadcrumb = state.breadcrumb,
    appendBreadcrumb = state.appendBreadcrumb;
  prefixCls = "".concat(prefixCls, "-layout");
  var sideWidth = sideCollapsed ? sideMinWidth : sideMaxWidth;
  pageHeaderHeight = showPageHeader ? pageHeaderHeight : 0;
  if (layoutType === LAYOUT_TYPE.TOP_MENU) showSide = false;
  selectedMenuPath = selectedMenuPath || (hashRouter ? window.location.hash.replace('#', '').split('?')[0] : window.location.pathname);
  var keepAlivePagesRef = useRef(null);
  var tabsRef = useRef(persistTab && JSON.parse(window.localStorage.getItem('layout-tabs')) || []);
  useEffect(function () {
    // 延迟触发window 的 resize事件调整布局
    setTimeout(function () {
      return window.dispatchEvent(new Event('resize'));
    });
  }, [sideCollapsed, showSide, sideWidth, showHeader, headerHeight, showTab, tabHeight, showPageHeader, pageHeaderHeight]); // body添加padding站位

  useEffect(function () {
    var bodyEle = document.querySelector('body');
    var height = 0;
    if (showHeader) height += headerHeight;
    if (showPageHeader) height += pageHeaderHeight;
    if (showTab) height += tabHeight;
    bodyEle.style.paddingTop = "".concat(height, "px");
    bodyEle.style.paddingLeft = "".concat(showSide ? sideWidth : 0, "px");
    bodyEle.style.transition = showSide ? "padding-left ".concat(showSide ? '0s' : '0s', " cubic-bezier(0.2, 0, 0, 1)") : 'none';
    return function () {
      bodyEle.style.paddingTop = "".concat(0, "px");
      bodyEle.style.paddingLeft = "".concat(0, "px");
    };
  }, [sideWidth, showSide, showPageHeader, pageHeaderHeight, showHeader, headerHeight, showTab, tabHeight]); // 菜单转树状结构

  useEffect(function () {
    return layoutAction.setState({
      menuTreeData: getTreeData(menus)
    });
  }, [menus]); // 菜单选中状态

  useEffect(function () {
    // 收藏菜单不参与展开
    var nextMenus = menuTreeData.filter(function (item) {
      return item.id !== 'collection-menu';
    });
    nextMenus.forEach(function (item) {
      // 头部加左侧时，我的收藏菜单在children中
      // eslint-disable-next-line no-param-reassign
      if (item.children) item.children = item.children.filter(function (it) {
        return it.id !== 'collection-menu';
      });
    });
    layoutAction.setState({
      selectedMenu: findNode(nextMenus, selectedMenuPath, 'path'),
      selectedMenuParents: findParentNodes(nextMenus, selectedMenuPath, 'path')
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuTreeData, selectedMenuPath]);

  function handleTabClose(key, reload) {
    // tab关闭，keepAlivePages对应删除
    deleteKeepAlivePages(key, reload);
  }

  function deleteKeepAlivePages(keys, reload) {
    if (!keys) return;
    if (!keepAlivePagesRef.current) return;
    if (!keepAlivePagesRef.current.pages) return; // eslint-disable-next-line no-param-reassign

    if (!Array.isArray(keys)) keys = [keys];
    var pages = keepAlivePagesRef.current.pages;
    keys.forEach(function (key) {
      var index = pages.findIndex(function (item) {
        return item.key === key;
      });
      pages.splice(index, 1);
    });
    keepAlivePagesRef.current.refresh(reload);
  }

  var rootClass = classNames(prefixCls, className);
  pageTitle = pageTitle || (selectedMenu === null || selectedMenu === void 0 ? void 0 : selectedMenu.title);
  var side = /*#__PURE__*/React.createElement(Side, {
    headerHeight: function () {
      if (showHeader) return headerHeight;
      if (showTab) return tabHeight;
      return 0;
    }(),
    sideWidth: sideWidth,
    sideMinWidth: sideMinWidth,
    sideCollapsed: sideCollapsed,
    showSearchMenu: showSearchMenu,
    selectedMenuPath: selectedMenuPath,
    searchMenuPlaceholder: searchMenuPlaceholder,
    collectedMenuTitle: collectedMenuTitle,
    renderSide: renderSide,
    menuTreeData: menuTreeData,
    collectedMenus: collectedMenus,
    onMenuCollect: onMenuCollect,
    keepMenuOpen: keepMenuOpen,
    layoutType: layoutType,
    selectedMenuParents: selectedMenuParents,
    theme: sideTheme
  });

  if (isMobile) {
    return /*#__PURE__*/React.createElement(MobileHeader, {
      logo: logo,
      title: title,
      sideWidth: sideWidth,
      pageTitle: pageTitle,
      height: headerHeight,
      selectedMenuPath: selectedMenuPath,
      extra: headerExtra,
      theme: headerTheme,
      sideTheme: sideTheme,
      logoTheme: logoTheme
    }, side);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: rootClass
  }, showHeader ? /*#__PURE__*/React.createElement(Header, {
    theme: headerTheme,
    sideTheme: sideTheme,
    logoTheme: logoTheme,
    height: headerHeight,
    logo: logo,
    title: title,
    sideWidth: sideWidth,
    sideCollapsed: sideCollapsed,
    showSide: showSide,
    showToggle: showHeaderSideToggle,
    onToggleSide: function onToggleSide() {
      return layoutAction.toggleSide();
    },
    selectedMenuPath: selectedMenuPath,
    layoutType: layoutType,
    menuTreeData: menuTreeData,
    extra: headerExtra
  }) : null, showTab ? /*#__PURE__*/React.createElement(Tab, {
    logoTheme: logoTheme,
    routes: routes,
    tabs: tabsRef.current,
    pageTitle: pageTitle,
    onClose: handleTabClose,
    tabHeight: tabHeight,
    showHeader: showHeader,
    headerHeight: showHeader ? headerHeight : 0,
    sideWidth: showSide ? sideWidth : 0,
    showSide: showSide,
    headerExtra: showTabHeaderExtra ? headerExtra : null,
    showToggle: showTabSideToggle,
    sideCollapsed: sideCollapsed,
    onToggleSide: function onToggleSide() {
      return layoutAction.toggleSide();
    },
    logo: logo,
    title: title,
    persistTab: persistTab,
    keepPageAlive: keepPageAlive,
    hashRouter: hashRouter,
    selectedMenuPath: selectedMenuPath
  }) : null, showPageHeader ? /*#__PURE__*/React.createElement(PageHeader, {
    pageTitle: pageTitle,
    selectedMenu: selectedMenu,
    selectedMenuParents: selectedMenuParents,
    pageHeaderHeight: pageHeaderHeight,
    tabHeight: showTab ? tabHeight : 0,
    headerHeight: showHeader ? headerHeight : 0,
    sideWidth: showSide ? sideWidth : 0,
    breadcrumb: breadcrumb,
    appendBreadcrumb: appendBreadcrumb
  }) : null, showSide ? side : null, children ? /*#__PURE__*/React.createElement("main", null, children) : null), keepPageAlive ? /*#__PURE__*/React.createElement(KeepPageAlive, {
    ref: keepAlivePagesRef,
    routes: routes,
    render404: render404,
    hashRouter: hashRouter,
    baseName: baseName
  }) : null);
});
Layout.defaultProps = {
  logo: logoImage,
  title: 'React Admin',
  headerTheme: 'dark',
  headerHeight: 50,
  sideMaxWidth: 210,
  sideMinWidth: 50,
  sideCollapsed: false,
  showSearchMenu: true,
  searchMenuPlaceholder: '搜索菜单',
  collectedMenuTitle: '我的收藏',
  renderSide: undefined,
  showSide: true,
  sideTheme: 'dark',
  logoTheme: 'dark',
  keepMenuOpen: true,
  showHeader: true,
  showHeaderSideToggle: true,
  showPageHeader: true,
  pageHeaderHeight: 40,
  showTab: false,
  persistTab: true,
  tabHeight: 40,
  menus: [],
  collectedMenus: [],
  onMenuCollect: function onMenuCollect() {
    return undefined;
  },
  layoutType: LAYOUT_TYPE.SIDE_MENU,
  keepPageAlive: false,
  showTabHeaderExtra: false,
  showTabSideToggle: false,
  hashRouter: false,
  baseName: ''
};
export default Layout;
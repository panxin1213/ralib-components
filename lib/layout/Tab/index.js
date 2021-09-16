"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _pathToRegexp = require("path-to-regexp");

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = require("@ant-design/icons");

var _antd = require("antd");

var _componentContext = _interopRequireDefault(require("../../component-context"));

var _SideToggle = _interopRequireDefault(require("../SideToggle"));

var _Logo = _interopRequireDefault(require("../Logo"));

require("./style.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = (0, _reactRouterDom.withRouter)( /*#__PURE__*/_react.default.memo(function Tab(props) {
  var _tabs$find;

  var context = (0, _react.useContext)(_componentContext.default);
  var className = props.className,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
      pageTitle = props.pageTitle,
      tabs = props.tabs,
      onClose = props.onClose,
      tabHeight = props.tabHeight,
      showSide = props.showSide,
      headerHeight = props.headerHeight,
      sideWidth = props.sideWidth,
      routes = props.routes,
      headerExtra = props.headerExtra,
      showToggle = props.showToggle,
      sideCollapsed = props.sideCollapsed,
      onToggleSide = props.onToggleSide,
      logo = props.logo,
      title = props.title,
      persistTab = props.persistTab,
      logoTheme = props.logoTheme,
      keepPageAlive = props.keepPageAlive,
      hashRouter = props.hashRouter;
  var _window$location = window.location,
      pathname = _window$location.pathname,
      search = _window$location.search,
      hash = _window$location.hash;
  var routePath = hashRouter ? hash.replace('#', '').split('?')[0] : pathname;
  var key = hashRouter ? hash.replace('#', '') : "".concat(pathname).concat(search).concat(hash);

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      setRefresh = _useState2[1];

  var refreshRef = (0, _react.useRef)(0);
  (0, _react.useEffect)(function () {
    // 防抖处理
    if (refreshRef.current) clearTimeout(refreshRef.current);
    refreshRef.current = setTimeout(function () {
      var route = routes.find(function (_ref) {
        var path = _ref.path;
        return (0, _pathToRegexp.match)(path, {
          decode: decodeURIComponent
        })(routePath);
      });
      if (route && route.tab === false) return;
      var index = -1;
      tabs.forEach(function (item, i) {
        if (item.key === key) index = i; // eslint-disable-next-line no-param-reassign

        item.active = false;
      }); // 未找到并且title存在时新增

      if (index === -1 && pageTitle) {
        tabs.push({
          key: key,
          active: true,
          title: pageTitle
        });
      } else {
        // 已存在切换
        var tab = tabs[index] || {};
        tab.active = true;
        tab.title = pageTitle; // 获取到pageTitle的值会延迟，这要重新设置一下
      }

      setRefresh({});
      handlePersistTab();
    }, 10); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routes, pathname, search, hash, pageTitle]);

  function handlePersistTab() {
    if (persistTab) {
      window.localStorage.setItem('layout-tabs', JSON.stringify(tabs));
    }
  }

  function handleClick(nextKey) {
    props.history.push(nextKey);
  }

  function handleEdit(targetKey, action) {
    if (action !== 'remove') return;
    onClose(targetKey); // 删除tab页

    var index = tabs.findIndex(function (item) {
      return item.key === targetKey;
    });
    var isLast = index === tabs.length - 1;
    var prevIndex = index - 1;
    var nextIndex = index;

    var _tabs$splice = tabs.splice(index, 1),
        _tabs$splice2 = _slicedToArray(_tabs$splice, 1),
        tab = _tabs$splice2[0];

    handlePersistTab(); // 删除的不是当前tab，触发刷新

    if (!tab.active) return setRefresh({}); // 删除的是当前tab，进行跳转跳转
    // 没有了 跳转首页

    if (tabs.length === 0) return props.history.push('/');
    if (tabs.length === 1) return props.history.push(tabs[0].key);
    if (isLast) return props.history.push(tabs[prevIndex].key);
    props.history.push(tabs[nextIndex].key);
    return null;
  }

  function renderMenu(nextKey) {
    var index = tabs.findIndex(function (item) {
      return item.key === nextKey;
    });
    var tab = tabs[index];
    var disabledRefresh = !tab.active;
    var disabledRight = index === tabs.length - 1;
    var disabledLeft = index === 0;
    return /*#__PURE__*/_react.default.createElement("div", {
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }, /*#__PURE__*/_react.default.createElement(_antd.Menu, {
      onClick: function onClick(_ref2) {
        var action = _ref2.key;
        handleMenuClick(nextKey, action);
      }
    }, keepPageAlive ? /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
      key: "refresh",
      disabled: disabledRefresh,
      icon: /*#__PURE__*/_react.default.createElement(_icons.SyncOutlined, null)
    }, "\u5237\u65B0") : null, /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
      key: "closeRight",
      disabled: disabledRight,
      icon: /*#__PURE__*/_react.default.createElement(_icons.VerticalLeftOutlined, null)
    }, "\u5173\u95ED\u53F3\u4FA7"), /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
      key: "closeLeft",
      disabled: disabledLeft,
      icon: /*#__PURE__*/_react.default.createElement(_icons.VerticalRightOutlined, null)
    }, "\u5173\u95ED\u5DE6\u4FA7")));
  }

  function handleMenuClick(nextKey, action) {
    if (action === 'refresh') {
      // 清除对应页面，并不删除tab
      onClose(nextKey, true);
    }

    if (action === 'closeLeft' || action === 'closeRight') {
      var arr = action === 'closeLeft' ? tabs : _toConsumableArray(tabs).reverse();
      var keys = []; // eslint-disable-next-line no-restricted-syntax

      var _iterator = _createForOfIteratorHelper(arr),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _tab = _step.value;
          if (_tab.key === nextKey) break;
          keys.push(_tab.key);
        } // 删除tabs

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      keys.forEach(function (k) {
        var index = tabs.findIndex(function (item) {
          return item.key === k;
        });
        tabs.splice(index, 1);
        handlePersistTab();
      }); // 删除 tabs 对应的页面

      onClose(keys); // 非激活页面，进行跳转

      var tab = tabs.find(function (item) {
        return item.key === nextKey;
      });

      if (!tab.active) {
        props.history.push(nextKey);
      } // tabs重新渲染


      setRefresh({});
    }
  }

  var showLogo = !headerHeight;
  prefixCls = "".concat(prefixCls, "-layout-tab");
  var rootClass = (0, _classnames.default)(prefixCls, className);
  var headerExtraClass = "".concat(prefixCls, "-header-extra");
  var leftClass = "".concat(prefixCls, "-left");
  var logoClass = "".concat(prefixCls, "-logo");
  var sideToggleClass = "".concat(prefixCls, "-side-toggle");
  var borderBottomClass = "".concat(prefixCls, "-border-bottom");
  var menuClass = "".concat(prefixCls, "-menu");
  var paddingLeft = 4;
  if (showToggle) paddingLeft = 40;
  if (showLogo) paddingLeft += sideWidth;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: rootClass,
    style: {
      top: headerHeight,
      left: showLogo ? 0 : sideWidth,
      height: tabHeight,
      paddingLeft: paddingLeft
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: borderBottomClass
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: leftClass
  }, showLogo ? /*#__PURE__*/_react.default.createElement(_Logo.default, {
    theme: logoTheme,
    className: logoClass,
    logo: logo,
    title: title,
    height: tabHeight,
    width: sideWidth,
    sideCollapsed: sideCollapsed,
    showSide: showSide
  }) : null, showToggle ? /*#__PURE__*/_react.default.createElement(_SideToggle.default, {
    className: sideToggleClass,
    sideCollapsed: sideCollapsed,
    onToggleSide: onToggleSide
  }) : null), /*#__PURE__*/_react.default.createElement(_antd.Tabs, {
    size: "small",
    hideAdd: true,
    activeKey: (_tabs$find = tabs.find(function (item) {
      return item.active;
    })) === null || _tabs$find === void 0 ? void 0 : _tabs$find.key,
    type: "editable-card",
    onTabClick: handleClick,
    onEdit: handleEdit
  }, tabs.map(function (pane) {
    return /*#__PURE__*/_react.default.createElement(_antd.Tabs.TabPane, {
      key: pane.key,
      closable: tabs.length !== 1,
      tab: /*#__PURE__*/_react.default.createElement(_antd.Dropdown, {
        overlay: renderMenu(pane.key),
        trigger: ['contextMenu']
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: menuClass
      }, pane.title))
    });
  })), headerExtra ? /*#__PURE__*/_react.default.createElement("div", {
    className: headerExtraClass
  }, headerExtra) : null);
}));

exports.default = _default;
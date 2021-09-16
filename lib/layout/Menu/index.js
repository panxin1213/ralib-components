"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _classnames = _interopRequireDefault(require("classnames"));

var _util = require("@ra-lib/util");

var _componentContext = _interopRequireDefault(require("../../component-context"));

require("./style.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var _default = (0, _reactRouterDom.withRouter)(function MenuComponent(props) {
  var context = (0, _react.useContext)(_componentContext.default);
  var antdContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext);
  var antdPrefixCls = antdContext.getPrefixCls();
  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
      menuTreeData = props.menuTreeData,
      sideCollapsed = props.sideCollapsed,
      searchMenuPlaceholder = props.searchMenuPlaceholder,
      showSearchMenu = props.showSearchMenu,
      selectedMenuPath = props.selectedMenuPath,
      keepMenuOpen = props.keepMenuOpen,
      sideMinWidth = props.sideMinWidth,
      _props$mode = props.mode,
      mode = _props$mode === void 0 ? 'inline' : _props$mode,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? 'dark' : _props$theme,
      _props$selectedMenuPa = props.selectedMenuParents,
      selectedMenuParents = _props$selectedMenuPa === void 0 ? [] : _props$selectedMenuPa,
      showCollectedMenus = props.showCollectedMenus,
      collectionMenuId = props.collectionMenuId,
      _props$onMenuCollect = props.onMenuCollect,
      onMenuCollect = _props$onMenuCollect === void 0 ? function () {
    return undefined;
  } : _props$onMenuCollect; // 当前选中菜单，菜单是用path作为key的

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      openKeys = _useState2[0],
      setOpenKeys = _useState2[1];

  var _useState3 = (0, _react.useState)(menuTreeData),
      _useState4 = _slicedToArray(_useState3, 2),
      treeData = _useState4[0],
      setTreeData = _useState4[1];

  (0, _react.useEffect)(function () {
    return setTreeData(menuTreeData);
  }, [menuTreeData]);
  var openKeysRef = (0, _react.useRef)([]);
  var searchTimeRef = (0, _react.useRef)(0);
  var menuContainerRef = (0, _react.useRef)(null);
  var nodesRef = (0, _react.useRef)({});
  prefixCls = "".concat(prefixCls, "-layout-menu");
  var titleWrapperClass = (0, _classnames.default)("".concat(prefixCls, "-title-wrapper"));
  var titleClass = (0, _classnames.default)("".concat(prefixCls, "-title"));
  var collectionClass = (0, _classnames.default)("".concat(prefixCls, "-collection-icon")); // 创建菜单

  var menuItems = (0, _react.useMemo)(function () {
    nodesRef.current = {};

    var loop = function loop(nodes) {
      return nodes.map(function (item) {
        var id = item.id,
            path = item.path,
            icon = item.icon,
            title = item.title,
            children = item.children,
            isCollected = item.isCollected,
            isCollectedMenu = item.isCollectedMenu;
        var key = isCollectedMenu ? "collectedMenu-".concat(path || id) : path || id;
        nodesRef.current[key] = item;

        if (showCollectedMenus && !sideCollapsed && id !== collectionMenuId) {
          var CollectionIcon = isCollected ? _icons.HeartFilled : _icons.HeartOutlined;
          title = /*#__PURE__*/_react.default.createElement("div", {
            className: titleWrapperClass
          }, /*#__PURE__*/_react.default.createElement("span", {
            className: titleClass
          }, title), /*#__PURE__*/_react.default.createElement("span", {
            className: collectionClass,
            onClick: function onClick(e) {
              return e.stopPropagation();
            }
          }, /*#__PURE__*/_react.default.createElement(_antd.Popconfirm, {
            title: "\u60A8\u786E\u5B9A".concat(isCollected ? '取消' : '加入', "\u6536\u85CF\uFF1F"),
            onConfirm: function onConfirm() {
              return onMenuCollect(item, !isCollected);
            }
          }, /*#__PURE__*/_react.default.createElement(CollectionIcon, null))));
        }

        if (children && children.length) {
          return /*#__PURE__*/_react.default.createElement(_antd.Menu.SubMenu, {
            key: key,
            title: title,
            icon: icon,
            node: item
          }, loop(children));
        }

        return /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
          key: key,
          icon: icon,
          node: item
        }, title);
      });
    };

    return loop(treeData); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [treeData, showCollectedMenus, sideCollapsed, collectionMenuId, titleWrapperClass, titleClass, collectionClass]);

  function handleChange(e) {
    // 防抖
    if (searchTimeRef.current) clearTimeout(searchTimeRef.current);
    searchTimeRef.current = setTimeout(function () {
      return handleSearch(e.target.value);
    }, 300);
  }

  function handleSearch(value) {
    var isAll = true; // eslint-disable-next-line no-param-reassign

    if (value) value = value.toLowerCase();
    var nextTreeData = (0, _util.filterTree)(menuTreeData, function (node) {
      var title = node.title,
          path = node.path;
      title = (title || '').toLowerCase();
      path = (path || '').toLowerCase();
      var result = title.includes(value) || path.includes(value);
      if (!result) isAll = false;
      return result;
    });
    setTreeData(nextTreeData);

    if (isAll) {
      setOpenKeys(openKeysRef.current);
      return;
    } // 展开所有查询出的结果


    var nextOpenKeys = [];

    var loop = function loop(nodes) {
      return nodes.forEach(function (node) {
        var id = node.id,
            children = node.children;
        nextOpenKeys.push(id);
        if (children) loop(children);
      });
    };

    loop(nextTreeData);
    setOpenKeys(nextOpenKeys);
  }

  function handleOpenChange(nextOpenKeys) {
    openKeysRef.current = nextOpenKeys;
    setOpenKeys(nextOpenKeys);
  }

  function handleClick(info) {
    var key = info.key;
    var node = nodesRef.current[key];
    if (!node) return;
    var path = node.path,
        target = node.target;

    if (target) {
      window.open(path, target);
      return;
    }

    props.history.push(path);
  } // 默认展开菜单


  (0, _react.useEffect)(function () {
    // 菜单收起、水平菜单，不设置
    if (sideCollapsed || mode === 'horizontal') return; // 没父级不设置

    if (!selectedMenuParents || !selectedMenuParents.length) return;
    var parentKeys = selectedMenuParents.map(function (item) {
      return item.key || item.id;
    });
    var nextOpenKeys = keepMenuOpen ? Array.from(new Set([].concat(_toConsumableArray(parentKeys), _toConsumableArray(openKeysRef.current)))) : parentKeys;
    setOpenKeys(nextOpenKeys);
    openKeysRef.current = nextOpenKeys;
  }, [sideCollapsed, selectedMenuParents, mode, keepMenuOpen]); // 菜单改变，滚动到可见区域

  (0, _react.useEffect)(function () {
    // 等待菜单选中
    setTimeout(function () {
      if (sideCollapsed || mode === 'horizontal') return;
      if (!menuContainerRef.current) return;
      var cls = ".".concat(antdPrefixCls, "-menu-item-selected");
      var element = menuContainerRef.current.querySelector(cls);

      if (!element) {
        menuContainerRef.current.scrollTop = 0;
        return;
      }

      (0, _util.scrollElement)({
        element: element,
        containerEle: menuContainerRef.current
      });
    });
  }, [selectedMenuPath, treeData, sideCollapsed, mode, antdPrefixCls]);
  var topClass = (0, _classnames.default)("".concat(prefixCls, "-top"));
  var searchClass = "".concat(prefixCls, "-search");
  var menuClass = (0, _classnames.default)("".concat(prefixCls, "-menu"));
  var emptyClass = (0, _classnames.default)("".concat(prefixCls, "-empty"), {
    'dark-menu': theme === 'dark'
  }); // 修改菜单收起高度

  (0, _react.useEffect)(function () {
    var cls = ".".concat(menuClass, " .").concat(antdPrefixCls, "-menu-inline").concat(sideCollapsed ? '-collapsed' : '');
    var dom = document.querySelector(cls);
    if (dom) dom.style.width = sideCollapsed ? "".concat(sideMinWidth, "px") : '100%';
  }, [treeData, sideCollapsed, sideMinWidth, antdPrefixCls, menuClass]);
  var menuProps = {};
  if (mode === 'inline') menuProps.inlineCollapsed = sideCollapsed;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, mode === 'inline' ? /*#__PURE__*/_react.default.createElement("div", {
    className: topClass
  }, showSearchMenu && !sideCollapsed ? /*#__PURE__*/_react.default.createElement("div", {
    className: searchClass
  }, /*#__PURE__*/_react.default.createElement(_antd.Input.Search, {
    placeholder: searchMenuPlaceholder,
    onSearch: handleSearch,
    onChange: handleChange
  })) : null) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: menuClass,
    ref: menuContainerRef
  }, mode === 'inline' && (!menuItems || !menuItems.length) ? /*#__PURE__*/_react.default.createElement(_antd.Empty, {
    className: emptyClass
  }) : /*#__PURE__*/_react.default.createElement(_antd.Menu, _extends({
    mode: mode,
    theme: theme,
    selectedKeys: [selectedMenuPath, "collectedMenu-".concat(selectedMenuPath)],
    openKeys: openKeys,
    onOpenChange: handleOpenChange,
    onClick: handleClick
  }, menuProps), menuItems)));
});

exports.default = _default;
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

import React from "react";
import { useContext, useRef, useMemo, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { ConfigProvider, Empty, Input, Menu, Popconfirm } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import classNames from 'classnames'; // @ts-ignore

import { filterTree, scrollElement } from '@ra-lib/util';
import ComponentContext from '../../component-context';
import './style.less';
export default withRouter(function MenuComponent(props) {
  var context = useContext(ComponentContext);
  var antdContext = useContext(ConfigProvider.ConfigContext);
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

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      openKeys = _useState2[0],
      setOpenKeys = _useState2[1];

  var _useState3 = useState(menuTreeData),
      _useState4 = _slicedToArray(_useState3, 2),
      treeData = _useState4[0],
      setTreeData = _useState4[1];

  useEffect(function () {
    return setTreeData(menuTreeData);
  }, [menuTreeData]);
  var openKeysRef = useRef([]);
  var searchTimeRef = useRef(0);
  var menuContainerRef = useRef(null);
  var nodesRef = useRef({});
  prefixCls = "".concat(prefixCls, "-layout-menu");
  var titleWrapperClass = classNames("".concat(prefixCls, "-title-wrapper"));
  var titleClass = classNames("".concat(prefixCls, "-title"));
  var collectionClass = classNames("".concat(prefixCls, "-collection-icon")); // 创建菜单

  var menuItems = useMemo(function () {
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
          var CollectionIcon = isCollected ? HeartFilled : HeartOutlined;
          title = /*#__PURE__*/React.createElement("div", {
            className: titleWrapperClass
          }, /*#__PURE__*/React.createElement("span", {
            className: titleClass
          }, title), /*#__PURE__*/React.createElement("span", {
            className: collectionClass,
            onClick: function onClick(e) {
              return e.stopPropagation();
            }
          }, /*#__PURE__*/React.createElement(Popconfirm, {
            title: "\u60A8\u786E\u5B9A".concat(isCollected ? '取消' : '加入', "\u6536\u85CF\uFF1F"),
            onConfirm: function onConfirm() {
              return onMenuCollect(item, !isCollected);
            }
          }, /*#__PURE__*/React.createElement(CollectionIcon, null))));
        }

        if (children && children.length) {
          return /*#__PURE__*/React.createElement(Menu.SubMenu, {
            key: key,
            title: title,
            icon: icon,
            node: item
          }, loop(children));
        }

        return /*#__PURE__*/React.createElement(Menu.Item, {
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
    var nextTreeData = filterTree(menuTreeData, function (node) {
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


  useEffect(function () {
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

  useEffect(function () {
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

      scrollElement({
        element: element,
        containerEle: menuContainerRef.current
      });
    });
  }, [selectedMenuPath, treeData, sideCollapsed, mode, antdPrefixCls]);
  var topClass = classNames("".concat(prefixCls, "-top"));
  var searchClass = "".concat(prefixCls, "-search");
  var menuClass = classNames("".concat(prefixCls, "-menu"));
  var emptyClass = classNames("".concat(prefixCls, "-empty"), {
    'dark-menu': theme === 'dark'
  }); // 修改菜单收起高度

  useEffect(function () {
    var cls = ".".concat(menuClass, " .").concat(antdPrefixCls, "-menu-inline").concat(sideCollapsed ? '-collapsed' : '');
    var dom = document.querySelector(cls);
    if (dom) dom.style.width = sideCollapsed ? "".concat(sideMinWidth, "px") : '100%';
  }, [treeData, sideCollapsed, sideMinWidth, antdPrefixCls, menuClass]);
  var menuProps = {};
  if (mode === 'inline') menuProps.inlineCollapsed = sideCollapsed;
  return /*#__PURE__*/React.createElement(React.Fragment, null, mode === 'inline' ? /*#__PURE__*/React.createElement("div", {
    className: topClass
  }, showSearchMenu && !sideCollapsed ? /*#__PURE__*/React.createElement("div", {
    className: searchClass
  }, /*#__PURE__*/React.createElement(Input.Search, {
    placeholder: searchMenuPlaceholder,
    onSearch: handleSearch,
    onChange: handleChange
  })) : null) : null, /*#__PURE__*/React.createElement("div", {
    className: menuClass,
    ref: menuContainerRef
  }, mode === 'inline' && (!menuItems || !menuItems.length) ? /*#__PURE__*/React.createElement(Empty, {
    className: emptyClass
  }) : /*#__PURE__*/React.createElement(Menu, _extends({
    mode: mode,
    theme: theme,
    selectedKeys: [selectedMenuPath, "collectedMenu-".concat(selectedMenuPath)],
    openKeys: openKeys,
    onOpenChange: handleOpenChange,
    onClick: handleClick
  }, menuProps), menuItems)));
});
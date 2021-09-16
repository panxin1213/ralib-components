function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from "react";
import { useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames'; // @ts-ignore

import { getFirstNode, findParentNodes } from '@ra-lib/util';
import ComponentContext from '../../component-context';
import LAYOUT_TYPE from '../layout-type';
import Menu from '../Menu';
import SideToggle from '../SideToggle';
import MenuPane from '../MenuPane';
import Logo from '../Logo';
import './style.less';

function Header(props) {
  var context = useContext(ComponentContext);
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

  var _useState = useState(selectedMenuPath),
      _useState2 = _slicedToArray(_useState, 2),
      topSelectedMenuPath = _useState2[0],
      setTopSelectedMenuPath = _useState2[1];

  var _useState3 = useState(menuTreeData),
      _useState4 = _slicedToArray(_useState3, 2),
      topMenus = _useState4[0],
      setTopMenus = _useState4[1];

  useEffect(function () {
    var parentNodes = findParentNodes(menuTreeData, selectedMenuPath, 'path');

    if (parentNodes && parentNodes.length) {
      var node = topMenus.find(function (item) {
        return item.id === parentNodes[0].id;
      });

      if (node) {
        setTopSelectedMenuPath(node.path);
      }
    }
  }, [topMenus, menuTreeData, selectedMenuPath]);
  useEffect(function () {
    if (layoutType === LAYOUT_TYPE.TOP_MENU) {
      setTopMenus(menuTreeData);
    }

    if (layoutType === LAYOUT_TYPE.TOP_SIDE_MENU) {
      var menus = menuTreeData.map(function (topNode) {
        var _ref = getFirstNode(topNode, 'path') || {},
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
  var rootClass = classNames(prefixCls, className, {
    collapsed: sideCollapsed,
    dark: theme === 'dark'
  });
  var contentClass = classNames("".concat(prefixCls, "-content"));
  return /*#__PURE__*/React.createElement("header", {
    className: rootClass,
    style: {
      height: height
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    logo: logo,
    title: title,
    height: height,
    width: sideWidth,
    sideCollapsed: sideCollapsed,
    showSide: showSide,
    theme: logoTheme
  }), showToggle ? /*#__PURE__*/React.createElement(SideToggle, {
    sideCollapsed: sideCollapsed,
    onToggleSide: onToggleSide,
    theme: theme
  }) : null, showMenuPane ? /*#__PURE__*/React.createElement(MenuPane, null) : null, /*#__PURE__*/React.createElement("div", {
    className: contentClass
  }, /*#__PURE__*/React.createElement("div", null, [LAYOUT_TYPE.TOP_MENU, LAYOUT_TYPE.TOP_SIDE_MENU].includes(layoutType) && topMenus.length ? /*#__PURE__*/React.createElement(Menu, {
    mode: "horizontal",
    theme: theme,
    keepMenuOpen: false,
    showSearchMenu: false,
    menuTreeData: topMenus,
    selectedMenuPath: topSelectedMenuPath
  }) : null), extra));
}

export default withRouter(Header);
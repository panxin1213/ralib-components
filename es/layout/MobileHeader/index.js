function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from "react";
import { useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Drawer } from 'antd';
import classNames from 'classnames';
import ComponentContext from '../../component-context';
import SideToggle from '../SideToggle';
import Logo from '../Logo';
import './style.less';

function MobileHeader(props) {
  var context = useContext(ComponentContext);
  var className = props.className,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
      logo = props.logo,
      title = props.title,
      height = props.height,
      pageTitle = props.pageTitle,
      sideWidth = props.sideWidth,
      selectedMenuPath = props.selectedMenuPath,
      extra = props.extra,
      _props$theme = props.theme,
      theme = _props$theme === void 0 ? 'default' : _props$theme,
      sideTheme = props.sideTheme,
      logoTheme = props.logoTheme,
      children = props.children;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  useEffect(function () {
    setCollapsed(true);
  }, [selectedMenuPath]);

  function handleToggle() {
    setCollapsed(!collapsed);
  }

  prefixCls = "".concat(prefixCls, "-layout-mobile-header");
  var rootClass = classNames(prefixCls, className, {
    dark: theme === 'dark'
  });
  var contentClass = classNames("".concat(prefixCls, "-content"), {
    dark: theme === 'dark'
  });
  var drawerClass = classNames("".concat(prefixCls, "-drawer"), {
    dark: sideTheme === 'dark'
  });
  var logoClass = classNames("".concat(prefixCls, "-logo"));
  var menuClass = classNames("".concat(prefixCls, "-menu"));
  return /*#__PURE__*/React.createElement("header", {
    className: rootClass,
    style: {
      height: height
    }
  }, /*#__PURE__*/React.createElement(SideToggle, {
    sideCollapsed: collapsed,
    onToggleSide: handleToggle,
    theme: theme
  }), /*#__PURE__*/React.createElement(Drawer, {
    className: drawerClass,
    title: null,
    placement: "left",
    visible: !collapsed,
    closable: false,
    onClose: handleToggle,
    bodyStyle: {
      padding: 0
    },
    width: sideWidth
  }, /*#__PURE__*/React.createElement("div", {
    className: logoClass
  }, /*#__PURE__*/React.createElement(Logo, {
    style: {
      height: height,
      borderBottom: 'none'
    },
    logo: logo,
    title: title,
    height: height,
    theme: logoTheme
  })), /*#__PURE__*/React.createElement("div", {
    className: menuClass
  }, children)), /*#__PURE__*/React.createElement("div", {
    className: contentClass
  }, /*#__PURE__*/React.createElement("h1", null, pageTitle), extra));
}

export default withRouter(MobileHeader);
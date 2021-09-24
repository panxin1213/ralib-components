function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";
import { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import ComponentContext from '../../component-context';
import './style.less';

function Header(props) {
  var context = useContext(ComponentContext);
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
    //props.history.push(window.location.pathname.indexOf("/store/") === 0 ? '/store/' : '/');
  }

  prefixCls = "".concat(prefixCls, "-layout-logo");
  var rootClass = classNames(prefixCls, className, {
    collapsed: sideCollapsed,
    'no-side': !showSide,
    dark: theme === 'dark'
  });
  return /*#__PURE__*/React.createElement("div", {
    className: rootClass,
    style: _objectSpread({
      width: width,
      flex: "0 0 ".concat(width, "px")
    }, style),
    onClick: handleLogoClick
  }, typeof logo === 'string' ? /*#__PURE__*/React.createElement("img", {
    className: "".concat(prefixCls, "-image"),
    style: {
      height: height - 16
    },
    src: logo,
    alt: "logo"
  }) : {
    logo: logo
  }, sideCollapsed ? null : /*#__PURE__*/React.createElement("h1", {
    className: "".concat(prefixCls, "-title")
  }, title));
}

export default withRouter(Header);
import React from "react";
import { useContext } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import ComponentContext from '../../component-context';
import './style.less';
export default function SideToggle(props) {
  var context = useContext(ComponentContext);
  var className = props.className,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
      sideCollapsed = props.sideCollapsed,
      onToggleSide = props.onToggleSide,
      theme = props.theme;
  prefixCls = "".concat(prefixCls, "-layout-toggle-side");
  var rootClass = classNames(prefixCls, className, {
    dark: theme === 'dark'
  });
  return /*#__PURE__*/React.createElement("div", {
    className: rootClass,
    onClick: onToggleSide
  }, sideCollapsed ? /*#__PURE__*/React.createElement(MenuUnfoldOutlined, null) : /*#__PURE__*/React.createElement(MenuFoldOutlined, null));
}
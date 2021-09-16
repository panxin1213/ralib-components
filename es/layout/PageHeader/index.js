import React from "react";
import { useContext } from 'react';
import classNames from 'classnames';
import ComponentContext from '../../component-context';
import Breadcrumb from '../Breadcrumb';
import './style.less';
export default function PageHeader(props) {
  var context = useContext(ComponentContext);
  var className = props.className,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
      headerHeight = props.headerHeight,
      tabHeight = props.tabHeight,
      pageHeaderHeight = props.pageHeaderHeight,
      sideWidth = props.sideWidth,
      pageTitle = props.pageTitle,
      selectedMenu = props.selectedMenu,
      selectedMenuParents = props.selectedMenuParents,
      breadcrumb = props.breadcrumb,
      appendBreadcrumb = props.appendBreadcrumb;
  prefixCls = "".concat(prefixCls, "-layout-page-header");
  var rootClass = classNames(prefixCls, className);
  var titleClass = "".concat(prefixCls, "-title");
  return /*#__PURE__*/React.createElement("header", {
    className: rootClass,
    style: {
      top: headerHeight + tabHeight,
      left: sideWidth,
      height: pageHeaderHeight
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: titleClass
  }, pageTitle), /*#__PURE__*/React.createElement(Breadcrumb, {
    pageTitle: pageTitle,
    selectedMenu: selectedMenu,
    selectedMenuParents: selectedMenuParents,
    breadcrumb: breadcrumb,
    appendBreadcrumb: appendBreadcrumb
  }));
}
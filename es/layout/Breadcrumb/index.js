function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import React from "react";
import { useContext } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import ComponentContext from '../../component-context';
import classNames from 'classnames';
import './style.less';
export default function MyBreadcrumb(props) {
  var context = useContext(ComponentContext);
  var className = props.className,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
      pageTitle = props.pageTitle,
      selectedMenu = props.selectedMenu,
      selectedMenuParents = props.selectedMenuParents,
      breadcrumb = props.breadcrumb,
      appendBreadcrumb = props.appendBreadcrumb;
  if (breadcrumb === false) return null;
  prefixCls = "".concat(prefixCls, "-layout-breadcrumb");
  var rootClass = classNames(prefixCls, className);

  var dataSource = _toConsumableArray(selectedMenuParents);

  var current = pageTitle ? {
    title: pageTitle
  } : selectedMenu;
  if (current) dataSource.push(current);
  if (breadcrumb) dataSource = breadcrumb;

  if (appendBreadcrumb) {
    if (!Array.isArray(appendBreadcrumb)) appendBreadcrumb = [appendBreadcrumb];
    dataSource = [].concat(_toConsumableArray(dataSource), _toConsumableArray(appendBreadcrumb));
  }

  if (!dataSource.length) return null;
  return /*#__PURE__*/React.createElement(Breadcrumb, {
    className: rootClass
  }, dataSource.map(function (item, index) {
    var icon = item.icon,
        title = item.title,
        path = item.path;
    var isLast = index === dataSource.length - 1;
    title = /*#__PURE__*/React.createElement("span", null, icon, title);
    if (path && !isLast) title = /*#__PURE__*/React.createElement(Link, {
      to: path
    }, title);
    return /*#__PURE__*/React.createElement(Breadcrumb.Item, {
      key: title
    }, title);
  }));
}
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from "react";
import { useContext, useState, useRef } from 'react';
import { Drawer } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import ComponentContext from '../../component-context'; // @ts-ignore

import { useHeight } from '@ra-lib/hooks';
import './style.less';
export default function MenuPane(props) {
  var context = useContext(ComponentContext);
  var className = props.className,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
      onToggleSide = props.onToggleSide,
      theme = props.theme;
  var containerRef = useRef(null);

  var _useHeight = useHeight(containerRef),
      _useHeight2 = _slicedToArray(_useHeight, 1),
      height = _useHeight2[0];

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  prefixCls = "".concat(prefixCls, "-layout-menu-pane");
  var rootClass = classNames(prefixCls, className, {
    dark: theme === 'dark'
  });
  var drawerContainerClass = "".concat(prefixCls, "-container");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: rootClass,
    onClick: onToggleSide
  }, /*#__PURE__*/React.createElement(AppstoreOutlined, {
    onClick: function onClick() {
      return setVisible(!visible);
    }
  })), /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    className: drawerContainerClass,
    style: {
      display: visible ? 'block' : 'none',
      top: 50,
      left: 210
    }
  }, /*#__PURE__*/React.createElement(Drawer, {
    title: "\u83DC\u5355\u9762\u677F",
    visible: visible,
    closable: true,
    placement: "top",
    height: height,
    onClose: function onClose() {
      return setVisible(false);
    },
    getContainer: false,
    style: {
      position: 'absolute'
    }
  }, "// TODO \u5C55\u793A\u83DC\u5355")));
}
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext, useState, useEffect } from 'react';
import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import ComponentContext from '../component-context';
import './style.less';

function QueryBar(props) {
  var context = useContext(ComponentContext);

  var className = props.className,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
      defaultCollapsed = props.defaultCollapsed,
      collapsedTips = props.collapsedTips,
      showCollapsedBar = props.showCollapsedBar,
      children = props.children,
      others = _objectWithoutProperties(props, ["className", "prefixCls", "defaultCollapsed", "collapsedTips", "showCollapsedBar", "children"]);

  var _useState = useState(defaultCollapsed),
      _useState2 = _slicedToArray(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  useEffect(function () {
    // 延迟触发window 的 resize事件调整布局
    setTimeout(function () {
      return window.dispatchEvent(new Event('resize'));
    });
  }, [collapsed]);
  prefixCls = "".concat(prefixCls, "-query-bar");
  var rootClass = classNames(prefixCls, className);
  var collapsedBarClass = "".concat(prefixCls, "-collapsed-bar");
  var tipClass = "".concat(prefixCls, "-tip");
  var childrenIsFunction = typeof children === 'function';
  return /*#__PURE__*/React.createElement("div", Object.assign({}, others, {
    className: rootClass
  }), childrenIsFunction ? children(collapsed) : children, showCollapsedBar && childrenIsFunction ? /*#__PURE__*/React.createElement("div", {
    className: collapsedBarClass,
    onClick: function onClick() {
      return setCollapsed(!collapsed);
    }
  }, collapsed ? /*#__PURE__*/React.createElement(DoubleRightOutlined, {
    rotate: 90
  }) : /*#__PURE__*/React.createElement(DoubleLeftOutlined, {
    rotate: 90
  }), /*#__PURE__*/React.createElement("span", {
    className: tipClass
  }, collapsedTips[collapsed ? 0 : 1])) : null);
}

QueryBar.defaultProps = {
  defaultCollapsed: true,
  showCollapsedBar: true,
  collapsedTips: ['展开更多', '收起更多']
};
export default QueryBar;
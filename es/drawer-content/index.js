function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useEffect, useState, forwardRef, useContext } from 'react';
import { Button, Spin, ConfigProvider } from 'antd';
import ComponentContext from '../component-context';
var DrawerContent = /*#__PURE__*/forwardRef(function (props, ref) {
  var context = useContext(ComponentContext);
  var antdContext = useContext(ConfigProvider.ConfigContext);
  var antdPrefixCls = antdContext.getPrefixCls();

  var _props$loading = props.loading,
      propsLoading = _props$loading === void 0 ? false : _props$loading,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      _props$bodyStyle = props.bodyStyle,
      bodyStyle = _props$bodyStyle === void 0 ? {} : _props$bodyStyle,
      _props$onOk = props.onOk,
      onOk = _props$onOk === void 0 ? function () {
    return undefined;
  } : _props$onOk,
      _props$onCancel = props.onCancel,
      onCancel = _props$onCancel === void 0 ? function () {
    return undefined;
  } : _props$onCancel,
      okHtmlType = props.okHtmlType,
      children = props.children,
      _props$loadingTip = props.loadingTip,
      loadingTip = _props$loadingTip === void 0 ? context.loadingTip : _props$loadingTip,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
      fullScreen = props.fullScreen,
      footer = props.footer,
      _props$okText = props.okText,
      okText = _props$okText === void 0 ? context.okText : _props$okText,
      _props$cancelText = props.cancelText,
      cancelText = _props$cancelText === void 0 ? context.cancelText : _props$cancelText,
      others = _objectWithoutProperties(props, ["loading", "style", "bodyStyle", "onOk", "onCancel", "okHtmlType", "children", "loadingTip", "prefixCls", "fullScreen", "footer", "okText", "cancelText"]);

  var _useState = useState(propsLoading),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1]; // 多次连续设置loading时，保值loading不间断显示


  useEffect(function () {
    if (propsLoading) {
      setLoading(true);
      return null;
    }

    var timer = setTimeout(function () {
      setLoading(false);
    }, 100);
    return function () {
      return clearTimeout(timer);
    };
  }, [propsLoading]); // 延迟加载内容，解决 内部 input autoFocus 不生效问题

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      inMounted = _useState4[0],
      setIsMounted = _useState4[1];

  useEffect(function () {
    setTimeout(function () {
      return setIsMounted(true);
    });
  }, []);
  if (!inMounted) return null;

  var outerStyle = _objectSpread({
    display: 'flex',
    flexDirection: 'column'
  }, style);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Spin, {
    spinning: loading,
    tip: loadingTip
  }, /*#__PURE__*/React.createElement("div", Object.assign({
    className: "".concat(prefixCls, "-drawer-content"),
    ref: ref,
    style: outerStyle
  }, others), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-drawer-content-inner"),
    style: _objectSpread({
      flex: 1,
      padding: 16
    }, bodyStyle)
  }, children, /*#__PURE__*/React.createElement("div", {
    style: footer !== false ? {
      height: 53
    } : null
  })))), footer !== false ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(antdPrefixCls, "-modal-footer"),
    style: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      background: '#fff'
    }
  }, footer || /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    type: 'primary',
    onClick: onOk,
    htmlType: okHtmlType
  }, okText), /*#__PURE__*/React.createElement(Button, {
    onClick: onCancel
  }, cancelText))) : null);
});
export default DrawerContent;
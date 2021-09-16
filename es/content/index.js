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

import React, { useRef, useState, useEffect, useContext, forwardRef } from 'react';
import { Spin } from 'antd';
import classNames from 'classnames'; // @ts-ignore

import { useHeight } from '@ra-lib/hooks';
import ComponentContext from '../component-context';
import './style.less';
var Content = /*#__PURE__*/forwardRef(function (props, _ref) {
  var context = useContext(ComponentContext);

  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
      _props$fitHeight = props.fitHeight,
      fitHeight = _props$fitHeight === void 0 ? false : _props$fitHeight,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      _props$loading = props.loading,
      propsLoading = _props$loading === void 0 ? false : _props$loading,
      _props$isRoot = props.isRoot,
      isRoot = _props$isRoot === void 0 ? false : _props$isRoot,
      _props$offsetHeight = props.offsetHeight,
      offsetHeight = _props$offsetHeight === void 0 ? 0 : _props$offsetHeight,
      children = props.children,
      _props$otherHeight = props.otherHeight,
      otherHeight = _props$otherHeight === void 0 ? context.layoutPageOtherHeight : _props$otherHeight,
      _props$loadingTip = props.loadingTip,
      loadingTip = _props$loadingTip === void 0 ? context.loadingTip : _props$loadingTip,
      others = _objectWithoutProperties(props, ["prefixCls", "fitHeight", "className", "style", "loading", "isRoot", "offsetHeight", "children", "otherHeight", "loadingTip"]);

  if (context.isMobile) fitHeight = false;
  prefixCls = "".concat(prefixCls, "-content");
  var rootRef = useRef(null);

  var _useHeight = useHeight(rootRef, otherHeight || 0),
      _useHeight2 = _slicedToArray(_useHeight, 1),
      height = _useHeight2[0];

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      loadingStyle = _useState2[0],
      setLoadingStyle = _useState2[1];

  var _useState3 = useState(propsLoading),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  height -= offsetHeight; // 多次连续设置loading时，保值loading不间断显示

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
  }, [propsLoading]);
  useEffect(function () {
    handleSetLoadingStyle();
  }, [loading, height]); // 计算loading的样式，无论是否出现滚动，loading始终覆盖PageContent可视区域

  function handleSetLoadingStyle() {
    if (!loading) {
      setLoadingStyle({
        display: 'none'
      });
      return;
    } // eslint-disable-next-line @typescript-eslint/no-shadow


    var _rootRef$current$getB = rootRef.current.getBoundingClientRect(),
        left = _rootRef$current$getB.left,
        top = _rootRef$current$getB.top,
        width = _rootRef$current$getB.width,
        height = _rootRef$current$getB.height; // margin部分也遮住


    var computedStyle = window.getComputedStyle(rootRef.current);
    var marginLeft = window.parseInt(computedStyle.getPropertyValue('margin-left') || '0px', 10);
    var marginTop = window.parseInt(computedStyle.getPropertyValue('margin-top') || '0px', 10);
    var marginRight = window.parseInt(computedStyle.getPropertyValue('margin-right') || '0px', 10);
    var marginBottom = window.parseInt(computedStyle.getPropertyValue('margin-bottom') || '0px', 10);
    left -= marginLeft;
    width = width + marginLeft + marginRight;
    top -= marginTop;
    height = height + marginTop + marginBottom; // body如果有滚动，算上body滚动偏移量

    top += document.documentElement.scrollTop || document.body.scrollTop || 0; // 如果PageContent高度超过了窗口，只遮住可视范围

    var windowHeight = document.documentElement.clientHeight;
    var bottom = 'auto';

    if (height > windowHeight) {
      bottom = 0;
      height = 'auto';
    }

    setLoadingStyle({
      top: top,
      left: left,
      bottom: bottom,
      display: 'flex',
      width: width,
      height: height
    });
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-loading"),
    style: loadingStyle
  }, /*#__PURE__*/React.createElement(Spin, {
    spinning: loading,
    tip: loadingTip
  })), /*#__PURE__*/React.createElement("div", Object.assign({
    ref: function ref(rootDom) {
      rootRef.current = rootDom; // @ts-ignore
      // eslint-disable-next-line no-param-reassign

      if (_ref) _ref.current = rootDom;
    },
    className: classNames(prefixCls, className),
    style: _objectSpread({
      height: fitHeight ? height : '',
      minHeight: isRoot ? height : ''
    }, style)
  }, others), children));
});
export default Content;
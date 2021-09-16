function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { Pagination } from 'antd';
import React, { useContext } from 'react';
import ComponentContext from '../component-context';

function RAPagination(props) {
  var context = useContext(ComponentContext);

  var total = props.total,
      _props$pageNum = props.pageNum,
      pageNum = _props$pageNum === void 0 ? 1 : _props$pageNum,
      _props$pageSize = props.pageSize,
      pageSize = _props$pageSize === void 0 ? 10 : _props$pageSize,
      _props$onPageNumChang = props.onPageNumChange,
      onPageNumChange = _props$onPageNumChang === void 0 ? function () {
    return undefined;
  } : _props$onPageNumChang,
      _props$onPageSizeChan = props.onPageSizeChange,
      onPageSizeChange = _props$onPageSizeChan === void 0 ? function () {
    return undefined;
  } : _props$onPageSizeChan,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? function () {
    return undefined;
  } : _props$onChange,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      others = _objectWithoutProperties(props, ["total", "pageNum", "pageSize", "onPageNumChange", "onPageSizeChange", "onChange", "style"]);

  var isMobile = context.isMobile;

  function handleChange(num, size) {
    onChange(num, size);
    if (size === pageSize) return onPageNumChange(num);
    onPageSizeChange(size);
  }

  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Pagination, Object.assign({
    size: isMobile ? 'small' : 'default',
    style: _objectSpread({
      marginTop: 8
    }, style),
    total: total,
    showTotal: function showTotal(t) {
      return "\u5171".concat(t, "\u6761\u6570\u636E");
    },
    showSizeChanger: true,
    showQuickJumper: true,
    current: pageNum,
    pageSize: pageSize,
    onChange: handleChange
  }, others)));
}

export default RAPagination;
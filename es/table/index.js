function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

import React, { useState, useRef, useEffect, useContext } from 'react';
import { Table, ConfigProvider } from 'antd'; // @ts-ignore

import { useHeight } from '@ra-lib/hooks';
import ComponentContext from '../component-context';
export default function RATable(props) {
  var _props$fitHeight = props.fitHeight,
      fitHeight = _props$fitHeight === void 0 ? false : _props$fitHeight,
      _props$scroll = props.scroll,
      scroll = _props$scroll === void 0 ? {} : _props$scroll,
      otherHeight = props.otherHeight,
      _props$offsetHeight = props.offsetHeight,
      offsetHeight = _props$offsetHeight === void 0 ? 0 : _props$offsetHeight,
      columns = props.columns,
      _props$serialNumber = props.serialNumber,
      serialNumber = _props$serialNumber === void 0 ? false : _props$serialNumber,
      _props$serialText = props.serialText,
      serialText = _props$serialText === void 0 ? '??????' : _props$serialText,
      _props$serialNumberFi = props.serialNumberFixed,
      serialNumberFixed = _props$serialNumberFi === void 0 ? false : _props$serialNumberFi,
      _props$serialNumberWi = props.serialNumberWidth,
      serialNumberWidth = _props$serialNumberWi === void 0 ? 60 : _props$serialNumberWi,
      pageSize = props.pageSize,
      pageNum = props.pageNum,
      dataSource = props.dataSource,
      _props$pagination = props.pagination,
      pagination = _props$pagination === void 0 ? false : _props$pagination,
      _props$borderBottom = props.borderBottom,
      borderBottom = _props$borderBottom === void 0 ? true : _props$borderBottom,
      _props$rowKey = props.rowKey,
      rowKey = _props$rowKey === void 0 ? 'id' : _props$rowKey,
      others = _objectWithoutProperties(props, ["fitHeight", "scroll", "otherHeight", "offsetHeight", "columns", "serialNumber", "serialText", "serialNumberFixed", "serialNumberWidth", "pageSize", "pageNum", "dataSource", "pagination", "borderBottom", "rowKey"]);

  var context = useContext(ComponentContext);

  if (context.isMobile) {
    fitHeight = false;
    if (!scroll.x && columns.length > 3) scroll.x = columns.length * 180;
  }

  var antdContext = useContext(ConfigProvider.ConfigContext);
  var antdPrefixCls = antdContext.getPrefixCls();
  var rootRef = useRef(null);

  var _useState = useState(otherHeight),
      _useState2 = _slicedToArray(_useState, 2),
      _otherHeight = _useState2[0],
      setOtherHeight = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hasPagination = _useState4[0],
      setHasPagination = _useState4[1];

  var pageContentPadding = 8;
  var pageContentMargin = 8;
  var isMobile = context.isMobile,
      mobileColumnDefaultWidth = context.mobileColumnDefaultWidth;

  var _useHeight = useHeight(rootRef),
      _useHeight2 = _slicedToArray(_useHeight, 1),
      height = _useHeight2[0];

  height = height - (_otherHeight || 0) - (offsetHeight || 0);
  if (scroll.y) fitHeight = false;

  var _scroll = _objectSpread({}, scroll);

  if (fitHeight) _scroll.y = height;
  useEffect(function () {
    if (!fitHeight) return;
    var oldOverflowY = window.document.body.style.overflowY || 'auto';
    window.document.body.style.overflowY = 'hidden';
    return function () {
      window.document.body.style.overflowY = oldOverflowY;
    };
  }, [fitHeight]);
  useEffect(function () {
    function _setOtherHeight() {
      if (otherHeight !== undefined) return;
      if (!rootRef.current) return;
      var headHeight = 0;
      var paginationHeight = 0;
      var tableHead = rootRef.current.querySelector(".".concat(antdPrefixCls, "-table-thead"));
      if (tableHead) headHeight = tableHead.getBoundingClientRect().height;
      var paginationDom = rootRef.current.nextElementSibling;

      if (paginationDom) {
        setHasPagination(true);
        paginationHeight = paginationDom.getBoundingClientRect().height;
      }

      setOtherHeight(headHeight + paginationHeight + pageContentPadding + pageContentMargin + 1);
    } // ??????????????????body???????????????


    _setOtherHeight(); // ??????table-thead ???????????? ??????????????????????????????


    setTimeout(function () {
      _setOtherHeight();
    }); // ???????????????????????????

    window.addEventListener('resize', _setOtherHeight);
    return function () {
      return window.removeEventListener('resize', _setOtherHeight);
    };
  }, [otherHeight, dataSource, antdPrefixCls]);
  useEffect(function () {
    if (!fitHeight) return;
    var tableBody = rootRef.current.querySelector(".".concat(antdPrefixCls, "-table-body"));
    var tablePlaceholder = rootRef.current.querySelector(".".concat(antdPrefixCls, "-table-placeholder .").concat(antdPrefixCls, "-table-cell"));
    if (!tableBody) return;
    tableBody.style.height = "".concat(height, "px");

    if (tablePlaceholder) {
      tablePlaceholder.style.height = "".concat(height - 40, "px");
      tablePlaceholder.style.border = 'none';
    }
  }, [fitHeight, height, dataSource, antdPrefixCls]);

  if (serialNumber) {
    if (hasPagination) {
      if (!('pageNum' in props)) throw Error('?????????????????????????????????????????????pageNum??????');
      if (!('pageSize' in props)) throw Error('?????????????????????????????????????????????pageSize??????');
    }

    columns = [{
      title: serialText,
      width: serialNumberWidth,
      dataIndex: '__num',
      key: '__num',
      fixed: serialNumberFixed ? 'left' : false,
      render: function render(value, record, index) {
        return index + 1 + (hasPagination ? pageSize * (pageNum - 1) : 0);
      }
    }].concat(_toConsumableArray(columns));
  }

  if (isMobile) {
    columns.forEach(function (item) {
      if (!('width' in item)) {
        // eslint-disable-next-line no-param-reassign
        item.width = mobileColumnDefaultWidth;
      }
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    ref: rootRef,
    style: borderBottom ? {
      borderBottom: '1px solid #e8e8e8'
    } : null
  }, /*#__PURE__*/React.createElement(Table, Object.assign({
    scroll: _scroll,
    columns: columns,
    size: "middle",
    dataSource: dataSource,
    pagination: pagination,
    rowKey: rowKey
  }, others)));
}
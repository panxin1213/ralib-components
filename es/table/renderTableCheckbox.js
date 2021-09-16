function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useEffect, useState, useRef, useContext } from 'react';
import { Checkbox } from 'antd'; // @ts-ignore

import { findGenerationNodes, findParentNodes } from '@ra-lib/util';
import ComponentContext from '../component-context';
import classNames from 'classnames';
import './style.less';
export default function renderTableCheckbox(WrappedTable) {
  return function WithCheckboxTable(props) {
    var context = useContext(ComponentContext);

    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
        dataSource = props.dataSource,
        _props$rowSelection = props.rowSelection,
        rowSelection = _props$rowSelection === void 0 ? {} : _props$rowSelection,
        _props$rowKey = props.rowKey,
        rowKey = _props$rowKey === void 0 ? 'key' : _props$rowKey,
        columns = props.columns,
        _props$checkboxIndex = props.checkboxIndex,
        checkboxIndex = _props$checkboxIndex === void 0 ? 0 : _props$checkboxIndex,
        _props$rowCheck = props.rowCheck,
        rowCheck = _props$rowCheck === void 0 ? true : _props$rowCheck,
        _props$onRow = props.onRow,
        propsOnRow = _props$onRow === void 0 ? function () {
      return {};
    } : _props$onRow,
        _props$rowClassName = props.rowClassName,
        _rowClassName = _props$rowClassName === void 0 ? function () {
      return '';
    } : _props$rowClassName,
        otherProps = _objectWithoutProperties(props, ["prefixCls", "dataSource", "rowSelection", "rowKey", "columns", "checkboxIndex", "rowCheck", "onRow", "rowClassName"]);

    var selectedRowKeys = rowSelection.selectedRowKeys,
        getCheckboxProps = rowSelection.getCheckboxProps,
        _renderCell = rowSelection.renderCell,
        onSelectAll = rowSelection.onSelectAll,
        onChange = rowSelection.onChange,
        others = _objectWithoutProperties(rowSelection, ["selectedRowKeys", "getCheckboxProps", "renderCell", "onSelectAll", "onChange"]);

    var onRow;

    if (rowCheck) {
      onRow = function onRow(record, index) {
        var result = propsOnRow(record, index);

        var _result$onClick = result.onClick,
            onClick = _result$onClick === void 0 ? function () {
          return null;
        } : _result$onClick,
            ots = _objectWithoutProperties(result, ["onClick"]);

        var nextOnClick = function nextOnClick(event) {
          onClick(event);
          var checkboxProps = getCheckboxProps && getCheckboxProps(record) || {};
          if (checkboxProps.disabled) return;

          var _record = getStatusRecord(record); // 当前节点状态


          var checked = !_record.___checked;
          var e = {
            target: {
              checked: checked
            }
          };
          handleCheck(e, record);
        };

        return _objectSpread({
          onClick: nextOnClick
        }, ots);
      };
    }

    var nextColumns = columns;

    if (checkboxIndex !== false) {
      nextColumns = _toConsumableArray(columns);

      var col = _objectSpread({}, nextColumns[checkboxIndex]);

      if (!col.render) col.render = function (value) {
        return value;
      };

      var render = function render(value, record, index) {
        return /*#__PURE__*/React.createElement(React.Fragment, null, renderCell(null, record), /*#__PURE__*/React.createElement("span", {
          style: {
            marginLeft: 8
          }
        }, col.render(value, record, index)));
      };

      nextColumns.splice(checkboxIndex, 1, _objectSpread(_objectSpread({}, col), {}, {
        render: render
      }));
    }

    var _useState = useState({}),
        _useState2 = _slicedToArray(_useState, 2),
        setRefresh = _useState2[1];

    var recordStatusRef = useRef({}); // 基于 selectedRowKeys 推导选中状态

    useEffect(function () {
      recordStatusRef.current = {}; // 设置当前节点状态

      var loop = function loop(nodes) {
        return nodes.forEach(function (record) {
          var key = record[rowKey];

          var _record = getStatusRecord(record);

          _record.___checked = (selectedRowKeys || []).some(function (id) {
            return id === key;
          });
          if (record.children) loop(record.children);
        });
      };

      loop(dataSource); // 设置父节点状态

      setParentsCheckStatus(); // 触发重新render

      setRefresh({}); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedRowKeys, dataSource, rowKey]);

    function getStatusRecord(record) {
      var key = record[rowKey];
      if (!recordStatusRef.current[key]) recordStatusRef.current[key] = {};
      return recordStatusRef.current[key];
    }

    function handleCheck(e, record) {
      var checked = e.target.checked;
      var key = record[rowKey];

      var _record = getStatusRecord(record); // 当前节点状态


      _record.___checked = checked; // 后代节点状态

      var generationNodes = _record.___generationNodes || findGenerationNodes(dataSource, key);
      _record.___generationNodes = generationNodes;
      generationNodes.forEach(function (node) {
        var _node = getStatusRecord(node);

        _node.___checked = checked;
      }); // 父节点状态

      setParentsCheckStatus();
      setSelectedKeys(dataSource);
    }

    function setParentsCheckStatus() {
      var loop = function loop(nodes) {
        return nodes.forEach(function (record) {
          if (record.children) loop(record.children);
          var key = record[rowKey];

          var _record = getStatusRecord(record);

          var parentNodes = _record.___parentNodes || findParentNodes(dataSource, key) || [];
          _record.___parentNodes = parentNodes; // 处理父级半选状态, 从底层向上处理

          _toConsumableArray(parentNodes).reverse().forEach(function (node) {
            var nodeKey = node[rowKey];

            var _node = getStatusRecord(node);

            var generationNodes = _node.___generationNodes || findGenerationNodes(dataSource, nodeKey);
            _node.___generationNodes = generationNodes;
            var allChecked = true;
            var hasChecked = false;
            generationNodes.forEach(function (item) {
              var _item = getStatusRecord(item);

              if (!_item.___checked) allChecked = false;
              if (_item.___checked) hasChecked = true;
            });
            _node.___checked = hasChecked;
            _node.___indeterminate = !allChecked && hasChecked;
          });
        });
      };

      loop(dataSource);
    }

    function renderCell(_checked, record) {
      var _record = getStatusRecord(record);

      var checkboxProps = getCheckboxProps && getCheckboxProps(record) || {};
      return /*#__PURE__*/React.createElement(Checkbox, _extends({}, checkboxProps, {
        checked: _record.___checked,
        onChange: function onChange(e) {
          return handleCheck(e, record);
        },
        indeterminate: _record.___indeterminate,
        onClick: function onClick(e) {
          e.stopPropagation();
        }
      }));
    }

    function handleSelectAll(selected) {
      var loop = function loop(nodes) {
        return nodes.forEach(function (node) {
          var children = node.children;
          var checkboxProps = getCheckboxProps && getCheckboxProps(node) || {};

          if (!checkboxProps.disabled) {
            var _node = getStatusRecord(node);

            _node.___checked = selected;
            _node.___indeterminate = false;
          }

          if (children) loop(children);
        });
      };

      loop(dataSource);
      setSelectedKeys(dataSource);
    }

    function setSelectedKeys(ds) {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      var onChange = rowSelection.onChange;
      var selectedRows = []; // eslint-disable-next-line @typescript-eslint/no-shadow

      var selectedRowKeys = [];

      var loop = function loop(nodes) {
        return nodes.forEach(function (node) {
          var children = node.children;
          var key = node[rowKey];

          var _node = getStatusRecord(node);

          if (_node.___checked) {
            selectedRowKeys.push(key);
            selectedRows.push(node);
          }

          if (children) loop(children);
        });
      };

      loop(ds);
      if (onChange) onChange(selectedRowKeys, selectedRows);
    }

    prefixCls = "".concat(prefixCls, "-table");
    var rowClass = classNames(_defineProperty({}, "".concat(prefixCls, "-row-check"), rowCheck));
    return /*#__PURE__*/React.createElement(WrappedTable, _extends({}, otherProps, {
      columns: nextColumns,
      dataSource: dataSource,
      rowKey: rowKey,
      onRow: onRow,
      rowClassName: function rowClassName(record, index) {
        var cls = _rowClassName(record, index);

        return classNames(rowClass, cls);
      },
      rowSelection: _objectSpread(_objectSpread({}, others), {}, {
        getCheckboxProps: getCheckboxProps,
        selectedRowKeys: selectedRowKeys,
        renderCell: checkboxIndex === false ? renderCell : function () {
          return null;
        },
        onSelectAll: handleSelectAll
      })
    }));
  };
}
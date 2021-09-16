"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = editTable;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _formItem = _interopRequireDefault(require("../form-item"));

var _uuid = require("uuid");

var _componentContext = _interopRequireDefault(require("../component-context"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./style.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EditableContext = /*#__PURE__*/_react.default.createContext();

var EditableRow = function EditableRow(_ref) {
  var initialValues = _ref.initialValues,
      props = _objectWithoutProperties(_ref, ["initialValues"]);

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  return /*#__PURE__*/_react.default.createElement(_antd.Form, {
    name: (0, _uuid.v4)(),
    form: form,
    component: false,
    initialValues: initialValues
  }, /*#__PURE__*/_react.default.createElement(EditableContext.Provider, {
    value: form
  }, /*#__PURE__*/_react.default.createElement("tr", props)));
};

var EditableCell = function EditableCell(options) {
  var children = options.children,
      _options$record = options.record,
      record = _options$record === void 0 ? {} : _options$record,
      rowIndex = options.rowIndex,
      _options$col = options.col,
      col = _options$col === void 0 ? {} : _options$col,
      restProps = _objectWithoutProperties(options, ["children", "record", "rowIndex", "col"]);

  record._form = (0, _react.useContext)(EditableContext);
  var title = col.title,
      dataIndex = col.dataIndex,
      formProps = col.formProps;
  var childNode = children;
  var eleProps = formProps;

  if (typeof formProps === 'function') {
    eleProps = formProps(record, rowIndex);
  } // eleProps 存在，即表示可编辑


  if (eleProps) {
    childNode = /*#__PURE__*/_react.default.createElement(_formItem.default, _extends({
      label: title,
      showLabel: false,
      colon: false,
      name: dataIndex
    }, eleProps));
  }

  return /*#__PURE__*/_react.default.createElement("td", restProps, childNode);
};

function editTable(OriTable) {
  return function EditTable(props) {
    var context = (0, _react.useContext)(_componentContext.default);

    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
        columns = props.columns,
        _props$className = props.className,
        className = _props$className === void 0 ? '' : _props$className,
        _onRow = props.onRow,
        components = props.components,
        others = _objectWithoutProperties(props, ["prefixCls", "columns", "className", "onRow", "components"]);

    var body = (components === null || components === void 0 ? void 0 : components.body) || {};
    var nextComponents = {
      body: _objectSpread(_objectSpread({}, body), {}, {
        row: EditableRow,
        cell: EditableCell
      })
    };
    var newColumns = columns.map(function (col) {
      if (!col.formProps) {
        return col;
      }

      return _objectSpread(_objectSpread({}, col), {}, {
        onCell: function onCell(record, rowIndex) {
          return {
            record: record,
            rowIndex: rowIndex,
            col: col
          };
        }
      });
    });
    prefixCls = "".concat(prefixCls, "-table-editable");
    var rootClass = (0, _classnames.default)(className, prefixCls);
    return /*#__PURE__*/_react.default.createElement(OriTable, _extends({
      onRow: function onRow(record, index) {
        var result = {};
        if (_onRow) result = _onRow(record, index);

        var initialValues = _objectSpread({}, record);

        return _objectSpread(_objectSpread({}, result), {}, {
          initialValues: initialValues
        });
      },
      className: rootClass,
      components: nextComponents,
      columns: newColumns
    }, others));
  };
}
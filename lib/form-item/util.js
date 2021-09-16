"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInputLikeElement = isInputLikeElement;
exports.getPlaceholder = getPlaceholder;
exports.getRules = getRules;
exports.formElementTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _messageCode = _interopRequireDefault(require("../message-code"));

var _imageCode = _interopRequireDefault(require("../image-code"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var formElementTypes = [{
  type: 'image-code',
  Component: _imageCode.default,
  isInputLike: true,
  componentName: 'ImageCode'
}, {
  type: 'message-code',
  Component: _messageCode.default,
  isInputLike: true,
  componentName: 'MessageCode'
}, {
  type: 'input',
  Component: _antd.Input,
  isInputLike: true,
  componentName: 'Input'
}, {
  type: 'hidden',
  Component: _antd.Input,
  isInputLike: true
}, {
  type: 'number',
  Component: _antd.InputNumber,
  isInputLike: true,
  componentName: 'InputNumber'
}, {
  type: 'textarea',
  Component: _antd.Input.TextArea,
  isInputLike: true,
  componentName: 'Input.TextArea'
}, {
  type: 'password',
  Component: _antd.Input.Password,
  isInputLike: true,
  componentName: 'Input.Password'
}, {
  type: 'mobile',
  Component: _antd.Input,
  isInputLike: true,
  componentName: 'Input'
}, {
  type: 'email',
  Component: _antd.Input,
  isInputLike: true,
  componentName: 'Input'
}, {
  type: 'select',
  Component: _antd.Select,
  componentName: 'Select',
  getComponent: function getComponent(_ref) {
    var commonProps = _ref.commonProps,
        props = _ref.props;
    return /*#__PURE__*/_react.default.createElement(_antd.Select, _extends({
      optionFilterProp: "label"
    }, commonProps, props));
  }
}, {
  type: 'select-tree',
  getComponent: function getComponent(_ref2) {
    var commonProps = _ref2.commonProps,
        props = _ref2.props;
    return /*#__PURE__*/_react.default.createElement(_antd.TreeSelect, _extends({
      treeNodeFilterProp: "title"
    }, commonProps, props, {
      treeData: props.treeData || props.options
    }));
  },
  componentName: 'TreeSelect'
}, {
  type: 'checkbox',
  Component: _antd.Checkbox,
  componentName: 'Checkbox'
}, {
  type: 'checkbox-group',
  Component: _antd.Checkbox.Group,
  componentName: 'Checkbox.Group'
}, {
  type: 'radio',
  Component: _antd.Radio,
  componentName: 'Radio'
}, {
  type: 'radio-button',
  getComponent: function getComponent(_ref3) {
    var commonProps = _ref3.commonProps,
        props = _ref3.props;

    var _props$options = props.options,
        options = _props$options === void 0 ? [] : _props$options,
        others = _objectWithoutProperties(props, ["options"]);

    return /*#__PURE__*/_react.default.createElement(_antd.Radio.Group, _extends({
      buttonStyle: "solid"
    }, commonProps, others), options.map(function (opt) {
      return /*#__PURE__*/_react.default.createElement(_antd.Radio.Button, _extends({
        key: opt.value
      }, opt), opt.label);
    }));
  },
  componentName: 'Radio.Group'
}, {
  type: 'radio-group',
  Component: _antd.Radio.Group,
  componentName: 'Radio.Group'
}, {
  type: 'switch',
  Component: _antd.Switch,
  componentName: 'Switch'
}, {
  type: 'date',
  Component: _antd.DatePicker,
  componentName: 'DatePicker'
}, {
  type: 'week',
  getComponent: function getComponent(_ref4) {
    var commonProps = _ref4.commonProps,
        props = _ref4.props;
    return /*#__PURE__*/_react.default.createElement(_antd.DatePicker, _extends({}, commonProps, {
      picker: "week"
    }, props));
  },
  componentName: 'DatePicker'
}, {
  type: 'month',
  getComponent: function getComponent(_ref5) {
    var commonProps = _ref5.commonProps,
        props = _ref5.props;
    return /*#__PURE__*/_react.default.createElement(_antd.DatePicker, _extends({}, commonProps, {
      picker: "month"
    }, props));
  },
  componentName: 'DatePicker'
}, {
  type: 'quarter',
  getComponent: function getComponent(_ref6) {
    var commonProps = _ref6.commonProps,
        props = _ref6.props;
    return /*#__PURE__*/_react.default.createElement(_antd.DatePicker, _extends({}, commonProps, {
      picker: "quarter"
    }, props));
  },
  componentName: 'DatePicker'
}, {
  type: 'year',
  getComponent: function getComponent(_ref7) {
    var commonProps = _ref7.commonProps,
        props = _ref7.props;
    return /*#__PURE__*/_react.default.createElement(_antd.DatePicker, _extends({}, commonProps, {
      picker: "year"
    }, props));
  },
  componentName: 'DatePicker'
}, {
  type: 'date-range',
  Component: _antd.DatePicker.RangePicker,
  componentName: 'DatePicker.RangePicker'
}, {
  type: 'week-range',
  getComponent: function getComponent(_ref8) {
    var commonProps = _ref8.commonProps,
        props = _ref8.props;
    return /*#__PURE__*/_react.default.createElement(_antd.DatePicker.RangePicker, _extends({}, commonProps, {
      picker: "week"
    }, props));
  },
  componentName: 'DatePicker.RangePicker'
}, {
  type: 'month-range',
  getComponent: function getComponent(_ref9) {
    var commonProps = _ref9.commonProps,
        props = _ref9.props;
    return /*#__PURE__*/_react.default.createElement(_antd.DatePicker.RangePicker, _extends({}, commonProps, {
      picker: "month"
    }, props));
  },
  componentName: 'DatePicker.RangePicker'
}, {
  type: 'quarter-range',
  getComponent: function getComponent(_ref10) {
    var commonProps = _ref10.commonProps,
        props = _ref10.props;
    return /*#__PURE__*/_react.default.createElement(_antd.DatePicker.RangePicker, _extends({}, commonProps, {
      picker: "quarter"
    }, props));
  },
  componentName: 'DatePicker.RangePicker'
}, {
  type: 'year-range',
  getComponent: function getComponent(_ref11) {
    var commonProps = _ref11.commonProps,
        props = _ref11.props;
    return /*#__PURE__*/_react.default.createElement(_antd.DatePicker.RangePicker, _extends({}, commonProps, {
      picker: "year"
    }, props));
  },
  componentName: 'DatePicker.RangePicker'
}, {
  type: 'time',
  Component: _antd.TimePicker,
  componentName: 'TimePicker'
}, {
  type: 'time-range',
  Component: _antd.TimePicker.RangePicker,
  componentName: 'TimePicker'
}, {
  type: 'date-time',
  getComponent: function getComponent(_ref12) {
    var commonProps = _ref12.commonProps,
        props = _ref12.props;
    return /*#__PURE__*/_react.default.createElement(_antd.DatePicker, _extends({}, commonProps, {
      showTime: true
    }, props));
  },
  componentName: 'DatePicker'
}, {
  type: 'date-time-range',
  getComponent: function getComponent(_ref13) {
    var commonProps = _ref13.commonProps,
        props = _ref13.props;
    return /*#__PURE__*/_react.default.createElement(_antd.DatePicker.RangePicker, _extends({}, commonProps, {
      showTime: true
    }, props));
  },
  componentName: 'DatePicker.RangePicker'
}, {
  type: 'cascader',
  Component: _antd.Cascader,
  componentName: 'Cascader'
}, {
  type: 'transfer',
  Component: _antd.Transfer,
  componentName: 'Transfer'
}]; // type markdown table
// console.log(formElementTypes.sort((a, b) => a.type > b.type ? 1 : -1).map(item => `| ${item.type} | ${item.componentName} |`).join('\n'));

/**
 * 类似 input 元素
 * @param type
 * @returns {boolean}
 */

exports.formElementTypes = formElementTypes;

function isInputLikeElement(type) {
  var types = formElementTypes.filter(function (item) {
    return item.isInputLike;
  }).map(function (item) {
    return item.type;
  });
  return types.includes(type);
}

function getPlaceholder(_ref14) {
  var type = _ref14.type,
      placeholder = _ref14.placeholder,
      label = _ref14.label;
  if (placeholder !== undefined) return placeholder;
  if (type === 'time-range') return ['开始时间', '结束时间'];
  if (type && type.endsWith('-range')) return undefined;
  if (isInputLikeElement(type)) return "\u8BF7\u8F93\u5165".concat(label);
  return "\u8BF7\u9009\u62E9".concat(label);
}

function getRules(options) {
  var type = options.type,
      noSpace = options.noSpace,
      rules = options.rules,
      required = options.required,
      placeholder = options.placeholder,
      maxLength = options.maxLength,
      minLength = options.minLength;
  if (!rules) rules = [];

  if (required && !rules.some(function (item) {
    return _typeof(item) === 'object' && 'required' in item;
  })) {
    rules.push({
      required: true,
      message: "".concat(placeholder, "\uFF01")
    });
  }

  if (noSpace && isInputLikeElement(type)) {
    rules.push({
      validator: function validator(rule, value) {
        if (value && typeof value === 'string' && value.includes(' ')) return Promise.reject(Error('不允许输入空格！'));
        return Promise.resolve();
      }
    });
  }

  if (maxLength !== undefined && !rules.find(function (item) {
    return 'max' in item;
  })) {
    rules.push({
      type: 'string',
      max: maxLength,
      message: "\u6700\u5927\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7 ".concat(maxLength, " \u4E2A\u5B57\u7B26\uFF01")
    });
  }

  if (minLength !== undefined && !rules.find(function (item) {
    return 'min' in item;
  })) {
    rules.push({
      type: 'string',
      min: minLength,
      message: "\u6700\u5C0F\u957F\u5EA6\u4E0D\u80FD\u4F4E\u4E8E ".concat(minLength, " \u4E2A\u5B57\u7B26\uFF01")
    });
  }

  return rules;
}
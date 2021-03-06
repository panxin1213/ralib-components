function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef } from 'react';
import { Form } from 'antd';
import { getPlaceholder, getRules } from './util';
import Element from './Element';

var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
};

var ItemTypes = tuple('image-code', 'message-code', 'input', 'hidden', 'number', 'textarea', 'password', 'mobile', 'email', 'select', 'select-tree', 'checkbox', 'checkbox-group', 'radio', 'radio-button', 'radio-group', 'switch', 'date', 'week', 'month', 'quarter', 'year', 'date-range', 'week-range', 'month-range', 'quarter-range', 'year-range', 'time', 'time-range', 'date-time', 'date-time-range', 'cascader', 'transfer'); // ???????????? recognized RFC2822 or ISO format

var dateFormatTypes = tuple('YYYY-MM-DD', 'YYYY-MM-DD HH:mm:ss', 'YYYYMMDD', 'YYYY-MM', 'YYYYMM', 'timestamp');
var Item = Form.Item;
var FormItem = /*#__PURE__*/forwardRef(function (props, ref) {
  var maxLength = props.maxLength,
      minLength = props.minLength,
      _props$type = props.type,
      type = _props$type === void 0 ? 'input' : _props$type,
      children = props.children,
      noSpace = props.noSpace,
      dateFormat = props.dateFormat,
      colon = props.colon,
      dependencies = props.dependencies,
      extra = props.extra,
      getValueFromEvent = props.getValueFromEvent,
      getValueProps = props.getValueProps,
      hasFeedback = props.hasFeedback,
      help = props.help,
      hidden = props.hidden,
      htmlFor = props.htmlFor,
      initialValue = props.initialValue,
      label = props.label,
      labelAlign = props.labelAlign,
      labelCol = props.labelCol,
      messageVariables = props.messageVariables,
      name = props.name,
      normalize = props.normalize,
      noStyle = props.noStyle,
      preserve = props.preserve,
      required = props.required,
      shouldUpdate = props.shouldUpdate,
      tooltip = props.tooltip,
      trigger = props.trigger,
      validateFirst = props.validateFirst,
      validateStatus = props.validateStatus,
      validateTrigger = props.validateTrigger,
      valuePropName = props.valuePropName,
      wrapperCol = props.wrapperCol,
      fieldKey = props.fieldKey,
      style = props.style,
      others = _objectWithoutProperties(props, ["maxLength", "minLength", "type", "children", "noSpace", "dateFormat", "colon", "dependencies", "extra", "getValueFromEvent", "getValueProps", "hasFeedback", "help", "hidden", "htmlFor", "initialValue", "label", "labelAlign", "labelCol", "messageVariables", "name", "normalize", "noStyle", "preserve", "required", "shouldUpdate", "tooltip", "trigger", "validateFirst", "validateStatus", "validateTrigger", "valuePropName", "wrapperCol", "fieldKey", "style"]); // ??????????????????????????????options?????????type???select


  if (others.options && type === 'input') type = 'select';
  if (!style) style = {}; // @ts-ignore

  if (!('width' in style)) style.width = type === 'switch' ? 'auto' : '100%'; // ?????? placeholder

  var placeholder = getPlaceholder(_objectSpread({
    type: type
  }, props)); // ??????????????????

  var rules = getRules(_objectSpread(_objectSpread({
    type: type
  }, props), {}, {
    placeholder: placeholder
  }));
  if (type === 'switch' && !valuePropName) valuePropName = 'checked';

  var elementProps = _objectSpread({
    type: type,
    style: style,
    placeholder: placeholder,
    dateFormat: dateFormat
  }, others);

  return /*#__PURE__*/React.createElement(Item, {
    colon: colon,
    dependencies: dependencies,
    extra: extra,
    getValueFromEvent: getValueFromEvent,
    getValueProps: getValueProps,
    hasFeedback: hasFeedback,
    help: help,
    hidden: hidden,
    htmlFor: htmlFor,
    initialValue: initialValue,
    label: label,
    labelAlign: labelAlign,
    labelCol: labelCol,
    messageVariables: messageVariables,
    name: name,
    normalize: normalize,
    noStyle: noStyle,
    preserve: preserve,
    required: required,
    rules: rules,
    shouldUpdate: shouldUpdate,
    tooltip: tooltip,
    trigger: trigger,
    validateFirst: validateFirst,
    validateStatus: validateStatus,
    validateTrigger: validateTrigger,
    valuePropName: valuePropName,
    wrapperCol: wrapperCol,
    fieldKey: fieldKey
  }, children || /*#__PURE__*/React.createElement(Element, Object.assign({}, elementProps, {
    forwardRef: ref
  })));
});
export { formElementTypes } from './util';
export default FormItem;
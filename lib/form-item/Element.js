"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Element;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Element(props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? 'input' : _props$type,
      dateFormat = props.dateFormat,
      value = props.value,
      onChange = props.onChange,
      forwardRef = props.forwardRef,
      others = _objectWithoutProperties(props, ["type", "dateFormat", "value", "onChange", "forwardRef"]);

  var commonProps = {
    ref: forwardRef,
    size: 'default'
  };

  var elementProps = _objectSpread({
    value: value,
    onChange: onChange
  }, others);

  if (dateFormat) {
    if (value) {
      if (Array.isArray(value)) {
        elementProps.value = value.map(function (item) {
          return (0, _moment.default)(item);
        });
      } else {
        elementProps.value = (0, _moment.default)(value);
      }
    } // eslint-disable-next-line @typescript-eslint/no-shadow


    elementProps.onChange = function (value) {
      if (!value) return onChange(value);
      var val;

      if (Array.isArray(value)) {
        val = value.map(function (item) {
          return dateFormat === 'timestamp' ? item.valueOf() : item.format(dateFormat);
        });
      } else {
        val = dateFormat === 'timestamp' ? value.valueOf() : value.format(dateFormat);
      }

      onChange(val);
      return null;
    };
  }

  var typeItem = _util.formElementTypes.find(function (item) {
    return item.type === type;
  });

  if (!typeItem) throw new Error("no such type: ".concat(type));
  var Component = typeItem.Component,
      getComponent = typeItem.getComponent;
  if (getComponent) return getComponent({
    commonProps: commonProps,
    props: elementProps
  }); // 类似Input组件 添加type

  if ((0, _util.isInputLikeElement)(type)) {
    return /*#__PURE__*/_react.default.createElement(Component, _extends({}, commonProps, {
      type: type
    }, elementProps));
  }

  return /*#__PURE__*/_react.default.createElement(Component, _extends({}, commonProps, elementProps));
}
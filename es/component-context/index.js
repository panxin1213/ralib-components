function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useContext } from 'react'; // 配置参数默认值

var initialValue = {
  loadingTip: '加载中......',
  prefixCls: 'ra-lib',
  okText: '确定',
  cancelText: '取消',
  layoutPageOtherHeight: 0,
  isMobile: false,
  mobileColumnDefaultWidth: 200
};
export var ComponentContext = /*#__PURE__*/React.createContext(initialValue);
export default ComponentContext; // 以props形式，接受各个配置

export function ComponentProvider(props) {
  var children = props.children,
      others = _objectWithoutProperties(props, ["children"]); // ComponentProvider 嵌套使用时，获取父级的数据


  var parentContext = useContext(ComponentContext);
  return /*#__PURE__*/React.createElement(ComponentContext.Provider, {
    value: _objectSpread(_objectSpread(_objectSpread({}, initialValue), parentContext), others)
  }, children);
}
export var ComponentConsumer = ComponentContext.Consumer;
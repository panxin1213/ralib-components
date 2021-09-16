function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { Component } from 'react';
import { ConfigProvider } from 'antd';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import './index.less';
var RowElement = SortableElement(function (props) {
  return props.children;
});
var BodyContainer = SortableContainer(function (props) {
  var children = props.children,
      others = _objectWithoutProperties(props, ["children"]);

  var children2 = props.children.flat(4).filter(function (item) {
    return !!item;
  });
  return /*#__PURE__*/React.createElement("tbody", others, children2.map(function (item, index) {
    var key = item.key;
    return /*#__PURE__*/React.createElement(RowElement, {
      key: key,
      index: index
    }, item);
  }));
});

function getCss(element, attr) {
  if (element.currentStyle) return element.currentStyle[attr];
  return window.getComputedStyle(element)[attr];
}

export default function DragRow(OriTable) {
  var DragRowTable = /*#__PURE__*/function (_Component) {
    _inherits(DragRowTable, _Component);

    var _super = _createSuper(DragRowTable);

    function DragRowTable(props) {
      var _this;

      _classCallCheck(this, DragRowTable);

      _this = _super.call(this, props);
      var _this$props = _this.props,
          helperClass = _this$props.helperClass,
          onSortStart = _this$props.onSortStart,
          onSortEnd = _this$props.onSortEnd,
          components = _this$props.components;

      var handleSortStart = function handleSortStart() {
        if (onSortStart) onSortStart.apply(void 0, arguments); // 保持tr样式

        var helperTds = document.querySelectorAll('.helper-element > td');

        var tr = _this.body.container.querySelector('tr');

        var tds = tr.querySelectorAll('td');
        tds.forEach(function (item, index) {
          if (!helperTds[index]) return;
          helperTds[index].style.width = getCss(item, 'width');
          helperTds[index].style.height = getCss(item, 'height');
        });
      };

      var handleSortEnd = function handleSortEnd(sortProps) {
        var oldIndex = sortProps.oldIndex,
            newIndex = sortProps.newIndex;

        var prefixCls = _this.context.getPrefixCls();

        if (_this.body.container.querySelector(".".concat(prefixCls, "-table-measure-row"))) {
          newIndex = newIndex - 1 < 0 ? 0 : newIndex - 1;
          oldIndex -= 1;
        }

        onSortEnd(_objectSpread(_objectSpread({}, sortProps), {}, {
          oldIndex: oldIndex,
          newIndex: newIndex
        }));
      };

      var BodyWrapper = function BodyWrapper(bodyProps) {
        var injectProps = {
          onSortEnd: handleSortEnd,
          onSortStart: handleSortStart,
          helperClass: classnames(helperClass, 'helper-element')
        };
        return /*#__PURE__*/React.createElement(BodyContainer, _extends({
          ref: function ref(node) {
            return _this.body = node;
          }
        }, injectProps, bodyProps));
      };

      var body = (components === null || components === void 0 ? void 0 : components.body) || {};
      _this.components = {
        body: _objectSpread(_objectSpread({}, body), {}, {
          wrapper: BodyWrapper
        })
      };
      return _this;
    }

    _createClass(DragRowTable, [{
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            className = _this$props2.className,
            onSortStart = _this$props2.onSortStart,
            onSortEnd = _this$props2.onSortEnd,
            helperClass = _this$props2.helperClass,
            others = _objectWithoutProperties(_this$props2, ["className", "onSortStart", "onSortEnd", "helperClass"]);

        var classNames = classnames(className, 'sxTableRowDraggable');
        return /*#__PURE__*/React.createElement(OriTable, _extends({}, others, {
          className: classNames,
          components: this.components
        }));
      }
    }]);

    return DragRowTable;
  }(Component);

  DragRowTable.contextType = ConfigProvider.ConfigContext;
  DragRowTable.propTypes = {
    onSortEnd: PropTypes.func.isRequired,
    helperClass: PropTypes.string
  };
  return DragRowTable;
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Demo;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _components = require("@ra-lib/components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Demo(props) {
  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  function handleSearch(values) {
    alert(JSON.stringify(values, null, 4));
  }

  return /*#__PURE__*/_react.default.createElement(_components.QueryBar, null, /*#__PURE__*/_react.default.createElement(_antd.Form, {
    layout: "inline",
    onFinish: handleSearch
  }, /*#__PURE__*/_react.default.createElement(_components.FormItem, {
    label: "\u59D3\u540D",
    name: "name"
  }), /*#__PURE__*/_react.default.createElement(_components.FormItem, {
    tpe: "number",
    label: "\u5E74\u9F84",
    name: "age"
  }), /*#__PURE__*/_react.default.createElement(_components.FormItem, null, /*#__PURE__*/_react.default.createElement(_antd.Space, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    htmlType: "submit"
  }, "\u67E5\u8BE2"), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    onClick: function onClick() {
      return form.resetFields();
    }
  }, "\u91CD\u7F6E")))));
}
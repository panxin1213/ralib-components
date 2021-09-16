function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * title: 展开收起
 * description: children传递函数（render-props），开启展开收起模式
 */
import React from 'react';
import { Form, Space, Button } from 'antd'; // @ts-ignore

import { QueryBar, FormItem } from '@ra-lib/components';
export default function Demo(props) {
  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  function handleSearch(values) {
    alert(JSON.stringify(values, null, 4));
  }

  return /*#__PURE__*/React.createElement(QueryBar, null, function (collapsed) {
    return /*#__PURE__*/React.createElement(Form, {
      layout: "inline",
      onFinish: handleSearch
    }, /*#__PURE__*/React.createElement(FormItem, {
      label: "\u59D3\u540D",
      name: "name"
    }), /*#__PURE__*/React.createElement(FormItem, {
      type: "number",
      label: "\u5E74\u9F84",
      name: "age"
    }), /*#__PURE__*/React.createElement(FormItem, {
      hidden: collapsed,
      type: "select",
      label: "\u5DE5\u4F5C",
      name: "job",
      options: [{
        value: '1',
        label: 'UI设计师'
      }, {
        value: '2',
        label: '前端'
      }, {
        value: '3',
        label: '后端'
      }]
    }), /*#__PURE__*/React.createElement(FormItem, {
      hidden: collapsed,
      label: "\u4F4F\u5740",
      name: "address"
    }), /*#__PURE__*/React.createElement(FormItem, null, /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(Button, {
      type: "primary",
      htmlType: "submit"
    }, "\u67E5\u8BE2"), /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        return form.resetFields();
      }
    }, "\u91CD\u7F6E"))));
  });
}
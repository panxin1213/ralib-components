"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _components = require("@ra-lib/components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * title: 基本用法
 * description: 最基本的用法
 */
// @ts-ignore
var _default = function _default() {
  var dataSource = [{
    name: '张三',
    age: 25
  }, {
    name: '李四',
    age: 26
  }];
  var columns = [{
    title: '姓名',
    dataIndex: 'name'
  }, {
    title: '年龄',
    dataIndex: 'age'
  }, {
    title: '操作',
    dataIndex: 'operator',
    render: function render(value, record) {
      var items = [{
        label: '编辑',
        onClick: function onClick() {
          return alert('编辑');
        }
      }, {
        label: '删除',
        color: 'red',
        confirm: {
          title: '您确定删除吗？',
          onConfirm: function onConfirm() {
            return alert('删除');
          }
        }
      }];
      return /*#__PURE__*/_react.default.createElement(_components.Operator, {
        items: items
      });
    }
  }];
  return /*#__PURE__*/_react.default.createElement(_components.Table, {
    columns: columns,
    dataSource: dataSource,
    pagination: false
  });
};

exports.default = _default;
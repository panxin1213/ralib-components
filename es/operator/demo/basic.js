import React from "react";

/**
 * title: 基本用法
 * description: 最基本的用法
 */
// @ts-ignore
import { Table, Operator } from '@ra-lib/components';
export default (function () {
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
      return /*#__PURE__*/React.createElement(Operator, {
        items: items
      });
    }
  }];
  return /*#__PURE__*/React.createElement(Table, {
    columns: columns,
    dataSource: dataSource,
    pagination: false
  });
});
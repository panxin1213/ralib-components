import React from 'react';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
/**
 * 批量删除提示
 * @param count 需要删除的记录个数
 * @returns {Promise<unknown>}
 */

export default function batchDeleteConfirm(count) {
  var content = /*#__PURE__*/React.createElement("div", null, "\u60A8\u786E\u5B9A\u5220\u9664", /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 5px',
      color: 'red',
      fontSize: 18
    }
  }, count), "\u6761\u8BB0\u5F55\u5417\uFF1F");
  return new Promise(function (resolve, reject) {
    Modal.confirm({
      title: '温馨提示',
      content: content,
      icon: /*#__PURE__*/React.createElement(ExclamationCircleOutlined, null),
      okType: 'danger',
      okText: '确定',
      cancelText: '取消',
      onOk: function onOk() {
        return resolve(true);
      },
      onCancel: function onCancel() {
        return reject();
      }
    });
  });
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = batchDeleteConfirm;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 批量删除提示
 * @param count 需要删除的记录个数
 * @returns {Promise<unknown>}
 */
function batchDeleteConfirm(count) {
  var content = /*#__PURE__*/_react.default.createElement("div", null, "\u60A8\u786E\u5B9A\u5220\u9664", /*#__PURE__*/_react.default.createElement("span", {
    style: {
      padding: '0 5px',
      color: 'red',
      fontSize: 18
    }
  }, count), "\u6761\u8BB0\u5F55\u5417\uFF1F");

  return new Promise(function (resolve, reject) {
    _antd.Modal.confirm({
      title: '温馨提示',
      content: content,
      icon: /*#__PURE__*/_react.default.createElement(_icons.ExclamationCircleOutlined, null),
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
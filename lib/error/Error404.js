"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _reactRouterDom = require("react-router-dom");

var _pageContent = _interopRequireDefault(require("../page-content"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Error404(props) {
  var _props$homePath = props.homePath,
      homePath = _props$homePath === void 0 ? '/' : _props$homePath,
      history = props.history;
  return /*#__PURE__*/_react.default.createElement(_pageContent.default, {
    fitHeight: true,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Result, {
    status: '404',
    title: '404',
    subTitle: "\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",
    extra: /*#__PURE__*/_react.default.createElement(_antd.Space, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
      type: 'primary',
      onClick: function onClick() {
        return history.replace(homePath);
      }
    }, "\u8FD4\u56DE\u9996\u9875"), /*#__PURE__*/_react.default.createElement(_antd.Button, {
      onClick: function onClick() {
        return history.goBack();
      }
    }, "\u8FD4\u56DE\u4E0A\u4E2A\u9875\u9762"))
  }));
}

var _default = (0, _reactRouterDom.withRouter)(Error404);

exports.default = _default;
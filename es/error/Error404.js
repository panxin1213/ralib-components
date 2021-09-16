import React from 'react';
import { Result, Button, Space } from 'antd';
import { withRouter } from 'react-router-dom';
import PageContent from '../page-content';

function Error404(props) {
  var _props$homePath = props.homePath,
      homePath = _props$homePath === void 0 ? '/' : _props$homePath,
      history = props.history;
  return /*#__PURE__*/React.createElement(PageContent, {
    fitHeight: true,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Result, {
    status: '404',
    title: '404',
    subTitle: "\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",
    extra: /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(Button, {
      type: 'primary',
      onClick: function onClick() {
        return history.replace(homePath);
      }
    }, "\u8FD4\u56DE\u9996\u9875"), /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        return history.goBack();
      }
    }, "\u8FD4\u56DE\u4E0A\u4E2A\u9875\u9762"))
  }));
}

export default withRouter(Error404);
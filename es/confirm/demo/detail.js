function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import React from "react";

/**
 * title: 详细用法
 * description: 传递多个参数
 */
import { Button } from 'antd'; // @ts-ignore

import { confirm } from '@ra-lib/components';
export default (function () {
  function handleDelete() {
    return _handleDelete.apply(this, arguments);
  }

  function _handleDelete() {
    _handleDelete = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return confirm({
                title: '提示',
                content: '您确定删除吗？删除之后不可恢复，请谨慎操作！',
                okText: '恩准',
                cancelText: '容朕想想'
              });

            case 2:
              alert('用户确定了！');

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleDelete.apply(this, arguments);
  }

  return /*#__PURE__*/React.createElement(Button, {
    danger: true,
    onClick: handleDelete
  }, "\u5220\u9664");
});
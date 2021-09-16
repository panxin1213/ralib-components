function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import React from "react";

/**
 * title: 基本用法
 * description: 最基本的用法
 */
import { Button } from 'antd'; // @ts-ignore

import { batchDeleteConfirm } from '@ra-lib/components';
export default (function () {
  function handleBatchDelete() {
    return _handleBatchDelete.apply(this, arguments);
  }

  function _handleBatchDelete() {
    _handleBatchDelete = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return batchDeleteConfirm(8);

            case 2:
              alert('用户确定了！');

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleBatchDelete.apply(this, arguments);
  }

  return /*#__PURE__*/React.createElement(Button, {
    danger: true,
    onClick: handleBatchDelete
  }, "\u5220\u9664");
});
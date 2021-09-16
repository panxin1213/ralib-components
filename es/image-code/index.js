function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef, useImperativeHandle, useContext, useState, useEffect, useRef } from 'react';
import { Input, Spin } from 'antd';
import classNames from 'classnames'; // @ts-ignore

import defaultErrorImage from './defaultErrorImage.png';
import ComponentContext from '../component-context';
import './style.less';
var ImageCode = /*#__PURE__*/forwardRef(function (props, ref) {
  var context = useContext(ComponentContext);

  var _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? '请输入图片验证码' : _props$placeholder,
      _props$errorImage = props.errorImage,
      errorImage = _props$errorImage === void 0 ? defaultErrorImage : _props$errorImage,
      _props$imageWidth = props.imageWidth,
      imageWidth = _props$imageWidth === void 0 ? 90 : _props$imageWidth,
      className = props.className,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
      src = props.src,
      onChange = props.onChange,
      value = props.value,
      others = _objectWithoutProperties(props, ["placeholder", "errorImage", "imageWidth", "className", "prefixCls", "src", "onChange", "value"]);

  useImperativeHandle(ref, function () {
    return {
      refresh: handleClick
    };
  });
  var imgRef = useRef(null);

  var _useState = useState(errorImage),
      _useState2 = _slicedToArray(_useState, 2),
      url = _useState2[0],
      setUrl = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  function handleClick() {
    return _handleClick.apply(this, arguments);
  }

  function _handleClick() {
    _handleClick = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // 后端地址可直接作为src的情况
              if (typeof src === 'string') {
                setUrl("".concat(src, "?t=").concat(Date.now()));
              }

              if (!(typeof src === 'function')) {
                _context2.next = 11;
                break;
              }

              setLoading(true);
              _context2.prev = 3;
              _context2.next = 6;
              return src();

            case 6:
              result = _context2.sent;
              setUrl(result || errorImage);

            case 8:
              _context2.prev = 8;
              setLoading(false);
              return _context2.finish(8);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[3,, 8, 11]]);
    }));
    return _handleClick.apply(this, arguments);
  }

  function handleError() {
    setUrl(errorImage);
  }

  useEffect(function () {
    _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return handleClick();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  prefixCls = "".concat(prefixCls, "-image-code");
  var rootClass = classNames(prefixCls, className);
  var inputClass = "".concat(prefixCls, "-input");
  var imgClass = "".concat(prefixCls, "-img");
  return /*#__PURE__*/React.createElement(Spin, {
    spinning: loading,
    size: 'small'
  }, /*#__PURE__*/React.createElement("div", {
    className: rootClass
  }, /*#__PURE__*/React.createElement(Input, Object.assign({
    className: inputClass,
    placeholder: placeholder,
    value: value,
    onChange: onChange
  }, others)), /*#__PURE__*/React.createElement("img", {
    ref: imgRef,
    className: imgClass,
    style: {
      width: imageWidth
    },
    src: url,
    alt: "\u56FE\u7247\u9A8C\u8BC1\u7801",
    onClick: handleClick,
    onError: handleError
  })));
});
export default ImageCode;
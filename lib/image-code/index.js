"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _classnames = _interopRequireDefault(require("classnames"));

var _defaultErrorImage = _interopRequireDefault(require("./defaultErrorImage.png"));

var _componentContext = _interopRequireDefault(require("../component-context"));

require("./style.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var ImageCode = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var context = (0, _react.useContext)(_componentContext.default);

  var _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? '请输入图片验证码' : _props$placeholder,
      _props$errorImage = props.errorImage,
      errorImage = _props$errorImage === void 0 ? _defaultErrorImage.default : _props$errorImage,
      _props$imageWidth = props.imageWidth,
      imageWidth = _props$imageWidth === void 0 ? 90 : _props$imageWidth,
      className = props.className,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
      src = props.src,
      onChange = props.onChange,
      value = props.value,
      others = _objectWithoutProperties(props, ["placeholder", "errorImage", "imageWidth", "className", "prefixCls", "src", "onChange", "value"]);

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      refresh: handleClick
    };
  });
  var imgRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(errorImage),
      _useState2 = _slicedToArray(_useState, 2),
      url = _useState2[0],
      setUrl = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
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

  (0, _react.useEffect)(function () {
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
  var rootClass = (0, _classnames.default)(prefixCls, className);
  var inputClass = "".concat(prefixCls, "-input");
  var imgClass = "".concat(prefixCls, "-img");
  return /*#__PURE__*/_react.default.createElement(_antd.Spin, {
    spinning: loading,
    size: 'small'
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: rootClass
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, Object.assign({
    className: inputClass,
    placeholder: placeholder,
    value: value,
    onChange: onChange
  }, others)), /*#__PURE__*/_react.default.createElement("img", {
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
var _default = ImageCode;
exports.default = _default;
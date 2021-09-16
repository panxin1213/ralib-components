"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FullScreen;

var _react = _interopRequireWildcard(require("react"));

var _icons = require("@ant-design/icons");

var _antd = require("antd");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function FullScreen(props) {
  var _props$element = props.element,
      element = _props$element === void 0 ? document.documentElement : _props$element,
      _props$enterFullTip = props.enterFullTip,
      enterFullTip = _props$enterFullTip === void 0 ? '全屏' : _props$enterFullTip,
      _props$exitFullTip = props.exitFullTip,
      exitFullTip = _props$exitFullTip === void 0 ? '退出全屏' : _props$exitFullTip,
      _props$onFull = props.onFull,
      onFull = _props$onFull === void 0 ? function () {
    return undefined;
  } : _props$onFull,
      _props$onExit = props.onExit,
      onExit = _props$onExit === void 0 ? function () {
    return undefined;
  } : _props$onExit,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'bottom' : _props$placement,
      children = props.children;
  var initFullScreen = document.fullscreenElement // @ts-ignore
  || document.mozFullScreenElement // @ts-ignore
  || document.webkitFullscreenElement // @ts-ignore
  || document.fullScreen // @ts-ignore
  || document.mozFullScreen // @ts-ignore
  || document.webkitIsFullScreen;

  var _useState = (0, _react.useState)(initFullScreen),
      _useState2 = _slicedToArray(_useState, 2),
      fullScreen = _useState2[0],
      setFullScreen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      toolTipVisible = _useState4[0],
      setToolTipVisible = _useState4[1];

  (0, _react.useEffect)(function () {
    function handleFullScreenChange() {
      var nextFullScreen = !fullScreen; // eslint-disable-next-line @typescript-eslint/no-unused-expressions

      nextFullScreen ? onFull() : onExit();
      setFullScreen(nextFullScreen);
      setToolTipVisible(false);
    }

    window.document.addEventListener('fullscreenchange', handleFullScreenChange);
    window.document.addEventListener('mozfullscreenchange', handleFullScreenChange);
    window.document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
    window.document.addEventListener('msfullscreenchange', handleFullScreenChange);
    return function () {
      window.document.removeEventListener('fullscreenchange', handleFullScreenChange);
      window.document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
      window.document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
      window.document.removeEventListener('msfullscreenchange', handleFullScreenChange);
    };
  }, [fullScreen]);

  function handleFullScreen() {
    if (fullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen(); // @ts-ignore
      } else if (document.msExitFullscreen) {
        // @ts-ignore
        document.msExitFullscreen(); // @ts-ignore
      } else if (document.mozCancelFullScreen) {
        // @ts-ignore
        document.mozCancelFullScreen(); // @ts-ignore
      } else if (document.webkitExitFullscreen) {
        // @ts-ignore
        document.webkitExitFullscreen();
      }

      return;
    }

    if (element.requestFullscreen) {
      element.requestFullscreen(); // @ts-ignore
    } else if (element.mozRequestFullScreen) {
      // @ts-ignore
      element.mozRequestFullScreen(); // @ts-ignore
    } else if (element.msRequestFullscreen) {
      // @ts-ignore
      element.msRequestFullscreen(); // @ts-ignore
    } else if (element.webkitRequestFullscreen) {
      // @ts-ignore
      element.webkitRequestFullScreen();
    }
  }

  var Icon = fullScreen ? _icons.FullscreenExitOutlined : _icons.FullscreenOutlined;
  var title = fullScreen ? exitFullTip : enterFullTip;
  return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
    visible: toolTipVisible,
    placement: placement,
    title: title
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: handleFullScreen,
    onMouseEnter: function onMouseEnter() {
      return setToolTipVisible(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setToolTipVisible(false);
    }
  }, children ? children(fullScreen) : /*#__PURE__*/_react.default.createElement(Icon, null)));
}
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _pathToRegexp = require("path-to-regexp");

var _reactRouterDom = require("react-router-dom");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = /*#__PURE__*/_react.default.memo( /*#__PURE__*/(0, _react.forwardRef)(function KeepPageAlive(props, ref) {
  var routes = props.routes,
      render404 = props.render404,
      hashRouter = props.hashRouter,
      baseName = props.baseName;
  var keepPagesRef = (0, _react.useRef)([]);

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      setRefresh = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      reload = _useState4[0],
      setReload = _useState4[1];

  var _useMemo = (0, _react.useMemo)(function () {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    var keepRoutes = []; // eslint-disable-next-line @typescript-eslint/no-shadow

    var unKeepRoutes = [];
    (routes || []).forEach(function (item) {
      if (item.keepAlive === false) {
        unKeepRoutes.push(item);
      } else {
        keepRoutes.push(item);
      }
    });
    return {
      keepRoutes: keepRoutes,
      unKeepRoutes: unKeepRoutes
    };
  }, [routes]),
      keepRoutes = _useMemo.keepRoutes,
      unKeepRoutes = _useMemo.unKeepRoutes;

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      pages: keepPagesRef.current,
      refresh: function refresh(isReload) {
        setRefresh({});
        if (isReload) setReload({});
      }
    };
  });
  var _window$location = window.location,
      pathname = _window$location.pathname,
      search = _window$location.search,
      hash = _window$location.hash;
  var routePath = hashRouter ? hash.replace('#', '').split('?')[0] : pathname;
  if (baseName) routePath = routePath.replace(baseName, '');
  (0, _react.useEffect)(function () {
    if (!keepRoutes.length) return;
    var key = hashRouter ? hash.replace('#', '') : "".concat(pathname).concat(search).concat(hash);
    var index = -1;
    keepPagesRef.current.forEach(function (item, i) {
      // eslint-disable-next-line no-param-reassign
      item.active = false;
      if (item.key === key) index = i;
    }); // ???????????????????????????????????????

    if (index === -1) {
      var _route;

      var route = keepRoutes.find(function (_ref) {
        var path = _ref.path;
        return (0, _pathToRegexp.match)(path, {
          decode: decodeURIComponent
        })(routePath);
      });
      var unKeepRoute = unKeepRoutes.find(function (_ref2) {
        var path = _ref2.path;
        return (0, _pathToRegexp.match)(path, {
          decode: decodeURIComponent
        })(routePath);
      }); // ??????404??????

      if (!route && !unKeepRoute) route = {
        path: routePath,
        component: render404
      }; // ??????match???????????????????????? '/'???????????????????????????match

      var routeMatch = {};

      var _match = (0, _pathToRegexp.match)(route.path, {
        decode: decodeURIComponent
      })(routePath),
          params = _match.params;

      routeMatch.params = params;
      routeMatch.path = route.path;
      routeMatch.url = pathname;
      routeMatch.isExact = true;
      var Component = route.component;
      keepPagesRef.current.unshift({
        path: (_route = route) === null || _route === void 0 ? void 0 : _route.path,
        key: key,
        // ?????? React.memo ??????????????????????????????????????????????????????
        Component: /*#__PURE__*/_react.default.memo(function (componentProps) {
          return /*#__PURE__*/_react.default.createElement(Component, _extends({}, componentProps, {
            match: routeMatch
          }));
        })
      });
    } else {
      // ??????????????????????????????????????????
      var nextPage = keepPagesRef.current[index]; // active ??????????????????undefined???????????????false?????????????????????true

      nextPage.active = true; // ??????????????????????????????????????????iframe???????????????
      // const [page] = keepPagesRef.current.splice(index, 1);
      // keepPagesRef.current.unshift(page);
    } // ????????????????????????


    setRefresh({});
  }, [reload, keepRoutes, unKeepRoutes, pathname, search, hash, hashRouter, routePath, render404]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, keepPagesRef.current.map(function (item) {
    var key = item.key,
        Component = item.Component,
        path = item.path,
        active = item.active;
    var display = active !== false ? 'block' : 'none';
    var activeProps = {
      active: active
    }; // ??????iframe ????????? props???????????????
    // ??????????????????????????????active??????

    if (path === '/iframe_page_/:src') activeProps = {};
    return /*#__PURE__*/_react.default.createElement("div", {
      key: key,
      style: {
        display: display
      }
    }, /*#__PURE__*/_react.default.createElement(Component, activeProps));
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, unKeepRoutes.map(function (item) {
    var path = item.path,
        component = item.component;
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
      key: path,
      exact: true,
      path: path,
      component: component
    });
  })));
}));

exports.default = _default;
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useMemo, useRef, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { match } from 'path-to-regexp';
import { Route, Switch } from 'react-router-dom';
export default /*#__PURE__*/React.memo( /*#__PURE__*/forwardRef(function KeepPageAlive(props, ref) {
  var routes = props.routes,
    render404 = props.render404,
    hashRouter = props.hashRouter,
    baseName = props.baseName;
  var keepPagesRef = useRef([]);

  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    setRefresh = _useState2[1];

  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    reload = _useState4[0],
    setReload = _useState4[1];

  var _useMemo = useMemo(function () {
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

  useImperativeHandle(ref, function () {
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
  useEffect(function () {
    if (!keepRoutes.length) return;
    var key = hashRouter ? hash.replace('#', '') : "".concat(pathname).concat(search).concat(hash);
    var index = -1;
    keepPagesRef.current.forEach(function (item, i) {
      // eslint-disable-next-line no-param-reassign
      item.active = false;
      if (item.key === key) index = i;
    }); // 未找到已存在页面，添加一个

    if (index === -1) {
      var _route;

      var route = keepRoutes.find(function (_ref) {
        var path = _ref.path;
        return match(path, {
          decode: decodeURIComponent
        })(routePath);
      });
      var unKeepRoute = unKeepRoutes.find(function (_ref2) {
        var path = _ref2.path;
        return match(path, {
          decode: decodeURIComponent
        })(routePath);
      }); // 渲染404页面

      if (!route && !unKeepRoute) route = {
        path: routePath,
        component: render404
      }; // 修复match属性，当前路由是 '/'，无法获取到正确的match

      var routeMatch = {};

      if (route) {
        var _match = match(route.path, {
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
          // 使用 React.memo 保持组件在没有属性变化的情况下不更新
          Component: /*#__PURE__*/React.memo(function (componentProps) {
            return /*#__PURE__*/React.createElement(Component, _extends({}, componentProps, {
              match: routeMatch
            }));
          })
        });
      }
    } else {
      // 页面已存在，当前页面标记激活
      var nextPage = keepPagesRef.current[index]; // active 初次加载为：undefined，隐藏为：false，再次激活为：true

      nextPage.active = true; // 不要移动位置，页面内如果存在iframe会重新加载
      // const [page] = keepPagesRef.current.splice(index, 1);
      // keepPagesRef.current.unshift(page);
    } // 触发当前组件更新


    setRefresh({});
  }, [reload, keepRoutes, unKeepRoutes, pathname, search, hash, hashRouter, routePath, render404]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, keepPagesRef.current.map(function (item) {
    var key = item.key,
      Component = item.Component,
      path = item.path,
      active = item.active;
    var display = active !== false ? 'block' : 'none';
    var activeProps = {
      active: active
    }; // 内嵌iframe 不传递 props，防止更新
    // 页面首次加载，不传递active属性

    if (path === '/iframe_page_/:src') activeProps = {};
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      style: {
        display: display
      }
    }, /*#__PURE__*/React.createElement(Component, activeProps));
  }), /*#__PURE__*/React.createElement(Switch, null, unKeepRoutes.map(function (item) {
    var path = item.path,
      component = item.component;
    return /*#__PURE__*/React.createElement(Route, {
      key: path,
      exact: true,
      path: path,
      component: component
    });
  })));
}));
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import React from "react";
import { useContext, useMemo } from 'react';
import classNames from 'classnames';
import ComponentContext from '../../component-context'; // @ts-ignore

import { findParentNodes, findGenerationNodes } from '@ra-lib/util';
import Menu from '../Menu';
import LAYOUT_TYPE from '../layout-type';
import './style.less';
export default function Side(props) {
  var context = useContext(ComponentContext);
  var className = props.className,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
      headerHeight = props.headerHeight,
      sideWidth = props.sideWidth,
      sideCollapsed = props.sideCollapsed,
      selectedMenuPath = props.selectedMenuPath,
      searchMenuPlaceholder = props.searchMenuPlaceholder,
      collectedMenuTitle = props.collectedMenuTitle,
      showSearchMenu = props.showSearchMenu,
      renderSide = props.renderSide,
      menuTreeData = props.menuTreeData,
      keepMenuOpen = props.keepMenuOpen,
      sideMinWidth = props.sideMinWidth,
      layoutType = props.layoutType,
      selectedMenuParents = props.selectedMenuParents,
      theme = props.theme,
      _props$collectedMenus = props.collectedMenus,
      collectedMenus = _props$collectedMenus === void 0 ? [{
    id: '2',
    title: '用户管理',
    path: '/users'
  }, {
    id: '3',
    title: '角色管理',
    path: '/roles'
  }] : _props$collectedMenus,
      onMenuCollect = props.onMenuCollect;
  var collectionMenuId = 'collection-menu';
  var showCollectedMenus = !!collectedMenus;
  var sideMenus = useMemo(function () {
    var nextSideMenus = [];

    if (LAYOUT_TYPE.SIDE_MENU === layoutType) {
      nextSideMenus = _toConsumableArray(menuTreeData);
    }

    if (LAYOUT_TYPE.TOP_SIDE_MENU === layoutType) {
      var parentNodes = findParentNodes(menuTreeData, selectedMenuPath, 'path');

      if (parentNodes && parentNodes.length) {
        nextSideMenus = _toConsumableArray(parentNodes[0].children || []);
      }
    }

    if (!showCollectedMenus) return nextSideMenus; // 添加我的收藏菜单

    var collectionMenu = {
      id: collectionMenuId,
      children: collectedMenus
    };
    var collectionMenuIds = findGenerationNodes(collectionMenu, collectionMenuId).map(function (item) {
      return "".concat(item.id);
    });
    collectionMenu.title = "".concat(collectedMenuTitle, "\uFF08").concat(collectionMenuIds.length, "\uFF09");
    nextSideMenus.unshift(collectionMenu); // 标记是否已收藏

    var loop = function loop(nodes) {
      return nodes.forEach(function (node) {
        var id = node.id,
            children = node.children; // eslint-disable-next-line no-param-reassign

        node.isCollected = collectionMenuIds.includes("".concat(id)) && id !== collectionMenuId;
        if (children) loop(children);
      });
    };

    loop(nextSideMenus);
    return nextSideMenus;
  }, [collectedMenuTitle, menuTreeData, collectedMenus, showCollectedMenus, layoutType, selectedMenuPath]);
  prefixCls = "".concat(prefixCls, "-layout-side");
  var rootClass = classNames(prefixCls, className, {
    dark: theme === 'dark',
    collapsed: sideCollapsed
  });
  var footerClass = classNames("".concat(prefixCls, "-footer"));
  return /*#__PURE__*/React.createElement("aside", {
    className: rootClass,
    style: {
      top: headerHeight,
      width: sideWidth
    }
  }, renderSide ? renderSide({
    menuTreeData: menuTreeData,
    Menu: Menu
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, [LAYOUT_TYPE.SIDE_MENU, LAYOUT_TYPE.TOP_SIDE_MENU].includes(layoutType) ? /*#__PURE__*/React.createElement(Menu, {
    theme: theme,
    sideMinWidth: sideMinWidth,
    keepMenuOpen: keepMenuOpen,
    selectedMenuPath: selectedMenuPath,
    sideCollapsed: sideCollapsed,
    menuTreeData: sideMenus,
    searchMenuPlaceholder: searchMenuPlaceholder,
    showSearchMenu: showSearchMenu,
    selectedMenuParents: selectedMenuParents,
    showCollectedMenus: showCollectedMenus,
    collectionMenuId: collectionMenuId,
    onMenuCollect: onMenuCollect
  }) : null, /*#__PURE__*/React.createElement("footer", {
    className: footerClass
  })));
}
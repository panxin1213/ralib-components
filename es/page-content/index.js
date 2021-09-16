function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { forwardRef, useContext } from 'react';
import Content from '../content';
import ComponentContext from '../component-context';
import classNames from 'classnames';
import './style.less';
var PageContent = /*#__PURE__*/forwardRef(function (props, ref) {
  var context = useContext(ComponentContext);

  var _props$isRoot = props.isRoot,
      isRoot = _props$isRoot === void 0 ? true : _props$isRoot,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
      className = props.className,
      fitHeight = props.fitHeight,
      others = _objectWithoutProperties(props, ["isRoot", "prefixCls", "className", "fitHeight"]);

  prefixCls = "".concat(prefixCls, "-content-page");
  var rootClass = classNames("".concat(prefixCls), className);
  return /*#__PURE__*/React.createElement(Content, Object.assign({
    className: rootClass,
    fitHeight: fitHeight,
    isRoot: isRoot
  }, others, {
    ref: ref
  }));
});
export default PageContent;
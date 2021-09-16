function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useRef, useContext } from 'react';
import { DownOutlined, LoadingOutlined, CheckCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Popconfirm, Dropdown, Menu, Tooltip } from 'antd';
import classNames from 'classnames';
import ComponentContext from '../component-context';
import './style.less';

function Operator(props) {
  var context = useContext(ComponentContext);
  var className = props.className,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
      items = props.items,
      moreText = props.moreText,
      moreContentWidth = props.moreContentWidth,
      moreTrigger = props.moreTrigger;
  prefixCls = "".concat(prefixCls, "-operator");
  var rootClass = classNames(prefixCls, className);
  var dividerClass = "".concat(prefixCls, "-divider");
  var labelClass = "".concat(prefixCls, "-label");
  var labelRef = useRef([]); // 获取label

  function getLabel(options, i) {
    var label = options.label,
        icon = options.icon,
        loading = options.loading,
        color = options.color,
        disabled = options.disabled;

    if (loading) {
      var labelWidth = labelRef.current[i] ? labelRef.current[i].offsetWidth : 'auto';
      return /*#__PURE__*/React.createElement("a", {
        className: labelClass,
        style: {
          display: 'inline-block',
          width: labelWidth,
          textAlign: 'center'
        }
      }, /*#__PURE__*/React.createElement(LoadingOutlined, null));
    }

    var labelStyle = {
      transition: 'all 1ms' // 解决拖拽表格，点击无效问题

    };
    if (color) labelStyle.color = color;

    if (icon) {
      label = /*#__PURE__*/React.createElement(Tooltip, {
        placement: 'bottom',
        title: label
      }, icon);
    }

    var cls = classNames(labelClass, {
      disabled: disabled
    }); // eslint-disable-next-line no-return-assign

    return /*#__PURE__*/React.createElement("a", {
      className: cls,
      style: labelStyle,
      ref: function ref(v) {
        return labelRef.current[i] = v;
      }
    }, label);
  }
  /*
   * 如果含有confirm属性，即表明是Popconfirm，
   * confirm作为Popconfirm的props
   *
   * 其他元素同理
   * */


  function getConfirm(options, i) {
    var label = getLabel(options, i);
    var confirm = options.confirm,
        _options$withKey = options.withKey,
        withKey = _options$withKey === void 0 ? true : _options$withKey; // 配合 alt command ctrl 键使用，不弹出提示

    if (withKey) {
      label = /*#__PURE__*/React.createElement("span", {
        onClick: function onClick(e) {
          if (e) e.stopPropagation();

          if (e.altKey || e.metaKey || e.ctrlKey) {
            e.stopPropagation();
            e.preventDefault();

            if (confirm && confirm.onConfirm) {
              confirm.onConfirm(e);
            }
          }
        }
      }, label);
    }

    return /*#__PURE__*/React.createElement(Popconfirm, Object.assign({
      okType: 'danger'
    }, confirm), label);
  }

  function getStatusSwitch(opt, i) {
    var statusSwitch = opt.statusSwitch,
        _opt$disabled = opt.disabled,
        disabled = _opt$disabled === void 0 ? false : _opt$disabled;
    var status = statusSwitch.status;

    var popConfirmProps = _objectSpread({}, statusSwitch);

    var icon = status ? /*#__PURE__*/React.createElement(CheckCircleOutlined, null) : /*#__PURE__*/React.createElement(MinusCircleOutlined, null);
    var color = status ? 'green' : 'red';
    var label = getLabel(_objectSpread(_objectSpread({}, opt), {}, {
      label: icon,
      color: color
    }), i); // 如果没有权限，不允许进行操作，只做展示

    if (disabled) return label;
    Reflect.deleteProperty(popConfirmProps, 'status');
    return /*#__PURE__*/React.createElement(Popconfirm, Object.assign({}, popConfirmProps), label);
  }

  function getText(options, i) {
    var label = getLabel(options, i);
    var onClick = options.onClick;
    return /*#__PURE__*/React.createElement("span", {
      onClick: onClick
    }, label);
  }

  function renderItem(opt, i) {
    var confirm = opt.confirm,
        statusSwitch = opt.statusSwitch,
        _opt$visible = opt.visible,
        visible = _opt$visible === void 0 ? true : _opt$visible,
        _opt$disabled2 = opt.disabled,
        disabled = _opt$disabled2 === void 0 ? false : _opt$disabled2;

    if (visible) {
      // 因为label特殊，getStatusSwitch 内部自己判断了是否可用
      if (disabled && statusSwitch) return getStatusSwitch(opt, i);

      if (disabled) {
        // eslint-disable-next-line no-param-reassign
        opt.color = '#ccc';
        return getLabel(opt, i);
      }

      if (confirm) return getConfirm(opt, i);
      if (statusSwitch) return getStatusSwitch(opt, i);
      return getText(opt, i);
    }

    return null;
  }

  var operators = [];
  var more = [];

  if (typeof moreTrigger === 'string') {
    moreTrigger = [moreTrigger];
  }

  items.forEach(function (opt, i) {
    var isMore = opt.isMore;
    var item = renderItem(opt, i);

    if (item) {
      if (isMore) {
        more.push(item);
      } else {
        operators.push(item);
      }
    }
  });

  if (more && more.length) {
    // 更多
    var menu = /*#__PURE__*/React.createElement(Menu, {
      style: {
        width: moreContentWidth
      }
    }, more.map(function (item, index) {
      return /*#__PURE__*/React.createElement(Menu.Item, {
        key: item.label || index
      }, item);
    }));
    operators.push( /*#__PURE__*/React.createElement(Dropdown, {
      overlay: menu,
      trigger: moreTrigger
    }, /*#__PURE__*/React.createElement("a", {
      className: 'operator-label'
    }, moreText)));
  }

  var operatorsLength = operators.length;

  if (!operatorsLength) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: rootClass
  }, operators.map(function (v, i) {
    return /*#__PURE__*/React.createElement("span", {
      key: v.label || "operator-".concat(i)
    }, v, operatorsLength === i + 1 ? '' : /*#__PURE__*/React.createElement("span", {
      className: dividerClass
    }));
  }));
}

Operator.defaultProps = {
  items: [],
  moreText: /*#__PURE__*/React.createElement("span", null, "\u66F4\u591A", /*#__PURE__*/React.createElement(DownOutlined, null)),
  moreContentWidth: 'auto',
  moreTrigger: 'click'
};
export default Operator;
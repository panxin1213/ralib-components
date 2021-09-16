"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _icons = require("@ant-design/icons");

var _antd = require("antd");

var _classnames = _interopRequireDefault(require("classnames"));

var _componentContext = _interopRequireDefault(require("../component-context"));

require("./style.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Operator(props) {
  var context = (0, _react.useContext)(_componentContext.default);
  var className = props.className,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? context.prefixCls : _props$prefixCls,
      items = props.items,
      moreText = props.moreText,
      moreContentWidth = props.moreContentWidth,
      moreTrigger = props.moreTrigger;
  prefixCls = "".concat(prefixCls, "-operator");
  var rootClass = (0, _classnames.default)(prefixCls, className);
  var dividerClass = "".concat(prefixCls, "-divider");
  var labelClass = "".concat(prefixCls, "-label");
  var labelRef = (0, _react.useRef)([]); // 获取label

  function getLabel(options, i) {
    var label = options.label,
        icon = options.icon,
        loading = options.loading,
        color = options.color,
        disabled = options.disabled;

    if (loading) {
      var labelWidth = labelRef.current[i] ? labelRef.current[i].offsetWidth : 'auto';
      return /*#__PURE__*/_react.default.createElement("a", {
        className: labelClass,
        style: {
          display: 'inline-block',
          width: labelWidth,
          textAlign: 'center'
        }
      }, /*#__PURE__*/_react.default.createElement(_icons.LoadingOutlined, null));
    }

    var labelStyle = {
      transition: 'all 1ms' // 解决拖拽表格，点击无效问题

    };
    if (color) labelStyle.color = color;

    if (icon) {
      label = /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
        placement: 'bottom',
        title: label
      }, icon);
    }

    var cls = (0, _classnames.default)(labelClass, {
      disabled: disabled
    }); // eslint-disable-next-line no-return-assign

    return /*#__PURE__*/_react.default.createElement("a", {
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
      label = /*#__PURE__*/_react.default.createElement("span", {
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

    return /*#__PURE__*/_react.default.createElement(_antd.Popconfirm, Object.assign({
      okType: 'danger'
    }, confirm), label);
  }

  function getStatusSwitch(opt, i) {
    var statusSwitch = opt.statusSwitch,
        _opt$disabled = opt.disabled,
        disabled = _opt$disabled === void 0 ? false : _opt$disabled;
    var status = statusSwitch.status;

    var popConfirmProps = _objectSpread({}, statusSwitch);

    var icon = status ? /*#__PURE__*/_react.default.createElement(_icons.CheckCircleOutlined, null) : /*#__PURE__*/_react.default.createElement(_icons.MinusCircleOutlined, null);
    var color = status ? 'green' : 'red';
    var label = getLabel(_objectSpread(_objectSpread({}, opt), {}, {
      label: icon,
      color: color
    }), i); // 如果没有权限，不允许进行操作，只做展示

    if (disabled) return label;
    Reflect.deleteProperty(popConfirmProps, 'status');
    return /*#__PURE__*/_react.default.createElement(_antd.Popconfirm, Object.assign({}, popConfirmProps), label);
  }

  function getText(options, i) {
    var label = getLabel(options, i);
    var onClick = options.onClick;
    return /*#__PURE__*/_react.default.createElement("span", {
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
    var menu = /*#__PURE__*/_react.default.createElement(_antd.Menu, {
      style: {
        width: moreContentWidth
      }
    }, more.map(function (item, index) {
      return /*#__PURE__*/_react.default.createElement(_antd.Menu.Item, {
        key: item.label || index
      }, item);
    }));

    operators.push( /*#__PURE__*/_react.default.createElement(_antd.Dropdown, {
      overlay: menu,
      trigger: moreTrigger
    }, /*#__PURE__*/_react.default.createElement("a", {
      className: 'operator-label'
    }, moreText)));
  }

  var operatorsLength = operators.length;

  if (!operatorsLength) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: rootClass
  }, operators.map(function (v, i) {
    return /*#__PURE__*/_react.default.createElement("span", {
      key: v.label || "operator-".concat(i)
    }, v, operatorsLength === i + 1 ? '' : /*#__PURE__*/_react.default.createElement("span", {
      className: dividerClass
    }));
  }));
}

Operator.defaultProps = {
  items: [],
  moreText: /*#__PURE__*/_react.default.createElement("span", null, "\u66F4\u591A", /*#__PURE__*/_react.default.createElement(_icons.DownOutlined, null)),
  moreContentWidth: 'auto',
  moreTrigger: 'click'
};
var _default = Operator;
exports.default = _default;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import { string, func, object, bool } from 'prop-types';
import cn from 'classnames';

var Input =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Input, _PureComponent);

  function Input() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Input)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (_ref) {
      var value = _ref.target.value;
      var onChange = _this.props.onChange;
      onChange(value);
    });

    return _this;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          type = _this$props.type,
          placeholder = _this$props.placeholder,
          label = _this$props.label,
          style = _this$props.style,
          fullWidth = _this$props.fullWidth,
          error = _this$props.error,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange,
          warning = _this$props.warning,
          props = _objectWithoutProperties(_this$props, ["value", "type", "placeholder", "label", "style", "fullWidth", "error", "disabled", "onChange", "warning"]);

      var showLabel = label && placeholder && value;
      var inputClassNames = cn('input-field__input', {
        'input-field__input--with-label': showLabel
      }, {
        'input-field__input--full-width': fullWidth
      }, {
        'input-field__input--error': error
      }, {
        'input-field__input--warning': warning
      }, {
        'input-field__input--disabled': disabled
      });
      var labelClassNames = cn('input-field__label', {
        'input-field__label--hide': !showLabel
      });
      return React.createElement("div", {
        style: style,
        className: "input-field"
      }, label && React.createElement("label", {
        className: labelClassNames
      }, label), error && React.createElement("span", {
        className: "input-field__error"
      }, error), warning && React.createElement("span", {
        className: "input-field__warning"
      }, warning), React.createElement("input", _extends({
        className: inputClassNames,
        value: value,
        type: type,
        placeholder: placeholder,
        disabled: disabled,
        onChange: this.onChange
      }, props)));
    }
  }]);

  return Input;
}(PureComponent);

_defineProperty(Input, "propTypes", {
  value: string.isRequired,
  onChange: func.isRequired,
  placeholder: string,
  type: string,
  label: string,
  fullWidth: bool,
  style: object,
  error: string,
  disabled: bool,
  warning: string
});

_defineProperty(Input, "defaultProps", {
  type: 'text',
  fullWidth: true,
  disabled: false
});

export { Input as default };
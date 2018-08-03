'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = function (_PureComponent) {
  _inherits(TextArea, _PureComponent);

  function TextArea() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextArea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (_ref2) {
      var value = _ref2.target.value;
      var onChange = _this.props.onChange;

      onChange(value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextArea, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          placeholder = _props.placeholder,
          style = _props.style,
          fullWidth = _props.fullWidth,
          error = _props.error,
          resize = _props.resize,
          onChange = _props.onChange,
          props = _objectWithoutProperties(_props, ['value', 'placeholder', 'style', 'fullWidth', 'error', 'resize', 'onChange']);

      var inputClassNames = (0, _classnames2.default)('input-field__input', { 'input-field__input--full-width': fullWidth }, { 'input-field__input--error': error }, { 'input-field__input--no-resize': !resize });

      return _react2.default.createElement(
        'div',
        { style: style, className: 'input-field' },
        error && _react2.default.createElement(
          'span',
          { className: 'input-field__error' },
          error
        ),
        _react2.default.createElement('textarea', Object.assign({
          className: inputClassNames,
          value: value,
          placeholder: placeholder,
          onChange: this.onChange
        }, props))
      );
    }
  }]);

  return TextArea;
}(_react.PureComponent);

TextArea.propTypes = {
  value: _propTypes.string.isRequired,
  onChange: _propTypes.func.isRequired,
  placeholder: _propTypes.string,
  fullWidth: _propTypes.bool,
  resize: _propTypes.bool,
  style: _propTypes.object,
  type: _propTypes.string,
  error: _propTypes.string
};
TextArea.defaultProps = {
  type: 'text',
  fullWidth: true,
  resize: false
};
exports.default = TextArea;
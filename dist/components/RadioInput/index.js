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

var RadioInput = function (_PureComponent) {
  _inherits(RadioInput, _PureComponent);

  function RadioInput() {
    _classCallCheck(this, RadioInput);

    return _possibleConstructorReturn(this, (RadioInput.__proto__ || Object.getPrototypeOf(RadioInput)).apply(this, arguments));
  }

  _createClass(RadioInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          checked = _props.checked,
          label = _props.label,
          style = _props.style,
          onChange = _props.onChange,
          props = _objectWithoutProperties(_props, ['checked', 'label', 'style', 'onChange']);

      var classNames = (0, _classnames2.default)('radio-input__mock', { 'radio-input__mock--checked': checked });

      return _react2.default.createElement(
        'div',
        {
          style: style,
          className: 'radio-input',
          onClick: onChange
        },
        _react2.default.createElement('input', Object.assign({
          className: 'radio-input__input',
          checked: checked,
          type: 'radio'
        }, props)),
        _react2.default.createElement('div', { className: classNames }),
        _react2.default.createElement(
          'label',
          { className: 'radio-input__label' },
          label
        )
      );
    }
  }]);

  return RadioInput;
}(_react.PureComponent);

RadioInput.propTypes = {
  label: _propTypes.string.isRequired,
  onChange: _propTypes.func.isRequired,
  checked: _propTypes.bool,
  style: _propTypes.object
};
RadioInput.defaultProps = {
  checked: false
};
exports.default = RadioInput;
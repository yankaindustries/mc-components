'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

var _helpers = require('../../utils/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Redux Form handler for the Input Component
var InputReduxForm = function InputReduxForm(_ref) {
  var input = _ref.input,
      label = _ref.label,
      placeholder = _ref.placeholder,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      warning = _ref$meta.warning,
      _ref$type = _ref.type,
      type = _ref$type === undefined ? 'text' : _ref$type;

  var parsedError = (0, _helpers.parseInputErrors)(error);
  var showError = touched && parsedError;
  var showWarning = touched && warning;

  return _react2.default.createElement(_Input2.default, Object.assign({
    label: label,
    type: type,
    placeholder: placeholder,
    error: showError ? parsedError : '',
    warning: showWarning ? warning : ''
  }, input));
};

InputReduxForm.propTypes = {
  input: _propTypes2.default.object.isRequired,
  label: _propTypes2.default.string,
  type: _propTypes2.default.string,
  meta: _propTypes2.default.object,
  placeholder: _propTypes2.default.string
};

exports.default = InputReduxForm;
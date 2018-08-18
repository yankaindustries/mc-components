var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import { parseInputErrors } from '../helpers';

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

  var parsedError = parseInputErrors(error);
  var showError = touched && parsedError;
  var showWarning = touched && warning;

  return React.createElement(Input, _extends({
    label: label,
    type: type,
    placeholder: placeholder,
    error: showError ? parsedError : '',
    warning: showWarning ? warning : ''
  }, input));
};

InputReduxForm.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  placeholder: PropTypes.string
};

export default InputReduxForm;
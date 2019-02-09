import React from 'react'
import PropTypes from 'prop-types'

import Textarea from '../Textarea'
import FormGroup from '../FormGroup'


const INPUT_PROP_TYPE = PropTypes.shape({
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
})

const META_PROP_TYPE = PropTypes.shape({
  error: PropTypes.string,
})


const TextareaField = ({
  help,
  input,
  label,
  maxlength,
  meta: {
    error,
    touched,
  },
  required,
  ...props
}) =>
  <FormGroup
    disabled={input.disabled}
    error={error}
    help={help}
    label={label}
    maxlength={maxlength}
    name={input.name}
    touched={input.touched}
    required={required}
  >
    <Textarea
      error={error}
      touched={touched}
      {...input}
      {...props}
    />
  </FormGroup>

TextareaField.propTypes = {
  input: INPUT_PROP_TYPE,
  meta: META_PROP_TYPE,
}

export default TextareaField

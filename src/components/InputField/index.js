import React from 'react'
import PropTypes from 'prop-types'

import Input from '../Input'
import FormGroup from '../FormGroup'


const INPUT_PROP_TYPE = PropTypes.shape({
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
})

const META_PROP_TYPE = PropTypes.shape({
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
})

const parseError = (error) => {
  if (!Array.isArray(error)) {
    return error
  }
  return error.length > 0 ? error[0] : undefined
}

const InputField = ({
  help,
  input,
  label,
  maxlength,
  meta,
  required,
  ...props
}) => {
  const error = meta.error || props.error
  const touched = meta.touched || props.touched

  return (
    <FormGroup
      disabled={input.disabled}
      error={error}
      help={help}
      label={label}
      maxlength={maxlength}
      name={input.name}
      touched={touched}
      required={required}
      value={input.value}
    >
      <Input
        error={parseError(error)}
        touched={touched}
        {...input}
        {...props}
      />
    </FormGroup>
  )
}

InputField.propTypes = {
  input: INPUT_PROP_TYPE,
  meta: META_PROP_TYPE,
}

export default InputField

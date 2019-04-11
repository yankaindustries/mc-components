import React from 'react'
import PropTypes from 'prop-types'

import Input from '../Input'
import FormGroup from '../FormGroup'


const parseError = (error) => {
  if (!Array.isArray(error)) {
    return error
  }
  return error.length > 0 ? error[0] : undefined
}

const InputField = ({
  className,
  help,
  input,
  label,
  maxlength,
  meta,
  optional,
  ...props
}) => {
  const error = meta.error || props.error
  const success = meta.success || props.success
  const touched = meta.touched || props.touched

  return (
    <FormGroup
      className={className}
      disabled={input.disabled}
      error={error}
      help={help}
      label={label}
      maxlength={maxlength}
      name={input.name}
      optional={optional}
      success={success}
      touched={touched}
      value={input.value}
    >
      <Input
        error={parseError(error)}
        success={success}
        touched={touched}
        {...input}
        {...props}
      />
    </FormGroup>
  )
}

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

InputField.propTypes = {
  className: PropTypes.string,
  input: INPUT_PROP_TYPE,
  meta: META_PROP_TYPE,
}

export default InputField

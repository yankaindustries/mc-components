import React from 'react'
import PropTypes from 'prop-types'

import Textarea from '../Textarea'
import FormGroup from '../FormGroup'


const TextareaField = ({
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
    >
      <Textarea
        error={error}
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
  error: PropTypes.string,
})

TextareaField.propTypes = {
  className: PropTypes.string,
  input: INPUT_PROP_TYPE,
  meta: META_PROP_TYPE,
}

export default TextareaField

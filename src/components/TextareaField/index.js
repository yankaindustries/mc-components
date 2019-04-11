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
      touched={touched}
      optional={optional}
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

TextareaField.propTypes = {
  className: PropTypes.string,
  input: INPUT_PROP_TYPE,
  meta: META_PROP_TYPE,
}

export default TextareaField

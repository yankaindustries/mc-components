import React from 'react'

import Textarea from '../Textarea'
import FormGroup from '../FormGroup'
import { parseMessage } from '../Forms/utils'
import { PROP_TYPE_REDUX_FORM_ELEMENT } from '../Forms/constants'


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
  const error = parseMessage(meta.error || props.error)
  const success = parseMessage(meta.success || props.success)
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
  ...PROP_TYPE_REDUX_FORM_ELEMENT,
}

export default TextareaField

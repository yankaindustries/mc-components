import React from 'react'

import Input from '../Input'
import FormGroup from '../FormGroup'
import { parseMessage } from '../Forms/utils'
import { PROP_TYPE_REDUX_FORM_ELEMENT } from '../Forms/constants'


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
      <Input
        error={error}
        success={success}
        touched={touched}
        {...input}
        {...props}
      />
    </FormGroup>
  )
}

InputField.propTypes = {
  ...PROP_TYPE_REDUX_FORM_ELEMENT,
}

export default InputField

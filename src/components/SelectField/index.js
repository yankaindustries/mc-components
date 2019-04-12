import React from 'react'

import Select from '../Select'
import FormGroup from '../FormGroup'
import { parseMessage } from '../Forms/utils'
import { PROP_TYPE_REDUX_FORM_ELEMENT } from '../Forms/constants'


const SelectField = ({
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
      success={success}
      touched={touched}
      optional={optional}
    >
      <Select
        error={error}
        touched={touched}
        {...input}
        {...props}
      />
    </FormGroup>
  )
}

SelectField.propTypes = {
  ...PROP_TYPE_REDUX_FORM_ELEMENT,
}

export default SelectField

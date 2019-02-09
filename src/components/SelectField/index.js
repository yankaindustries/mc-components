import React from 'react'
import PropTypes from 'prop-types'

import Select from '../Select'
import FormGroup from '../FormGroup'


const INPUT_PROP_TYPE = PropTypes.shape({
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
})

const META_PROP_TYPE = PropTypes.shape({
  error: PropTypes.string,
})


const SelectField = ({
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
    <Select
      error={error}
      touched={touched}
      {...input}
      {...props}
    />
  </FormGroup>

SelectField.propTypes = {
  input: INPUT_PROP_TYPE,
  meta: META_PROP_TYPE,
}

export default SelectField

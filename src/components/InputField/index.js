import React from 'react'
import PropTypes from 'prop-types'

import Input from '../Input'


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
  input,
  meta: {
    error,
    touched,
  },
  ...props
}) => (
  <Input
    error={parseError(error)}
    touched={touched}
    {...input}
    {...props}
  />
)

InputField.propTypes = {
  input: INPUT_PROP_TYPE,
  meta: META_PROP_TYPE,
}

export default InputField

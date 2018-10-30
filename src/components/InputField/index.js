import React from 'react'
import PropTypes from 'prop-types'

import Input from '../Input'


const INPUT_PROP_TYPE = PropTypes.shape({
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
})

const META_PROP_TYPE = PropTypes.shape({
  error: PropTypes.string,
})


const InputField = ({
  input,
  meta: {
    error,
    touched,
  },
  ...props
}) => (
  <Input
    error={error}
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

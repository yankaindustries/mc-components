import React from 'react'
import PropTypes from 'prop-types'

import Textarea from '../Textarea'


const INPUT_PROP_TYPE = PropTypes.shape({
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
})

const META_PROP_TYPE = PropTypes.shape({
  error: PropTypes.string,
})


const TextareaField = ({
  input,
  meta: {
    error,
    touched,
  },
  ...props
}) => (
  <Textarea
    error={error}
    touched={touched}
    {...input}
    {...props}
  />
)

TextareaField.propTypes = {
  input: INPUT_PROP_TYPE,
  meta: META_PROP_TYPE,
}

export default TextareaField

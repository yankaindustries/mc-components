import React from 'react'
import PropTypes from 'prop-types'

import Radio from '../Radio'


const INPUT_PROP_TYPE = PropTypes.shape({
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
})

const META_PROP_TYPE = PropTypes.shape({
  error: PropTypes.string,
})


const RadioField = ({
  input: {
    value,
    ...inputProps
  },
  ...props
}) =>
  <Radio
    {...inputProps}
    {...props}
    checked={value === props.option}
  />

RadioField.propTypes = {
  input: INPUT_PROP_TYPE,
  meta: META_PROP_TYPE,
  option: PropTypes.string,
}

export default RadioField

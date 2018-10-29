import React from 'react'
import PropTypes from 'prop-types'

import Checkbox from '../Checkbox'


const INPUT_PROP_TYPE = PropTypes.shape({
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
})

const META_PROP_TYPE = PropTypes.shape({
  error: PropTypes.string,
})


const CheckboxField = ({
  input: {
    value,
    ...input
  },
  ...props
}) => (
  <Checkbox
    checked={!!value}
    {...input}
    {...props}
  />
)

CheckboxField.propTypes = {
  input: INPUT_PROP_TYPE,
  meta: META_PROP_TYPE,
}

export default CheckboxField

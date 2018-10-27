import React from 'react'

import Checkbox from '../Checkbox'


const CheckboxField = ({
  input: {
    value,
    ...inputProps
  },
  ...props
}) => (
  <Checkbox
    checked={!!value}
    {...inputProps}
    {...props}
  />
)


export default CheckboxField

import React from 'react'

import Radio from '../Radio'


const RadioField = ({
  input: {
    value,
    ...inputProps
  },
  ...props
}) => (
  <Radio
    checked={value === props.option}
    {...inputProps}
    {...props}
  />
)


export default RadioField

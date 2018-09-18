import React from 'react'
import { Field } from 'redux-form'

import Radio from '../Radio'


const renderRadio = ({
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


const RadioField = props =>
  <Field
    component={renderRadio}
    {...props}
  />


export default RadioField

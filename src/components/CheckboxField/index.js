import React from 'react'
import { Field } from 'redux-form'

import Checkbox from '../Checkbox'


const renderCheckbox = ({
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


const CheckboxField = props => (
  <Field
    component={renderCheckbox}
    {...props}
  />
)


export default CheckboxField

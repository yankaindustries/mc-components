import React from 'react'

import Input from '../Input'


const InputField = ({
  input,
  meta: {
    error,
  },
  ...props
}) => (
  <Input
    {...input}
    error={error}
    {...props}
  />
)


export default InputField

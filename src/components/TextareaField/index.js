import React from 'react'

import Textarea from '../Textarea'


const TextareaField = ({
  input,
  meta: {
    error,
  },
  ...props
}) => (
  <Textarea
    {...input}
    error={error}
    {...props}
  />
)


export default TextareaField

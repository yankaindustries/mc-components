import React from 'react'

import { ICONS } from './constants'


const Icon = ({ kind, ...props }) => {
  const Component = ICONS[kind]

  return (
    <Component {...props} />
  )
}


export default Icon

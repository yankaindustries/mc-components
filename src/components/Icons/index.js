import React from 'react'

import { ICONS } from './icons'


const Icon = ({ kind, ...props }) => {
  const Component = ICONS[kind]

  return (
    <Component className='mc-icon' {...props} />
  )
}


export default Icon

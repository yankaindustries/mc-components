import React from 'react'
import PropTypes from 'prop-types'
import { ICONS } from './icons'

const Icon = ({ kind, ...props }) => {
  const Component = ICONS[kind]

  return (
    <Component className='mc-icon' {...props} />
  )
}

Icon.propTypes = {
  kind: PropTypes.string,
}

export default Icon

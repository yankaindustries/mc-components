import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { PROP_TYPE_CHILDREN } from '../constants'


const Badge = ({
  children,
  className,
  primary,
}) => {
  const classes = cn({
    [className]: className,
    'mc-badge': true,
    'mc-badge--primary': primary,
    'mc-text-x-small': true,
  })

  return (
    <span className={classes}>
      {children}
    </span>
  )
}

Badge.propTypes = {
  children: PROP_TYPE_CHILDREN,
  className: PropTypes.string,
  primary: PropTypes.bool,
}

export default Badge

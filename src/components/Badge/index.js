import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

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
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  className: PropTypes.string,
  primary: PropTypes.bool,
}

export default Badge

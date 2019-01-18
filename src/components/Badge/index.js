import React from 'react'
import { number, string, PropTypes } from 'prop-types'
import cn from 'classnames'

const Badge = ({ className, children }) => {
  const classNames = cn(
    'badge',
    { [className]: Boolean(className) },
  )

  return (
    <span className={classNames}>
      {children}
    </span>
  )
}

Badge.propTypes = {
  count: number.isRequired,
  className: string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

export default Badge

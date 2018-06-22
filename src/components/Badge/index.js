import React from 'react'
import { number, string } from 'prop-types'
import cn from 'classnames'

const Badge = ({ count, className }) => {
  const classNames = cn(
    'badge',
    { [className]: Boolean(className) },
  )

  return (
    <span className={classNames}>
      {count}
    </span>
  )
}

Badge.propTypes = {
  count: number.isRequired,
  className: string,
}

export default Badge

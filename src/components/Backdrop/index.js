import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { PROP_TYPE_CHILDREN } from '../constants'


const Backdrop = ({
  className,
  children,
  kind,
}) => {
  const classes = cn({
    'mc-backdrop': true,
    [`mc-backdrop--${kind}`]: kind,
    [className]: className,
  })

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

Backdrop.propTypes = {
  children: PROP_TYPE_CHILDREN,
  className: PropTypes.string,
  kind: PropTypes.oneOf([
    'dark',
    'extra-dark',
  ]),
}

export default Backdrop

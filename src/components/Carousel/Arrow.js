import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { PROP_TYPE_CHILDREN } from '../constants'


export const DIRECTION_PREV = 'prev'
export const DIRECTION_NEXT = 'next'


export default class Arrow extends PureComponent {
  static propTypes = {
    children: PROP_TYPE_CHILDREN,
    className: PropTypes.string,
    direction: PropTypes.oneOf([DIRECTION_PREV, DIRECTION_NEXT]).isRequired,
    location: PropTypes.node,
    onClick: PropTypes.func,
  }

  render () {
    const {
      children,
      className,
      direction,
      location,
      onClick,
    } = this.props

    if (!location) { return null }

    const classes = cn({
      [className]: className,
      'mc-carousel__arrow': true,
      [`mc-carousel__arrow--${direction}`]: direction,
    })

    return createPortal(
      <a
        className={classes}
        onClick={onClick}
        role={`scroll-${direction}`}
      >
        <span className='mc-carousel__arrow-text'>
          {children}
        </span>
      </a>,
      location,
    )
  }
}

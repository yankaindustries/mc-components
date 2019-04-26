import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'


const OVERLAY_TYPE_DIM = 'dim'
const OVERLAY_TYPE_GRADIENT_BOTTOM = 'gradient-bottom'
const OVERLAY_TYPE_GRADIENT_LEFT = 'gradient-left'
const OVERLAY_TYPE_SPOTLIGHT = 'spotlight'

const PROP_TYPE_OVERLAY_TYPE = PropTypes.oneOf([
  OVERLAY_TYPE_DIM,
  OVERLAY_TYPE_GRADIENT_BOTTOM,
  OVERLAY_TYPE_GRADIENT_LEFT,
  OVERLAY_TYPE_SPOTLIGHT,
])


export default class Overlay extends PureComponent {
  static propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    color: PropTypes.string,
    type: PROP_TYPE_OVERLAY_TYPE,
  }

  static defaultProps = {
    type: 'gradient-bottom',
    color: '0, 0, 0',
  }

  render () {
    const {
      children,
      className,
      color,
      type,
    } = this.props

    const classes = cn({
      'mc-overlay': true,
      [`mc-overlay--${type}`]: type,
      [className]: className,
    })

    let styles = {}

    if (type === OVERLAY_TYPE_DIM) {
      styles = {
        background: `rgba(${color}, 0.7)`,
      }
    }

    if (type === OVERLAY_TYPE_GRADIENT_BOTTOM) {
      styles = {
        background: `
          linear-gradient(
            to top,
            rgba(${color}, 1) 0,
            rgba(${color}, 0.6) 25%,
            rgba(${color}, 0) 45%
          ) center no-repeat
        `,
      }
    }

    if (type === OVERLAY_TYPE_GRADIENT_LEFT) {
      styles = {
        background: `
          linear-gradient(
            to right,
            rgba(${color}, 1) 12%,
            rgba(${color}, 0.9) 20%,
            rgba(${color}, 0) 45%
          ) center no-repeat
        `,
      }
    }

    return (
      <div className={classes} style={styles}>
        {children}
      </div>
    )
  }
}

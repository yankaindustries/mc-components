import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { PROP_TYPE_CHILDREN } from '../constants'


export default class TileOverlay extends PureComponent {
  static propTypes = {
    children: PROP_TYPE_CHILDREN,
    className: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.oneOf([
      'gradient-bottom',
      'gradient-left',
      'spotlight',
      'solid',
    ]),
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

    const classes = [
      'mc-tile__component',
      'mc-tile-overlay',
      `mc-tile-overlay--${type}`,
      className || '',
    ].join(' ')

    let styles = {}

    if (type === 'gradient-bottom') {
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

    if (type === 'gradient-left') {
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

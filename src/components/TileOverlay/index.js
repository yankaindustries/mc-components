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
    color: null,
  }

  getStyles = () => {
    const { color, type } = this.props

    if (!color) return {}

    if (type === 'solid') {
      return {
        background: `rgba(${color}, 0.8)`,
      }
    }

    if (type === 'gradient-bottom') {
      return {
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
      return {
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

    if (type === 'spotlight') {
      return {
        background: `
          radial-gradient(
            farthest-side at center top,
            rgba(${color}, 0) 33%,
            rgba(${color}, 1) 100%
          ),
          linear-gradient(
            to right,
            rgba(${color}, 1) 0%,
            rgba(${color}, 0) 10%
          ),
          linear-gradient(
            to left,
            rgba(${color}, 1) 0%,
            rgba(${color}, 0) 10%
          );
        `,
      }
    }

    return {}
  }

  render () {
    const {
      children,
      className,
      type,
    } = this.props

    const classes = [
      'mc-tile__component',
      'mc-tile-overlay',
      `mc-tile-overlay--${type}`,
      className || '',
    ].join(' ')

    const styles = this.getStyles()

    return (
      <div className={classes} style={styles}>
        {children}
      </div>
    )
  }
}

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class TileOverlay extends PureComponent {
  static propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.oneOf([
      'gradient-bottom',
      'gradient-left',
      'offset-spotlight',
      'spotlight',
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

    let styles = ''

    if (type === 'gradient-bottom') {
      styles = {
        background: `
          linear-gradient(
            to top,
            rgba(${color}, 1) 0,
            rgba(${color}, 0.6) 25%,
            rgba(${color}, 0) 45%
          )
        `,
      }
    }

    if (type === 'gradient-left') {
      styles = {
        background: `
          linear-gradient(
            to right,
            rgba(${color}, 1) 0,
            rgba(${color}, 0.6) 25%,
            rgba(${color}, 0) 45%
          )
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

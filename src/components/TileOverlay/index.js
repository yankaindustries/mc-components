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

    // ,

    const styles = {
      background: `
        linear-gradient(
          to top,
            rgba(${color}, 0.9) 0,
            rgba(${color}, 0.6) 25%,
            rgba(${color}, 0) 45%
          )
          center no-repeat`,
    }

    console.log(color)
    console.log(styles)

    return (
      <div className={classes} style={styles}>
        {children}
      </div>
    )
  }
}

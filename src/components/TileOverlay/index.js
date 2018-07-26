import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class TileOverlay extends PureComponent {
  static propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    type: PropTypes.oneOf(['gradient-bottom']),
  }

  static defaultProps = {
    type: 'gradient-bottom',
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

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}

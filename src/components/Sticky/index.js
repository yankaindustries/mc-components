import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Sticky extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    className: PropTypes.string,
    position: PropTypes.oneOf(['top', 'bottom']),
    offset: PropTypes.number,
  }

  render () {
    const {
      children,
      className,
      position,
      offset,
    } = this.props

    const positionStyle = {
      [position]: `${offset || 0}px`,
    }

    const classes = [
      className,
      'mc-sticky',
    ].join(' ')

    return (
      <div className={classes} style={positionStyle}>
        {children}
      </div>
    )
  }
}

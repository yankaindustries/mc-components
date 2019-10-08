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
  }

  render () {
    const {
      children,
      className,
      position,
    } = this.props

    const classes = [
      className,
      'mc-sticky',
      `mc-sticky--${position}`,
    ].join(' ')

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}

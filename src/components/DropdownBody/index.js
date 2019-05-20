import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'


export default class Dropdownbody extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render () {
    const {
      children,
      className,
      ...restProps
    } = this.props

    const classes = cn({
      'mc-dropdown__body': true,
      [className]: className,
    })

    return (
      <div className={classes} {...restProps}>
        {children}
      </div>
    )
  }
}

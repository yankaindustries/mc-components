import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class DropdownItem extends PureComponent {
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

    return (
      <div className='mc-dropdown__item' {...restProps}>
        {children}
      </div>
    )
  }
}

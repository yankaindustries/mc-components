import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Consumer } from '../Dropdown'


export default class DropdownToggle extends PureComponent {
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
      <Consumer>
        {({ toggle }) =>
          <div
            className='mc-dropdown__toggle'
            {...restProps}
            onClick={toggle}
          >
            {children}
          </div>
        }
      </Consumer>
    )
  }
}

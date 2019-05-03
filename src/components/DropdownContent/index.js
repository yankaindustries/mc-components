import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Consumer } from '../Dropdown'


export default class DropdownContent extends PureComponent {
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
        {({ show }) =>
          show &&
            <div className='mc-dropdown__Content' {...restProps}>
              {children}
            </div>
        }
      </Consumer>
    )
  }
}

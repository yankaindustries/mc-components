import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Consumer } from '../Dropdown'
import { renderChildren } from '../helpers'


export default class DropdownToggle extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  render () {
    const { children } = this.props

    return (
      <Consumer>
        {({ toggle, toggleRef }) =>
          <div
            className='mc-dropdown__toggle'
            ref={toggleRef}
          >
            {renderChildren(children, { onClick: toggle })}
          </div>
        }
      </Consumer>
    )
  }
}

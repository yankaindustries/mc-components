import React, { PureComponent } from 'react'

import { Consumer } from '../Dropdown'
import { PROP_TYPE_CHILDREN } from '../constants'
import { renderChildren } from '../helpers'


export default class DropdownToggle extends PureComponent {
  static propTypes = {
    children: PROP_TYPE_CHILDREN,
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

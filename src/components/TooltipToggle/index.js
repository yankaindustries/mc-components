import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Consumer } from '../Tooltip'
import { renderChildren } from '../helpers'


export default class TooltipToggle extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  render () {
    const { children } = this.props

    return (
      <Consumer>
        {({ toggle, toggleRef }) =>
          <div
            className='mc-tooltip__toggle'
            ref={toggleRef}
          >
            {renderChildren(children, {
              onMouseOver: toggle,
              onMouseOut: toggle,
            })}
          </div>
        }
      </Consumer>
    )
  }
}

import React, { PureComponent } from 'react'

import { Consumer } from '../Tooltip'
import { PROP_TYPE_CHILDREN } from '../constants'
import { renderChildren } from '../helpers'


export default class TooltipToggle extends PureComponent {
  static propTypes = {
    children: PROP_TYPE_CHILDREN,
  }

  render () {
    const { children } = this.props

    return (
      <Consumer>
        {({ toggle, toggleRef }) =>
          renderChildren(children, {
            onMouseOver: toggle,
            onMouseOut: toggle,
            ref: toggleRef,
          })
        }
      </Consumer>
    )
  }
}

import React, { PureComponent } from 'react'

import { Consumer } from '../Tooltip'
import TooltipContentControlled from '../TooltipContentControlled'


export default class TooltipContent extends PureComponent {
  render () {
    return (
      <Consumer>
        {({ show }) =>
          <TooltipContentControlled {...this.props} show={show} />
        }
      </Consumer>
    )
  }
}

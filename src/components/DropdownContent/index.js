import React, { PureComponent } from 'react'

import { Consumer } from '../Dropdown'
import DropdownContentControlled from '../DropdownContentControlled'


export default class DropdownContent extends PureComponent {
  render () {
    return (
      <Consumer>
        {props => <DropdownContentControlled {...this.props} {...props} />}
      </Consumer>
    )
  }
}

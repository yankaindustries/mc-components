import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Consumer } from '../Dropdown'
import { renderChildren } from '../helpers'


export default class DropdownToggle extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  render () {
    const {
      children,
    } = this.props

    return (
      <Consumer>
        {({ toggle }) => renderChildren(children, { onClick: toggle })}
      </Consumer>
    )
  }
}

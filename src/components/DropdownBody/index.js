import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import cn from 'classnames'


import { Consumer } from '../Dropdown'


export default class DropdownBody extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  renderDropdown = () => {
    const {
      children,
      className,
      ...restProps
    } = this.props

    const classes = show => cn({
      'mc-dropdown__body': true,
      'mc-dropdown__body--active': show,
      [className]: className,
    })

    return (
      <Consumer>
        {({ show }) =>
          <div className={classes(show)} {...restProps}>
            {children}
          </div>
        }
      </Consumer>
    )
  }

  render () {
    return createPortal(
      this.renderDropdown(),
      document.body,
    )
  }
}

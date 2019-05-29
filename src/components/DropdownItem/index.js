import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Consumer } from '../Dropdown'


export default class DropdownItem extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  handleClick = ({ toggle }) => (event) => {
    if (this.props.onClick) {
      this.props.onClick(event)
    }

    toggle(event)
  }

  render () {
    const {
      children,
      className,
      ...props
    } = this.props

    const classes = cn({
      'mc-dropdown__item': true,
      [className]: className,
    })

    return (
      <Consumer>
        {dropdownProps =>
          <div
            className={classes}
            {...props}
            onClick={this.handleClick(dropdownProps)}
          >
            {children}
          </div>
        }
      </Consumer>
    )
  }
}

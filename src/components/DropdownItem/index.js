import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Consumer } from '../Dropdown'
import { PROP_TYPE_CHILDREN } from '../constants'


export default class DropdownItem extends PureComponent {
  static propTypes = {
    children: PROP_TYPE_CHILDREN,
    className: PropTypes.string,
    closeOnClick: PropTypes.bool,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    onClick: () => {},
  }

  handleClick = toggle => (event) => {
    if (this.props.closeOnClick) {
      toggle(event)
    }

    this.props.onClick(event)
  }

  render () {
    const {
      children,
      className,
      closeOnClick,
      onClick,
      ...props
    } = this.props

    const classes = cn({
      'mc-dropdown__item': true,
      [className]: className,
    })

    return (
      <Consumer>
        {({ toggle }) =>
          <div
            className={classes}
            onClick={this.handleClick(toggle)}
            {...props}
          >
            {children}
          </div>
        }
      </Consumer>
    )
  }
}

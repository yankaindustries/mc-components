import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Consumer } from '../Dropdown'


export default class DropdownItem extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    onClick: () => {},
  }

  handleClick = toggle => (event) => {
    toggle(event)
    this.props.onClick(event)
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
        {({ toggle }) =>
          <div
            className={classes}
            {...props}
            onClick={this.handleClick(toggle)}
          >
            {children}
          </div>
        }
      </Consumer>
    )
  }
}

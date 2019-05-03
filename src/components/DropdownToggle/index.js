import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Consumer } from '../Dropdown'


export default class DropdownToggle extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render () {
    const {
      children,
      className,
      ...restProps
    } = this.props

    const classes = cn({
      'mc-dropdown__toggle': true,
      [className]: className,
    })

    return (
      <Consumer>
        {({ toggle }) =>
          <div
            className={classes}
            {...restProps}
            onClick={toggle}
          >
            {children}
          </div>
        }
      </Consumer>
    )
  }
}

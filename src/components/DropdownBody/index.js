import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Consumer } from '../Dropdown'
import ClickOutside from '../ClickOutside'


export default class DropdownBody extends PureComponent {
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
      'mc-dropdown__body': true,
      [className]: className,
    })

    return (
      <Consumer>
        {({ show, toggle }) =>
          <ClickOutside onClickOutside={show ? toggle : () => {}}>
            <div className={classes} {...restProps}>
              {children}
            </div>
          </ClickOutside>
        }
      </Consumer>
    )
  }
}

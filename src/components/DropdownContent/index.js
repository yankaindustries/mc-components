import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Consumer } from '../Dropdown'


export default class DropdownContent extends PureComponent {
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
      'mc-dropdown__content mc-mt-1 mc-py-1': true,
      [className]: className,
    })

    return (
      <Consumer>
        {({ show }) =>
          show &&
            <div className={classes} {...restProps}>
              {children}
            </div>
        }
      </Consumer>
    )
  }
}

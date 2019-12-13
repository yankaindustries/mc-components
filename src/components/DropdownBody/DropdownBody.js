import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { PROP_TYPE_CHILDREN } from '../constants'


export default class DropdownBody extends PureComponent {
  static propTypes = {
    children: PROP_TYPE_CHILDREN,
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
      <div className={classes} {...restProps}>
        {children}
      </div>
    )
  }
}

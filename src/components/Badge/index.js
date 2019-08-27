import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { PROP_TYPE_CHILDREN } from '../constants'

export default class Badge extends PureComponent {
  static propTypes = {
    children: PROP_TYPE_CHILDREN,
    className: PropTypes.string,
    kind: PropTypes.oneOf([
      'primary',
      'secondary',
      'tertiary',
    ]),
  }

  static defaultProps = {
    kind: 'default',
  }

  render () {
    const {
      children,
      className,
      kind,
      ...props
    } = this.props

    const classNames = cn({
      'mc-badge mc-text-h8': true,
      [`mc-badge--${kind}`]: kind,
      [className]: className,
    })

    return (
      <div className={classNames} {...props}>
        {children}
      </div>
    )
  }
}

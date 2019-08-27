import React, { PureComponent } from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'

export default class Badge extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
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

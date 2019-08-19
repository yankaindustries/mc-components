import React, { Fragment, PureComponent } from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'

export default class Badge extends PureComponent {
  static propTypes = {
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
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
    as: 'badge',
    kind: 'primary',
  }

  element = React.createRef()

  render () {
    const {
      as,
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

    return React.createElement(
      as,
      {
        className: classNames,
        ref: this.element,
        ...props,
      },
      <Fragment>
        { children }
      </Fragment>,
    )
  }
}

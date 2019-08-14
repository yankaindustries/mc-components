import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import cn from 'classnames'
import PropTypes from 'prop-types'

import { PROP_TYPE_CHILDREN } from '../constants'


export default class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
    className: PropTypes.string,
    kind: PropTypes.oneOf([
      'default',
      'success',
      'error',
    ]),
    show: PropTypes.bool,
  }

  static defaultProps = {
    kind: 'default',
  }

  render () {
    const {
      children,
      className,
      kind,
      show,
      ...props
    } = this.props

    const classNames = cn({
      'mc-toast': true,
      'mc-toast--show': show,
      [`mc-toast--${kind}`]: kind,
      [className]: className,
    })

    return createPortal(
      <div className={classNames}>
        {children}
      </div>,
      document.body,
    )
  }
}

import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import cn from 'classnames'
import PropTypes from 'prop-types'

import { PROP_TYPE_CHILDREN } from '../constants'


// TODO JJ: figure out if this violates best practices
const toasterEl = document.createElement('div')
toasterEl.className = 'mc-toaster'
document.body.appendChild(toasterEl)


export default class Button extends PureComponent {
  static propTypes = {
    children: PROP_TYPE_CHILDREN,
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
      'mc-toast mc-mt-2 mc-py-1 mc-px-3': true,
      'mc-toast--show': show,
      [`mc-toast--${kind}`]: kind,
      [className]: className,
    })

    return createPortal(
      <div className='container'>
        <div className={classNames} {...props}>
          <div className='mc-toast__content'>
            {children}
          </div>
        </div>
      </div>,
      toasterEl,
    )
  }
}

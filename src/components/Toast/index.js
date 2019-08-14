import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import cn from 'classnames'
import PropTypes from 'prop-types'

import { PROP_TYPE_CHILDREN } from '../constants'


// TODO JJ: figure out if this violates best practices
const existingToaster = document.querySelectorAll('mc-toaster')
let toaster

if (existingToaster.length) {
  toaster = existingToaster[0]
} else {
  toaster = document.createElement('div')
  toaster.className = 'mc-toaster'
  document.body.appendChild(toaster)
}



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

  state = {
    hide: false,
  }

  startCountdown = () =>
    window.setTimeout(
      () => this.setState({ hide: true }),
      4000,
    )

  componentDidMount () {
    if (this.props.show) {
      this.startCountdown()
    }
  }

  componentWillReceiveProps (newProps) {
    if (newProps.show && newProps.show !== this.props.show) {
      this.startCountdown()
    }
  }

  render () {
    const {
      children,
      className,
      kind,
      show,
      ...props
    } = this.props

    const {
      hide,
    } = this.state

    const classNames = cn({
      'mc-toast mc-mt-2 mc-py-1 mc-px-3': true,
      'mc-toast--show': show && !hide,
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
      toaster,
    )
  }
}

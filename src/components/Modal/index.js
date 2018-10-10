import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import cn from 'classnames'

import IconClose from '../Icons/Close'


export default class Modal extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    className: PropTypes.string,
    show: PropTypes.bool,

    onCloseClick: PropTypes.func,
  }

  onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.close()
    }
  }

  close = () => {
    const {
      onCloseClick,
    } = this.props

    if (onCloseClick) {
      onCloseClick()
    }
  }

  render () {
    const {
      children,
      className,
      show,
    } = this.props

    if (!show) {
      return null
    }

    const classes = cn({
      [className]: className,
      'mc-modal': true,
    })

    return createPortal(
      <div
        className={classes}
        onKeyDown={this.onKeyDown}
      >
        <a
          className='mc-modal__backdrop'
          onClick={this.close}
        >
          <IconClose className='mc-modal__close' />
        </a>

        <div className='mc-modal__container'>
          {children}
        </div>
      </div>,
      document.body,
    )
  }
}

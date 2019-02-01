import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import cn from 'classnames'

import IconClose from '../Icons/Close'


const ModalContext = React.createContext('modal')

export const {
  Provider,
  Consumer,
} = ModalContext

export default class Modal extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    className: PropTypes.string,
    show: PropTypes.bool,

    onCloseClick: PropTypes.func,
  }

  componentDidUpdate (prevProps) {
    const { show } = this.props
    const body = document.getElementsByTagName('body')[0]
    if (!prevProps.show && show) {
      body.classList.add('mc-modal__body--open')
    } else if (prevProps.show && !show) {
      body.classList.remove('mc-modal__body--open')
    }
  }

  onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.close('escape')(event)
    }
  }

  close = source => (event) => {
    const {
      onCloseClick,
    } = this.props

    if (onCloseClick) {
      onCloseClick(source, event)
    }
  }

  render () {
    const {
      children,
      className,
      show,

      onCloseClick,
    } = this.props

    if (!show) {
      return null
    }

    const classes = cn({
      [className]: className,
      'mc-modal': true,
    })

    return createPortal(
      <Provider value={{ close: this.close }}>
        <div
          className={classes}
          onKeyDown={this.onKeyDown}
          ref={this.container}
        >
          <div className='mc-modal__backdrop' />

          {onCloseClick &&
            <div
              className='mc-modal__close'
              onClick={this.close('close')}
            >
              <IconClose />
            </div>
          }

          <div className='mc-modal__content-container'>
            <div className='mc-modal__content-container-inner'>
              {children}
            </div>
          </div>
        </div>
      </Provider>,
      document.body,
    )
  }
}

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
    appendToBody: PropTypes.bool,
    onCloseClick: PropTypes.func,
  }

  static defaultProps = {
    appendToBody: true,
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

  renderModal = () => {
    const {
      children,
      className,
      onCloseClick,
    } = this.props

    return (
      <Provider value={{ close: this.close }}>
        <div
          className={cn(className, 'mc-modal')}
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
      </Provider>
    )
  }

  render () {
    const {
      show,
      appendToBody,
    } = this.props

    if (!show) {
      return null
    }

    return appendToBody ? createPortal(
      this.renderModal(),
      document.body,
    ) : this.renderModal()
  }
}

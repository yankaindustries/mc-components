import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import cn from 'classnames'


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
    closeButton: PropTypes.bool,
    show: PropTypes.bool,
    appendToBody: PropTypes.bool,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    appendToBody: true,
  }

  componentDidUpdate (prevProps) {
    const { show } = this.props

    if (!prevProps.show && show) {
      document.body.classList.add('mc-modal__body--open')
    } else if (prevProps.show && !show) {
      document.body.classList.remove('mc-modal__body--open')
    }
  }

  componentWillUnmount () {
    document.body.classList.remove('mc-modal__body--open')
  }

  onKeyDown = (event) => {
    if (event.keyCode === 27) {
      this.close('escape')(event)
    }
  }

  close = source => (event) => {
    const {
      onClose,
    } = this.props

    event.preventDefault()
    event.stopPropagation()

    if (onClose) {
      onClose(source, event)
    }
  }

  renderModal = () => {
    const {
      children,
      className,
    } = this.props

    return (
      <Provider value={{ close: this.close }}>
        <div
          className={cn(className, 'mc-modal')}
          onKeyDown={this.onKeyDown}
          ref={this.container}
        >
          <div className='mc-modal__backdrop' />
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

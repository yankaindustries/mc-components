import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Backdrop from '../Backdrop'
import { PROP_TYPE_CHILDREN } from '../constants'


const ModalContext = React.createContext('modal')

export const {
  Provider,
  Consumer,
} = ModalContext

export default class Modal extends PureComponent {
  static propTypes = {
    backdrop: PropTypes.oneOf([
      'dark',
      'extra-dark',
    ]),
    children: PROP_TYPE_CHILDREN.isRequired,
    className: PropTypes.string,
    closeButton: PropTypes.bool,
    show: PropTypes.bool,
    size: PropTypes.oneOf([
      'small',
      'medium',
      'large',
      'full',
    ]),
    appendToBody: PropTypes.bool,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    appendToBody: true,
    backdrop: 'dark',
    size: 'full',
  }

  componentDidMount () {
    const { show } = this.props

    if (show) {
      document.body.classList.add('mc-modal__body--open')
    }
  }

  componentDidUpdate (prevProps) {
    const { show } = this.props
    const rootHtml = document.getElementsByTagName('html')[0]

    if (!prevProps.show && show) {
      rootHtml.classList.add('mc-modal__html--open')
    } else if (prevProps.show && !show) {
      rootHtml.classList.remove('mc-modal__html--open')
    }

    if (show) {
      const elem = this.container.current
      window.setTimeout(() => {
        elem.scrollTop = 0
      }, 0)
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

  container = React.createRef()

  renderModal = () => {
    const {
      backdrop,
      children,
      className,
      size,
    } = this.props

    const classes = cn({
      'mc-modal': true,
      [`mc-modal--${size}`]: size,
      [className]: className,
    })

    return (
      <Provider value={{ close: this.close }}>
        <div
          className={classes}
          onKeyDown={this.onKeyDown}
          ref={this.container}
        >
          <Backdrop
            className='mc-modal__backdrop'
            kind={backdrop}
          />
          <div className='mc-modal__viewport'>
            <div className='container'>
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

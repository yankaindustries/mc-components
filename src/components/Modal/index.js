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
    disableFullscreen: PropTypes.bool,
  }

  static defaultProps = {
    appendToBody: true,
    backdrop: 'dark',
    size: 'full',
    disableFullscreen: false,
  }

  state = {
    fullscreenElement: undefined,
  }

  componentDidMount () {
    const { show } = this.props

    if (show) {
      document.body.classList.add('mc-modal__body--open')
    }

    this.checkFullscreenState()
    this.bindFullscreenChange()
  }

  componentWillUnmount () {
    document.body.classList.remove('mc-modal__body--open')
    this.unbindFullscreenChange()
  }

  bindFullscreenChange () {
    if (this.props.disableFullscreen) return

    document.addEventListener('fullscreenchange', this.checkFullscreenState)
    document.addEventListener('mozfullscreenchange', this.checkFullscreenState)
    document.addEventListener('webkitfullscreenchange', this.checkFullscreenState)
    document.addEventListener('msfullscreenchange', this.checkFullscreenState)
  }

  unbindFullscreenChange () {
    if (this.props.disableFullscreen) return

    document.removeEventListener('fullscreenchange', this.checkFullscreenState)
    document.removeEventListener('mozfullscreenchange', this.checkFullscreenState)
    document.removeEventListener('webkitfullscreenchange', this.checkFullscreenState)
    document.removeEventListener('msfullscreenchange', this.checkFullscreenState)
  }

  checkFullscreenState = () => {
    if (this.props.disableFullscreen) return

    // TODO: probably make this FS check a component
    const fullscreenElement = document.fullscreenElement
      || document.mozFullScreenElement
      || document.webkitFullscreenElement

    this.setState({ fullscreenElement })
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
    const { show, appendToBody } = this.props
    const { fullscreenElement } = this.state

    if (!show) {
      return null
    }

    // possibly attach modal to FS element in 'appendToBody' mode
    return appendToBody ? createPortal(
      this.renderModal(),
      fullscreenElement || document.body,
    ) : this.renderModal()
  }
}

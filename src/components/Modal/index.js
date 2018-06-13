import React, { Component } from 'react'
import { bool, func, node, string, oneOfType, arrayOf } from 'prop-types'
import cn from 'classnames'

import ModalPortal from '../ModalPortal'
import ModalHeader from '../ModalHeader'
import CloseIcon from '../icons/CloseIcon'
import ClickOutside from '../ClickOutside'
import RoundedBox from '../RoundedBox'

export default class Modal extends Component {
  static propTypes = {
    isOpen: bool.isRequired,
    onClose: func.isRequired,
    children: oneOfType([arrayOf(node), node]).isRequired,
    shouldCloseOnEsc: bool,
    shouldCloseOnClickOutside: bool,
    className: string,
    header: string,
    subheader: string,
    HeaderComponent: func,
  }

  static defaultProps = {
    shouldCloseOnEsc: true,
    shouldCloseOnClickOutside: true,
    className: '',
    HeaderComponent: ModalHeader,
  }

  container = React.createRef();

  onClickOutside = () => {
    const { onClose, shouldCloseOnClickOutside } = this.props
    if (shouldCloseOnClickOutside) {
      onClose()
    }
  }

  onPressEsc = (event) => {
    const { onClose, shouldCloseOnEsc } = this.props
    const escKey = 27
    const escKeyWasPressed = event.keyCode === escKey
    if (shouldCloseOnEsc && escKeyWasPressed) {
      onClose()
    }
  }

  componentDidMount () {
    document.addEventListener('keydown', this.onPressEsc)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.onPressEsc)
  }

  render () {
    const {
      isOpen,
      onClose,
      children,
      className,
      HeaderComponent,
      ...props
    } = this.props

    const classNames = cn(
      'modal__container',
      { [className]: Boolean(className) },
    )

    if (!isOpen) {
      return false
    }

    return (
      <ModalPortal>
        <CloseIcon className='modal__close-icon' onClick={onClose} />
        <ClickOutside
          divRef={this.container}
          onClickOutside={this.onClickOutside}
        >
          <div ref={this.container} className={classNames}>
            <RoundedBox
              className='modal__rounded-box'
              HeaderComponent={HeaderComponent}
              {...props}
            >
              <CloseIcon className='modal__inner-close-icon' onClick={onClose} />
              {children}
            </RoundedBox>
          </div>
        </ClickOutside>
      </ModalPortal>
    )
  }
}

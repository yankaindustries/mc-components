import React, { Component } from 'react'
import { bool, func, node, string, oneOfType, arrayOf, oneOf } from 'prop-types'
import cn from 'classnames'

import ModalPortal from '../ModalPortal'
import ModalHeader from '../ModalHeader'
import ClickOutside from '../ClickOutside'
import RoundedBox from '../RoundedBox'

import Close from '../../assets/icons/close.svg'

export default class Modal extends Component {
  static CLOSE_POSITIONS = {
    INSIDE: 'inside-right',
    INSIDE_RIGHT: 'inside-right',
    INSIDE_LEFT: 'inside-left',
    OUTSIDE: 'outside-right',
    OUTSIDE_RIGHT: 'outside-right',
    OUTSIDE_LEFT: 'outside-left',
    NONE: 'none',
  }

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
    closeButtonPosition: oneOf([
      'inside-right',
      'inside-left',
      'outside-right',
      'outside-left',
      'none',
    ]),
    mountEntry: string,
  }

  static defaultProps = {
    shouldCloseOnEsc: true,
    shouldCloseOnClickOutside: true,
    className: '',
    HeaderComponent: ModalHeader,
    closeButtonPosition: 'outside-right',
    mountEntry: 'modal-root',
  }

  componentDidMount () {
    document.addEventListener('keydown', this.onPressEsc)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.onPressEsc)
  }

  onPressEsc = (event) => {
    const { onClose, shouldCloseOnEsc } = this.props
    const escKey = 27
    const escKeyWasPressed = event.keyCode === escKey
    if (shouldCloseOnEsc && escKeyWasPressed) {
      onClose()
    }
  }

  onClickOutside = () => {
    const { onClose, shouldCloseOnClickOutside } = this.props
    if (shouldCloseOnClickOutside) {
      onClose()
    }
  }

  container = React.createRef();

  render () {
    const {
      isOpen,
      onClose,
      children,
      className,
      HeaderComponent,
      closeButtonPosition,
      mountEntry,
      ...props
    } = this.props
    const cnRoot = 'mc-components-modal'

    const classNames = cn(
      `${cnRoot}__container`,
      { [className]: Boolean(className) },
    )
    const cnClose = cn(
      `${cnRoot}__close-icon`,
      `${cnRoot}__close-icon--${closeButtonPosition}`,
    )

    if (!isOpen) {
      return false
    }

    return (
      <ModalPortal mountEntry={mountEntry}>
        { /outside/.test(closeButtonPosition) &&
          <Close
            className={cnClose}
            onClick={onClose}
          /> }
        <ClickOutside
          divRef={this.container}
          onClickOutside={this.onClickOutside}
        >
          <div ref={this.container} className={classNames}>
            <RoundedBox
              className={`${cnRoot}__rounded-box`}
              HeaderComponent={HeaderComponent}
              {...props}
            >
              <Close
                className={cn([
                  `${cnRoot}__inner-close-icon`,
                  `${cnRoot}__inner-close-icon--${closeButtonPosition}`,
                  {
                    [`${cnRoot}__inner-close-icon--desktop-active`]: /inside/.test(closeButtonPosition),
                  },
                ])}
                color='#000'
                onClick={onClose}
              />
              {children}
            </RoundedBox>
          </div>
        </ClickOutside>
      </ModalPortal>
    )
  }
}

import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import Modal from '../Modal'

// Modal Handler
class ModalHandler extends Component {
  state = { isOpen: false }
  closeModal = () => this.setState({ isOpen: false })
  openModal = () => this.setState({ isOpen: true })

  render () {
    const { isOpen } = this.state

    return (
      <div style={{ height: '200px' }}>
        <div id='modal-root' />
        <button
          onClick={this.openModal}
        >
          Open Modal
        </button>
        <Modal isOpen={isOpen} onClose={this.closeModal}>
          <p>Content</p>
        </Modal>
      </div>
    )
  }
}


storiesOf('components|Modals', module)
  .add('ModalHandler', withProps(Modal)(() =>
    <ModalHandler />,
  ))
  .add('ModalHeader', withProps(Modal)(() =>
    <div style={{ height: '200px' }}>
      <div id='modal-root' />
      <Modal
        isOpen
        onClose={() => {}}
        header='Header'
        subheader='Subheader'
      >
        <p style={{ height: '200px' }}>Content</p>
      </Modal>
    </div>,
  ))
  .add('with close button inside', withProps(Modal)(() =>
    <div style={{ height: '200px' }}>
      <div id='modal-root' />
      <Modal
        isOpen
        onClose={() => {}}
        closeButtonPosition={Modal.CLOSE_POSITIONS.INSIDE_RIGHT}
      >
      </Modal>
    </div>,
  ))
  .add('with custom mountEntry', withProps(Modal)(() =>
    <div style={{ height: '200px' }}>
      <div id='modal-root-custom' />
      <Modal
        isOpen
        onClose={() => {}}
        mountEntry='modal-root-custom'
      >
      </Modal>
    </div>,
  ))

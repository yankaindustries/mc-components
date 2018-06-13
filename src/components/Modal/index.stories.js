import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

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

const infoProps = {
  source: true,
  inline: true,
  header: false,
  propTables: [Modal],
  propTablesExclude: [ModalHandler],
}

storiesOf('Modal', module)
  .add('default',
    withInfo({
      ...infoProps,
    })(() =>
      <ModalHandler />,
    ),
  )
  .add('with header',
    withInfo({
      ...infoProps,
    })(() =>
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
    ),
  )

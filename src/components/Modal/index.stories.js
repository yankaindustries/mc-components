import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import CodeExample from '../../utils/CodeExample'

import Modal from '../Modal'
import ModalContent from '../ModalContent'
import Button from '../Button'
import VideoPlayer from '../VideoPlayer'


class ModalExample extends Component {
  state = {
    large: false,
    small: false,
    full: false,
  }

  showModal = name => () => {
    this.setState({
      [name]: true,
    })
  }

  hideModal = name => () => {
    this.setState({
      [name]: false,
    })
  }

  render () {
    return (
      <div className='container'>
        <div className='example__heading'>
          <h1 className='mc-text-h1'>
            Modal
          </h1>
          <p className='mc-text--muted'>
            A flexible controlled modal.
          </p>
        </div>

        <div className='example__section'>
          <CodeExample>
            <div className='row'>
              <div className='col-sm-auto'>
                <Button onClick={this.showModal('small')}>
                  Small
                </Button>

                <Modal
                  onCloseClick={this.hideModal('small')}
                  show={this.state.small}
                >
                  <div className='container'>
                    <div className='row'>
                      <div className='col-sm-6 offset-sm-3'>
                        <ModalContent>
                          <div className='rounded-box'>
                            <p>Content</p>
                          </div>
                        </ModalContent>
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>

              <div className='col-sm-auto'>
                <Button onClick={this.showModal('large')}>
                  Large
                </Button>

                <Modal
                  onCloseClick={this.hideModal('large')}
                  show={this.state.large}
                >
                  <div className='container'>
                    <ModalContent>
                      <div className='rounded-box'>
                        <p>Content</p>
                      </div>
                    </ModalContent>
                  </div>
                </Modal>
              </div>

              <div className='col-sm-auto'>
                <Button onClick={this.showModal('full')}>
                  Full
                </Button>

                <Modal
                  onCloseClick={this.hideModal('full')}
                  show={this.state.full}
                >
                  <div className='container-fluid'>
                    <ModalContent>
                      <VideoPlayer hasAutoplay />
                    </ModalContent>
                  </div>
                </Modal>
              </div>
            </div>
          </CodeExample>
        </div>
      </div>
    )
  }
}


storiesOf('components|Modal', module)
  .add('Summary', withProps(Modal)(() =>
    <ModalExample />,
  ))

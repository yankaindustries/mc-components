import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import CodeExample from '../../utils/CodeExample'

import Modal from '../Modal'
import ModalContent from '../ModalContent'
import ModalClose from '../ModalClose'
import InputField from '../InputField'
import Button from '../Button'
import Background from '../Background'
import VideoPlayer from '../VideoPlayer'


class ModalExample extends Component {
  state = {
    dialog: false,
    cinema: false,
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
            <div className='mc-text--center'>
              <Button
                onClick={this.showModal('dialog')}
                secondary
              >
                Open Dialog
              </Button>
            </div>

            <Modal
              onClose={this.hideModal('dialog')}
              show={this.state.dialog}
            >
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2'>
                    <ModalContent className='mc-invert'>
                      <ModalClose />
                      <Background
                        color='light'
                        className='mc-p-6'
                      >
                        <h6 className={`
                          mc-text-h6
                          mc-text--airy
                          mc-text--center
                          mc-text--hinted
                          mc-mb-4
                        `}>
                          Register
                        </h6>

                        <InputField
                          name='email'
                          label='Email'
                          placeholder='john@doe.com'
                          className='mc-mb-4'
                          input={{}}
                          meta={{}}
                          required
                        />

                        <InputField
                          name='password'
                          label='Password'
                          placeholder='••••••••'
                          className='mc-mb-4'
                          input={{}}
                          meta={{}}
                          required
                        />

                        <p className={`
                          mc-text-x-small
                          mc-text--muted
                          mc-text--center
                          mc-mb-6
                        `}>
                          All your data are belong to us.
                        </p>

                        <Button fullWidth>
                          Register
                        </Button>
                      </Background>
                    </ModalContent>
                  </div>
                </div>
              </div>
            </Modal>
          </CodeExample>

          <CodeExample>
            <div className='mc-text--center'>
              <Button
                onClick={this.showModal('cinema')}
                secondary
              >
                Open Cinema Overlay
              </Button>
            </div>

            <Modal
              backdrop='extra-dark'
              onClose={this.hideModal('cinema')}
              show={this.state.cinema}
            >
              <ModalClose />
              <div className='container'>
                <ModalContent>
                  <div className='row align-items-center justify-content-between'>
                    <div className='col-12'>
                      <VideoPlayer hasAutoplay />
                    </div>

                    <div className='col-auto'>
                      <h6 className='mc-text-h6 mc-text--uppercase'>
                        Instructor Name
                      </h6>
                      <p className='mc-text--muted'>
                        Teaches A Class
                      </p>
                    </div>

                    <div className='col-auto'>
                      <Button>All-Access Pass</Button>
                    </div>
                  </div>
                </ModalContent>
              </div>
            </Modal>
          </CodeExample>
        </div>
      </div>
    )
  }
}


storiesOf('Components|Modal', module)
  .add('Summary', withAddons({
    path: 'components/Modal/index.stories.js',
    component: Modal,
  })(() =>
    <ModalExample />,
  ))

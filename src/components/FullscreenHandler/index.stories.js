import { storiesOf } from '@storybook/react'
import React, { Fragment, PureComponent } from 'react'
import { sample } from 'lodash'
import CodeExample from '../../utils/CodeExample'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import withAddons from '../../utils/withAddons'

import {
  Modal,
  ModalContent,
  ModalClose,
  Icon,
  Button,
  Background,
  Fullscreen,
  FullscreenHandler,
  Toast,
} from '../index'

const sampleKinds = ['default', 'default', 'default', 'default', 'success', 'error']
const sampleIcons = ['check', 'info', undefined, undefined, undefined, undefined]
const sampleTexts = [
  'Hello!',
  'And good day!',
  'I SAID GOOD DAY!!!',
  `Quis esse et laboris anim nulla ea nostrud sunt aute nulla
  adipisicing enim culpa est qui amet fugiat duis minim officia
  commodo ad culpa consectetur eiusmod aliqua et est esse esse.`,
]

class FullscreenHandlerStory extends PureComponent {
  state = {
    toasts: [],
    isFullscreen: false,
    showModal: false,
  }

  makeToast = () => {
    const newToast = {
      kind: sample(sampleKinds),
      icon: sample(sampleIcons),
      text: sample(sampleTexts),
      show: true,
    }

    this.setState(prevState => ({
      toasts: [...prevState.toasts, newToast],
    }))
  }

  toggleFullscreen = () => {
    this.setState(prevState => ({ isFullscreen: !prevState.isFullscreen }))
  }

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }))
  }

  render () {
    const { isFullscreen, showModal, toasts } = this.state

    return (
      <div className='container mc-sticky--container'>
        <DocHeader
          title='FullscreenHandler'
          description='A helper component to wrap fullscreen mode conditions'
        />

        <DocSection title='Demo Fullscreen behaviors'>

          <CodeExample>
            <Fullscreen isFullscreen={isFullscreen}>
              <div className='row'>
                <div className='col-12'>
                  <Button fullWidth kind='success' onClick={this.toggleFullscreen}>
                    Toggle Fullscreen
                  </Button>
                </div>

                <div className='col-6'>
                  <Button fullWidth onClick={this.toggleModal}>
                    Show Modal (Support Fullscreen)
                  </Button>
                </div>

                <div className='col-6' onClick={this.makeToast}>
                  <Button fullWidth>
                    Show Toast (Support Fullscreen)
                  </Button>
                </div>

                <FullscreenHandler>
                  {({ fullscreenElement }) => !fullscreenElement && (
                      <Fragment>
                        <div className='col-6'>
                          <Button kind='tertiary' fullWidth onClick={this.toggleModal}>
                            Show Modal (Omit Fullscreen)
                          </Button>
                        </div>

                        <div className='col-6'>
                          <Button kind='tertiary' fullWidth onClick={this.makeToast}>
                            Show Toast (Omit Fullscreen)
                          </Button>
                        </div>
                      </Fragment>
                    )
                  }
                </FullscreenHandler>
              </div>

              <Modal
                  size='small'
                  show={showModal}
                  onClose={this.toggleModal}
                >
                  <ModalContent className='mc-invert'>
                    <ModalClose />
                    <Background
                      color='light'
                      className='mc-px-4 mc-py-9 mc-text--center'
                    >
                      <h6 className='mc-text-h8 mc-text--airy mc-opacity--muted mc-mb-2'>
                        You completed the playlist
                      </h6>
                      <h3 className='mc-text-h3 mc-mb-8'>
                        How did you like it?
                      </h3>

                      <div className='mc-opacity--silenced mc-mb-6'>
                        <Icon kind='starred' />
                        <Icon kind='starred' />
                        <Icon kind='starred' />
                        <Icon kind='starred' />
                        <Icon kind='star' />
                      </div>

                      <Button kind='link'>
                        Skip
                      </Button>
                    </Background>
                  </ModalContent>
                </Modal>

                {toasts.map((toast, key) =>
                  <Toast show={toast.show} kind={toast.kind} key={key}>
                    {toast.icon &&
                      <Icon kind={toast.icon} className='mc-mr-2' />
                    }
                    {toast.text}
                  </Toast>,
                  )}
            </Fullscreen>
          </CodeExample>
        </DocSection>
      </div>
    )
  }
}

storiesOf('Utilities|FullscreenHandler', module)
  .add('default', withAddons({
    path: 'components/FullscreenHandler/index.stories.js',
    component: FullscreenHandler,
  })(() => <FullscreenHandlerStory />))

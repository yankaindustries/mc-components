import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import CodeExample from '../../utils/CodeExample'

import {
  Modal,
  ModalContent,
  ModalClose,
  Input,
  Icon,
  Button,
  Background,
  VideoPlayer,
} from '../index'

import tvHero from '../../utils/tv-hero.png'
import instructorGrid from '../../utils/instructor-grid.png'


class ModalExample extends Component {
  state = {
    cart: false,
    rate: false,
    trailer: false,
    welcome: false,
    scrolling: false,
  }

  toggleModal = name => () => {
    this.setState(prevState => ({
      [name]: !prevState[name],
    }))
  }

  render () {
    return (
      <div className='container'>
        <DocHeader
          title='Modal'
          description='A flexible controlled modal.'
        />

        <DocSection title='Demo'>
          <div className='row'>
            <div className='col-md-2'>
              <CodeExample>
                <div className='mc-text--center'>
                  <Button
                    kind='secondary'
                    onClick={this.toggleModal('rate')}
                  >
                    Small
                  </Button>
                </div>

                <Modal
                  size='small'
                  show={this.state.rate}
                  onClose={this.toggleModal('rate')}
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
              </CodeExample>
            </div>

            <div className='col-md-2'>
              <CodeExample>
                <div className='mc-text--center'>
                  <Button
                    kind='secondary'
                    onClick={this.toggleModal('cart')}
                  >
                    Medium
                  </Button>
                </div>

                <Modal
                  size='medium'
                  show={this.state.cart}
                  onClose={this.toggleModal('cart')}
                >
                  <ModalContent className='mc-invert'>
                    <ModalClose />
                    <Background
                      color='light'
                      className='mc-px-4 mc-py-9'
                    >
                      <div className='row'>
                        <div className='offset-sm-1 col-sm-10'>
                          <h6 className={`
                            mc-text-h3
                            mc-text--center
                            mc-mb-4
                          `}>
                            Payment Method
                          </h6>

                          <p className='mc-opacity--muted mc-mb-4'>
                            Update your payment method to be used for your
                            future purchases.
                          </p>

                          <div className='row small-gutters no-gutters-vertical'>
                            <div className='col-12'>
                              <Input
                                name='number'
                                placeholder='Card Number'
                                className='mc-mb-4'
                              />
                            </div>

                            <div className='col-6'>
                              <Input
                                name='number'
                                placeholder='MM / YY'
                                className='mc-mb-4'
                              />
                            </div>

                            <div className='col-6'>
                              <Input
                                name='number'
                                placeholder='CVV'
                                className='mc-mb-4'
                              />
                            </div>

                            <div className='col-12'>
                              <Button fullWidth>
                                Purchase
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Background>
                  </ModalContent>
                </Modal>
              </CodeExample>
            </div>

            <div className='col-md-2'>
              <CodeExample>
                <div className='mc-text--center'>
                  <Button
                    kind='secondary'
                    onClick={this.toggleModal('welcome')}
                  >
                    Large
                  </Button>
                </div>

                <Modal
                  size='large'
                  show={this.state.welcome}
                  onClose={this.toggleModal('welcome')}
                >
                  <ModalContent>
                    <Background color='light'>
                      <div className='row no-gutters mc-text--center'>
                        <div className='col-6 d-none d-sm-flex'>
                          <Background
                            element={<img src={tvHero} />}
                            fit='container'
                            size='cover'
                          >
                            <div className='mc-p-10'>
                              <h2 className='mc-text-h2 mc-mb-6'>
                                Welcome to MasterClass
                              </h2>
                              <p>Your All-Access Pass is ready</p>
                              <br /><br /><br /><br /><br /><br /><br />
                            </div>
                          </Background>
                        </div>

                        <div className='col-sm-6 mc-invert'>
                          <ModalClose />
                          <div className='mc-px-4 mc-py-9'>
                            <img
                              src={instructorGrid}
                              className='mc-img-responsive'
                            />

                            <p className='mc-m-9'>
                              Meet your instructors and enroll in some classes!
                            </p>

                            <Button fullWidth>
                              Choose your classes
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Background>
                  </ModalContent>
                </Modal>
              </CodeExample>
            </div>

            <div className='col-md-2'>
              <CodeExample>
                <div className='mc-text--center'>
                  <Button
                    kind='secondary'
                    onClick={this.toggleModal('trailer')}
                  >
                    Full
                  </Button>
                </div>

                <Modal
                  backdrop='extra-dark'
                  show={this.state.trailer}
                  onClose={this.toggleModal('trailer')}
                >
                  <ModalClose />
                  <ModalContent>
                    <div className='row align-items-center justify-content-between'>
                      <div className='col-12'>
                        <VideoPlayer hasAutoplay />
                      </div>

                      <div className='col-auto'>
                        <h6 className='mc-text-h6 mc-text--uppercase'>
                          Instructor Name
                        </h6>
                        <p className='mc-opacity--muted'>
                          Teaches A Class
                        </p>
                      </div>

                      <div className='col-auto'>
                        <Button>All-Access Pass</Button>
                      </div>
                    </div>
                  </ModalContent>
                </Modal>
              </CodeExample>
            </div>

            <div className='col-md-2'>
              <CodeExample>
                <div className='mc-text--center'>
                  <Button
                    kind='secondary'
                    onClick={this.toggleModal('scrolling')}
                  >
                    Scrolling
                  </Button>
                </div>

                <Modal
                  backdrop='extra-dark'
                  show={this.state.scrolling}
                  onClose={this.toggleModal('scrolling')}
                  size='medium'
                >
                  <ModalContent className='mc-theme-light'>
                    <ModalClose />
                    <Background
                      color='light'
                      className='mc-px-4 mc-py-9'
                    >
                      <div className='row align-items-center justify-content-between'>

                        <div className='offset-sm-1 col-sm-10'>
                          <h6 className='mc-text-h2 mc-text--uppercase mc-text--center'>
                            Super Long Modal
                          </h6>
                          <p
                            className='mc-opacity--muted mc-text--center'
                            style={{ height: '400px' }}
                          >
                            Seems to stretch...
                          </p>
                          <p
                            className='mc-opacity--muted mc-text--center'
                            style={{ height: '400px' }}
                          >
                            Forever...
                          </p>
                          <p
                            className='mc-opacity--muted mc-text--center'
                            style={{ height: '1000px' }}
                          >
                            ...
                          </p>
                        </div>
                      </div>
                    </Background>
                  </ModalContent>
                </Modal>
              </CodeExample>
            </div>
          </div>
        </DocSection>
        <div style={{ height: '2000px' }} />
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

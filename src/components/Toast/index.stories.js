import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { sample } from 'lodash'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'

import Toast from '../Toast'
import Button from '../Button'
import Icon from '../Icons'


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


class ToastStory extends PureComponent {
  state = {
    toasts: [],
    show: false,
  }

  makeToast = () => {
    const newToast = {
      kind: sample(sampleKinds),
      icon: sample(sampleIcons),
      text: sample(sampleTexts),
      show: sample([true, false]),
    }

    this.setState(prevState => ({
      toasts: [...prevState.toasts, newToast],
    }))
  }

  makeToasts = () => {
    this.makeToast()
    window.setTimeout(this.makeToast, 200)
    window.setTimeout(this.makeToast, 400)
    window.setTimeout(this.makeToast, 600)
    window.setTimeout(this.makeToast, 800)
  }

  toggleToast = () => {
    this.setState(prevState => ({ show: !prevState.show }))
  }

  render () {
    const { toasts, show } = this.state

    return (
      <div className='container'>
        <DocHeader
          title='Toast'
          description='Part of a balanced breakfast.'
        />

        <DocSection title='Demo'>
          <div className='row'>
            <div className='col-auto'>
              <Button onClick={this.makeToasts}>
                Make Toast
              </Button>
            </div>

            <div className='col-auto'>
              <Button onClick={this.toggleToast}>
                Toggle Toast
              </Button>
            </div>
          </div>

          {toasts.map((toast, key) =>
            <Toast show={toast.show} kind={toast.kind} key={key}>
              {toast.icon &&
                <Icon kind={toast.icon} className='mc-mr-2' />
              }
              {toast.text} {toast.show ? 'yes' : 'no'}
            </Toast>,
          )}

          <Toast show={show}>
            This is a Toast that was hiding in the shadows, waiting for you...
          </Toast>
        </DocSection>
      </div>
    )
  }
}


storiesOf('Components|Toast', module)
  .add('Summary', withAddons({
    path: 'components/Toast/index.stories.js',
    component: Toast,
  })(() => <ToastStory />))

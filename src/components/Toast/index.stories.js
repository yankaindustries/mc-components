import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { sample } from 'lodash'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'

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
  }

  handleClick = () => {
    const newToast = {
      kind: sample(sampleKinds),
      icon: sample(sampleIcons),
      text: sample(sampleTexts),
    }

    this.setState(prevState => ({
      toasts: [...prevState.toasts, newToast],
    }))
  }

  render () {
    const { toasts } = this.state

    console.log('toasts', toasts)

    return (
      <div className='container'>
        <DocHeader
          title='Toast'
          description='Part of a balanced breakfast.'
        />

        <Button onClick={this.handleClick}>
          Show Toast
        </Button>

        {toasts.map((toast, key) =>
          <Toast show kind={toast.kind} key={key}>
            {toast.icon &&
              <Icon kind={toast.icon} className='mc-mr-2' />
            }
            {toast.text}
          </Toast>,
        )}
      </div>
    )
  }
}


storiesOf('Components|Toast', module)
  .add('Summary', withAddons({
    path: 'components/Toast/index.stories.js',
    component: Toast,
  })(() => <ToastStory />))

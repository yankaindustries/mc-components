import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'

import Toast from '../Toast'
import Icon from '../Icons'


storiesOf('Components|Toast', module)
  .add('Summary', withAddons({
    path: 'components/Toasts/index.stories.js',
    component: Toast,
  })(() => (
    <div className='container'>
      <DocHeader
        title='Toast'
        description='Part of a balanced breakfast.'
      />

      <Toast show kind='success'>
        <Icon kind='check' className='mc-mr-2' /> Hello!
      </Toast>

      <Toast show>
        And good day!
      </Toast>

      <Toast show kind='error'>
        I SAID GOOD DAY!!!
      </Toast>

      <Toast show>
        Quis esse et laboris anim nulla ea nostrud sunt aute nulla
        adipisicing enim culpa est qui amet fugiat duis minim officia
        commodo ad culpa consectetur eiusmod aliqua et est esse esse.
      </Toast>

    </div>
  )))

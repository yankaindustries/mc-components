import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'

import Toast from '../Toast'


storiesOf('Components|Toast', module)
  .add('Summary', withAddons({
    path: 'components/Toasts/index.stories.js',
    component: Toast,
  })(() => (
    <div className='container'>
      <DocHeader title='Toast' />

      <DocSection title='Props'>
        <PropExample
          name='image'
          type='Element'
        >
          <div className='row'>
            <div className='col-sm-6'>
              <Toast show={false}>
                Hello!
              </Toast>
            </div>
          </div>
        </PropExample>
      </DocSection>
    </div>
  )))

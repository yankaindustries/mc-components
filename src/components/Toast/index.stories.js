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
      <DocHeader
        title='Toast'
        description='Part of a balanced breakfast.'
      />

      <DocSection title='Props'>
        <PropExample
          name='image'
          type='Element'
        >
          <div className='row'>
            <div className='col-sm-6'>
              <Toast show>
                Hello!
              </Toast>

              <Toast show>
                And good day!
              </Toast>

              <Toast show>
                I SAID GOOD DAY!!!
              </Toast>
            </div>
          </div>
        </PropExample>
      </DocSection>
    </div>
  )))

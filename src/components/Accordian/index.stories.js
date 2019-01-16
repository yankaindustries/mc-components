import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'

import Accordian from '../Accordian'


storiesOf('components|Accordian', module)
  .add('Summary', withProps(Accordian)(() => (
    <div>
      <div className='container'>
        <DocHeader
          title='Accordian'
          description='test test test'
          experimental
        />

        <DocSection title='Demo'>
          <Accordian />
        </DocSection>
      </div>
    </div>
  )))

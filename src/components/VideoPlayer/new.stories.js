import React from 'react'
import { storiesOf } from '@storybook/react'

import BrightcoveVideo from './BrightcoveVideo'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'


storiesOf('Components|VideoPlayer', module)
  .add('New Player', withAddons({
    path: 'components/VideoPlayer/index.stories.js',
  })(() =>
    <div className='container'>
      <DocHeader
        title='Video'
        description='A dynamic and simple to set up video player.'
      />

      <DocSection title='Demo'>
        <BrightcoveVideo videoId='5344802162001' />
      </DocSection>
    </div>,
  ))

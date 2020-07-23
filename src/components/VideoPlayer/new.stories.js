import React from 'react'
import { storiesOf } from '@storybook/react'

import BrightcoveVideo from './BrightcoveVideo'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'


// 5747090186001

storiesOf('Components|VideoPlayer', module)
  .add('Test', withAddons({
    path: 'components/VideoPlayer/index.stories.js',
  })(() =>
    <div className='container'>
      <DocHeader
        title='Video'
        description='Testing out a new approach to videos...'
      />

      <DocSection title='Demo'>
        <BrightcoveVideo
          videoId='6116577124001'
          fit='cover'
          controls
        />
      </DocSection>
    </div>,
  ))
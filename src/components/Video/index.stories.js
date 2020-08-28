import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'

import Video from './Video'
import poster from './poster.png'


storiesOf('Components|Video', module)
  .add('Summary', withAddons({
    path: 'components/VideoPlayer/index.stories.js',
  })(() =>
    <div className='container'>
      <DocHeader
        title='Video'
        description='Video, just the player...'
        experimental
      />

      <Video poster={poster}>
        <source src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' type='video/mp4' />
      </Video>
    </div>,
  ))

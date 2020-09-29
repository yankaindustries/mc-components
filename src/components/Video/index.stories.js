import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'

import Video from './Video'
import Source from './Source'
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
        <Source src='https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8' type='application/x-mpegURL' />
      </Video>
    </div>,
  ))

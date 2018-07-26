import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import VideoPlayer from './'


storiesOf('components|VideoPlayer', module)
  .add('default', withProps(VideoPlayer)(() =>
    <VideoPlayer />,
  ))
  .add('chapter video', withProps(VideoPlayer)(() => (
    <VideoPlayer
      theme='chapter'
      endscreenComponent={<p>Endscreen Component</p>}
    />
  )))
  .add('ambient video', withProps(VideoPlayer)(() => (
    <VideoPlayer
      isMuted
      isLooped
      hasControls={false}
    />
  )))

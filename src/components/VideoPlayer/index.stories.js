import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import VideoPlayer from './'

const infoProps = {
  source: true,
  inline: true,
  header: false,
  propTables: [VideoPlayer],
}

storiesOf('VideoPlayer', module)
  .add(
    'default',
    withInfo({
      ...infoProps,
    })(() => <VideoPlayer />),
  )
  .add(
    'chapter video',
    withInfo({
      ...infoProps,
    })(() => (
      <VideoPlayer
        theme='chapter'
        endscreenComponent={<p>Endscreen Component</p>}
      />
    )),
  )
  .add(
    'ambient video',
    withInfo({
      ...infoProps,
    })(() =>
      <VideoPlayer
        isMuted
        isLooped
        hasControls={false}
      />
    ),
  )

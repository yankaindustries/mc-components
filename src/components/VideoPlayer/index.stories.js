import React from 'react'
import { func } from 'prop-types'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import VideoPlayer from './'

const InitialPlayerScreen = ({ onResume }) =>
  <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}
  >
    <p>Start playing your video</p>
    <button onClick={onResume}>
      START
    </button>
  </div>

InitialPlayerScreen.propTypes = {
  onResume: func,
}

const PausePlayerScreen = ({ onResume }) =>
  <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}
  >
    <p>Your video is paused</p>
    <button onClick={onResume}>
      CONTINUE
    </button>
  </div>

PausePlayerScreen.propTypes = {
  onResume: func,
}

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
  .add('overlay screens', withProps(VideoPlayer)(() => (
    <VideoPlayer
      hasAutoplay={false}
      beforescreenComponent={InitialPlayerScreen}
      pausescreenComponent={PausePlayerScreen}
      endscreenComponent={<p>Endscreen Component</p>}
    />
  )))

import React, { Fragment } from 'react'
import { func } from 'prop-types'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import VideoPlayer from './'
import Replay from '../Icons/Replay'

const screenStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}

const replayIconStyle = {
  position: 'absolute',
  bottom: '24px',
  left: '24px',
  zIndex: '1',
  width: '48px',
  height: '48px',
  opacity: '0.8',
  fill: 'white',
  cursor: 'pointer',
}

const InitialPlayerScreen = ({ onResume }) =>
  <div style={screenStyle}>
    <p>Start playing your video</p>
    <button onClick={onResume}>
      START
    </button>
  </div>

InitialPlayerScreen.propTypes = {
  onResume: func,
}

const PausePlayerScreen = ({ onResume }) =>
  <div style={screenStyle}>
    <p>Your video is paused</p>
    <button onClick={onResume}>
      CONTINUE
    </button>
  </div>

PausePlayerScreen.propTypes = {
  onResume: func,
}

const EndPlayerScreen = ({ onReplay }) => (
  <Fragment>
    <Replay
      style={replayIconStyle}
      width='100%'
      onClick={onReplay}
    />
    <div style={screenStyle}>
      <p>END SCREEN</p>
    </div>
  </Fragment>
)

EndPlayerScreen.propTypes = {
  onReplay: func,
}

storiesOf('components|VideoPlayer', module)
  .add('default', withProps(VideoPlayer)(() =>
    <VideoPlayer />,
  ))
  .add('chapter video', withProps(VideoPlayer)(() => (
    <VideoPlayer
      theme='chapter'
      endscreenComponent={EndPlayerScreen}
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
      endscreenComponent={EndPlayerScreen}
    />
  )))

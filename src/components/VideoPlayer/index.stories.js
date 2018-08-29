import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import VideoPlayer from './'

class VideoPlayerScreensExample extends Component {
  state = {
    status: 'init',
    videoRef: undefined,
  }

  onPlay = () => this.setState({ status: 'playing' })

  onPause = () => this.setState({ status: 'paused' })

  onEnd = () => this.setState({ status: 'ended' })

  onVideoReady = videoRef => this.setState({ videoRef })

  startPlaying = () => {
    this.state.videoRef.play()
  }

  PlayerScreen = () =>
    <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <p>{this.state.status} state</p>
      <button onClick={this.startPlaying}>
        {this.state.status === 'init' ? 'START' : 'CONTINUE'}
      </button>
    </div>

  render () {
    const { status } = this.state

    return (
      <VideoPlayer
        onPlay={this.onPlay}
        onPause={this.onPause}
        onEnd={this.onEnd}
        onVideoReady={this.onVideoReady}
        showScreenComponent={status === 'init' || status === 'paused'}
        ScreenComponent={this.PlayerScreen}
        hasAutoplay={false}
      />
    )
  }
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
  .add('custom overlay screens', withProps(VideoPlayer)(() =>
    <VideoPlayerScreensExample />,
  ))

import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import BrightcoveVideo from './index'

// BrightCoveVideo Handler
class BrightCoveVideoHandler extends Component {
  state = {
    startLoadingVideo: false,
    videoReady: false,
  }

  onMouseEnter = () => {
    this.setState({ startLoadingVideo: true })
  }

  onVideoReady = () => {
    this.setState({ videoReady: true })
  }

  render () {
    const { startLoadingVideo, videoReady } = this.state

    return (
      <div
        style={{
          position: 'relative',
          width: 350,
          height: 214,
          margin: 'auto',
        }}
        onMouseEnter={this.onMouseEnter}
      >
        <BrightcoveVideo
          {...this.props}
          show={videoReady}
          startLoading={startLoadingVideo}
          onVideoReady={this.onVideoReady}
        />
      </div>
    )
  }
}

const infoProps = {
  inline: true,
  header: false,
  propTables: [BrightcoveVideo],
  propTablesExclude: [BrightCoveVideoHandler],
}

storiesOf('BrightCove', module)
  .add('BrightCove',
    withInfo({ ...infoProps })(() =>
      <BrightCoveVideoHandler
        videoId='5707329402001'
        saveVideoProgress={() => { }}
      />,
    ),
  )

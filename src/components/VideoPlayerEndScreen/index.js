import React from 'react'
import { node, bool, func } from 'prop-types'

import VideoPlayerScreen from '../VideoPlayerScreen'
import Replay from '../Icons/Replay'

const VideoPlayerEndScreen = ({
  isActive,
  handleReplayClick,
  endscreenComponent,
}) => (
  <VideoPlayerScreen
    variation='endscreen'
    isActive={isActive}
  >
    <Replay
      className='bc-player-endscreen__replay'
      onClick={handleReplayClick}
    />
    <div className='bc-player-endscreen__content'>
      {endscreenComponent}
    </div>
  </VideoPlayerScreen>
)

VideoPlayerEndScreen.propTypes = {
  endscreenComponent: node.isRequired,
  isActive: bool,
  handleReplayClick: func,
}

VideoPlayerEndScreen.defaultProps = {
  isActive: false,
}

export default VideoPlayerEndScreen

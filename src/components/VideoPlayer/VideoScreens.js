import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import {
  VideoContext,
  STATE_IDLE,
  STATE_PAUSED,
  STATE_ENDED,
} from './Video'


const VideoScreens = ({
  beforeScreen,
  pauseScreen,
  endScreen,
}) => {
  const video = useContext(VideoContext)

  const screens = {
    [STATE_IDLE]: beforeScreen,
    [STATE_PAUSED]: pauseScreen,
    [STATE_ENDED]: endScreen,
  }

  const Screen = screens[video.playback]

  if (!Screen) return null

  return (
    <div className='mc-video__view mc-video__screen-view'>
      <Screen {...video} />
    </div>
  )
}


VideoScreens.propTypes = {
  beforeScreen: PropTypes.any,
  pauseScreen: PropTypes.any,
  endScreen: PropTypes.any,
}


export default VideoScreens

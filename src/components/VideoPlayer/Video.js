import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import useVideo from './useVideo'
import VideoControls from './VideoControls'
import VideoSettings from './VideoSettings'
import ClickOutside from '../ClickOutside'
import { renderChildren } from '../helpers'


export const PLAYBACK_IDLE = 'idle'
export const PLAYBACK_PLAYING = 'playing'
export const PLAYBACK_PAUSED = 'paused'
export const PLAYBACK_ENDED = 'ended'
export const PLAYBACK_ERROR = 'error'


export const VideoContext = React.createContext()


const Video = ({
  videoRef: passedVideoRef,
  ...props
}) => {
  const videoRef = useRef(passedVideoRef)
  const containerRef = useRef(null)

  const video = useVideo(videoRef, containerRef)

  let controlsTimer

  const handleMouseOver = () => {
    clearTimeout(controlsTimer)
    video.setControls(true)
  }

  const handleMouseOut = () => {
    clearTimeout(controlsTimer)
    controlsTimer = setTimeout(
      () => video.setControls(false),
      3000,
    )
  }

  const handleClickOutside = () => {
    clearTimeout(controlsTimer)
    video.setControls(false)
  }

  const classes = cn({
    'mc-video': true,
    'mc-video--show-settings': video.settings,
    'mc-video--show-controls': video.controls,
  })

  return (
    <VideoContext.Provider value={video}>
      <ClickOutside onClickOutside={handleClickOutside}>
        <div
          ref={containerRef}
          className={classes}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <video
            ref={videoRef}
            width={100}
            className='mc-video__video'
            crossOrigin='anonymous'
            {...props}
            controls={false}
          />

          <VideoControls
            videoRef={videoRef}
            containerRef={containerRef}
          />

          <VideoSettings
            videoRef={videoRef}
          />

          {renderChildren(props.children, { videoRef })}
        </div>
      </ClickOutside>
    </VideoContext.Provider>
  )
}


Video.propTypes = {
  children: PropTypes.any,
  videoRef: PropTypes.func,
}


export default Video

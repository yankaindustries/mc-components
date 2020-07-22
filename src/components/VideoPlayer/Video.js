import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import useVideo from './useVideo'
import VideoControls from './VideoControls'
import VideoSettings from './VideoSettings'
import VideoScreens from './VideoScreens'
import ClickOutside from '../ClickOutside'


export const STATE_IDLE = 'idle'
export const STATE_PLAYING = 'playing'
export const STATE_PAUSED = 'paused'
export const STATE_ENDED = 'ended'
export const STATE_ERROR = 'error'

const FIT_FIT = 'fit'
const FIT_COVER = 'cover'
const FIT_FILL = 'fill'

export const VideoContext = React.createContext()


const Video = ({
  videoRef: passedVideoRef,
  fit = FIT_FIT,
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
    [`mc-video--${fit}`]: fit,
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
            className='mc-video__video'
            crossOrigin='anonymous'
            preload='metadata'
            {...props}
            controls={false}
            onClick={video.togglePlay}
          />

          <VideoControls {...props} />
          <VideoSettings {...props} />
          <VideoScreens {...props} />
        </div>
      </ClickOutside>
    </VideoContext.Provider>
  )
}


Video.propTypes = {
  children: PropTypes.any,
  fit: PropTypes.oneOf([FIT_FIT, FIT_COVER, FIT_FILL]),
  videoRef: PropTypes.func,
}


export default Video

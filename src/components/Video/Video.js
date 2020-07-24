import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import useVideo from './useVideo'
import VideoControls from './VideoControls'
import VideoSettings from './VideoSettings'
import VideoScreens from './VideoScreens'


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

  const classes = cn({
    'mc-video': true,
    [`mc-video--${fit}`]: fit,
  })

  return (
    <VideoContext.Provider value={video}>
        <div
          ref={containerRef}
          className={classes}
        >
          <video
            ref={videoRef}
            className='mc-video__video'
            crossOrigin='anonymous'
            preload='metadata'
            {...props}
            controls={false}
            onClick={video.togglePlay}
            onDoubleClick={video.toggleFullscreen}
          />

          <VideoControls {...props} />
          <VideoSettings {...props} />
          <VideoScreens {...props} />
        </div>
    </VideoContext.Provider>
  )
}


Video.propTypes = {
  children: PropTypes.any,
  fit: PropTypes.oneOf([FIT_FIT, FIT_COVER, FIT_FILL]),
  videoRef: PropTypes.func,
}


export default Video

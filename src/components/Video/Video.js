import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import useVideo from './useVideo'
import Controls from './Controls'
import { renderChildren } from '../helpers'


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

  children,
  fit = FIT_FIT,
  initialTime,

  renderControls = () => <Controls />,
  renderIdleScreen,
  renderPauseScreen,
  renderEndScreen,

  onLoadStart = () => {},
  onLoadedMetadata = () => {},
  onLoadedData = () => {},
  onPlay = () => {},
  onPause = () => {},
  onEnded = () => {},
  onTimeUpdate = () => {},
  onSeeking = () => {},
  onSeeked = () => {},
  onError = () => {},

  ...props
}) => {
  const video = useVideo()

  const handleEvent = callback => event => callback(event, video)

  const screens = {
    [STATE_IDLE]: renderIdleScreen,
    [STATE_PAUSED]: renderPauseScreen,
    [STATE_ENDED]: renderEndScreen,
  }

  const renderScreen = screens[video.state]

  const classes = cn({
    'mc-video': true,
    [`mc-video--fit-${fit}`]: fit,
    [`mc-video--state-${video.state}`]: video.state,
  })

  return (
    <VideoContext.Provider value={video}>
      <div
        ref={video.containerRef}
        className={classes}
        onClick={video.togglePlay}
        onDoubleClick={video.toggleFullscreen}
      >
        <video
          ref={video.videoRef}
          className='mc-video__video'
          crossOrigin='anonymous'
          preload='metadata'
          {...props}
          onLoadStart={handleEvent(onLoadStart)}
          onLoadedMetadata={handleEvent(onLoadedMetadata)}
          onLoadedData={handleEvent(onLoadedData)}
          onPlay={handleEvent(onPlay)}
          onPause={handleEvent(onPause)}
          onEnded={handleEvent(onEnded)}
          onTimeUpdate={handleEvent(onTimeUpdate)}
          onSeeking={handleEvent(onSeeking)}
          onSeeked={handleEvent(onSeeked)}
          onError={handleEvent(onError)}
          controls={false}
        >
          {renderChildren(children, video)}
        </video>

        {renderControls()}
        {renderScreen &&
          <div className={`mc-video__view mc-video__screen-view mc-video__screen-view--${video.state}`}>
            {renderScreen()}
          </div>
        }
      </div>
    </VideoContext.Provider>
  )
}


Video.propTypes = {
  children: PropTypes.any,
  initialTime: PropTypes.number,
  fit: PropTypes.oneOf([FIT_FIT, FIT_COVER, FIT_FILL]),
  videoRef: PropTypes.func,

  renderControls: PropTypes.node,
  renderIdleScreen: PropTypes.node,
  renderPauseScreen: PropTypes.node,
  renderEndScreen: PropTypes.node,

  onLoadStart: PropTypes.func,
  onLoadedMetadata: PropTypes.func,
  onLoadedData: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnded: PropTypes.func,
  onTimeUpdate: PropTypes.func,
  onSeeking: PropTypes.func,
  onSeeked: PropTypes.func,
  onError: PropTypes.func,
}


export default Video

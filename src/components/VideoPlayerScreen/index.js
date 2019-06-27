import React from 'react'
import { bool, oneOf, instanceOf } from 'prop-types'
import cn from 'classnames'

import VideoPlayerPortalScreen from '../VideoPlayerPortalScreen'
import { PROP_TYPE_CHILDREN } from '../constants'


const VideoPlayerScreen = ({
  isActive,
  variation,
  children,
  videoRoot,
}) => {
  if (!videoRoot) { return null }

  const classNames = cn(
    'bc-player__screen',
    { [`bc-player__screen--${variation}`]: variation },
    { 'bc-player__screen--is-open': isActive },
  )

  return (
    <VideoPlayerPortalScreen videoRoot={videoRoot}>
      <div
        className={classNames}
        style={{ opacity: isActive ? 1 : 0 }}
      >
        {children}
      </div>
    </VideoPlayerPortalScreen>
  )
}

VideoPlayerScreen.propTypes = {
  children: PROP_TYPE_CHILDREN.isRequired,
  variation: oneOf(['endscreen', 'beforescreen', 'pausescreen']),
  videoRoot: instanceOf(Element),
  isActive: bool,
}

VideoPlayerScreen.defaultProps = {
  isActive: false,
}

export default VideoPlayerScreen

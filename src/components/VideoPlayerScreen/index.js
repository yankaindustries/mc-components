import React from 'react'
import { node, bool, oneOf, oneOfType, arrayOf, instanceOf } from 'prop-types'
import cn from 'classnames'

import VideoPlayerPortalScreen from '../VideoPlayerPortalScreen'

const VideoPlayerScreen = ({
  isActive,
  variation,
  children,
  videoRoot,
}) => {
  const classNames = cn(
    'bc-player-screen',
    { [`bc-player-${variation}`]: variation },
    { 'bc-player-screen--is-open': isActive },
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
  children: oneOfType([arrayOf(node), node]).isRequired,
  variation: oneOf(['endscreen', 'beforescreen', 'pausescreen']),
  videoRoot: instanceOf(Element),
  isActive: bool,
}

VideoPlayerScreen.defaultProps = {
  isActive: false,
}

export default VideoPlayerScreen

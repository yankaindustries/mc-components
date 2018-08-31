import React from 'react'
import { node, bool, oneOf, oneOfType, arrayOf } from 'prop-types'
import cn from 'classnames'

const VideoPlayerScreen = ({ isActive, variation, children }) => {
  const classNames = cn(
    'bc-player-screen',
    { [`bc-player-${variation}`]: variation },
    { 'bc-player-screen--is-open': isActive },
  )

  return (
    <div
      className={classNames}
      style={{ opacity: isActive ? 1 : 0 }}
    >
      {children}
    </div>
  )
}

VideoPlayerScreen.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  variation: oneOf(['endscreen', 'beforescreen', 'pausescreen']),
  isActive: bool,
}

VideoPlayerScreen.defaultProps = {
  isActive: false,
}

export default VideoPlayerScreen

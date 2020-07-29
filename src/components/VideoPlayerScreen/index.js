import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
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
  )

  return (
    <VideoPlayerPortalScreen videoRoot={videoRoot}>
      <CSSTransition
        appear={isActive}
        in={isActive}
        classNames='bc-player__screen-'
        timeout={500}
      >
        <div className={classNames}>
          {children}
        </div>
      </CSSTransition>
    </VideoPlayerPortalScreen>
  )
}

VideoPlayerScreen.propTypes = {
  children: PROP_TYPE_CHILDREN.isRequired,
  variation: PropTypes.oneOf(['endscreen', 'beforescreen', 'pausescreen']),
  videoRoot: PropTypes.object,
  isActive: PropTypes.bool,
}

VideoPlayerScreen.defaultProps = {
  isActive: false,
}

export default VideoPlayerScreen

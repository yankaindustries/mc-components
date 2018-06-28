import React from 'react'
import PropTypes from 'prop-types'

const VideoProgress = ({ progress = 30 }) => (
  <div className='video-progress'>
    <div
      style={{ width: `${progress}%` }}
      className='video-progress__completed'
    />
  </div>
)

VideoProgress.propTypes = {
  progress: PropTypes.number,
}

export default VideoProgress

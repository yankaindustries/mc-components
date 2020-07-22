import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { VideoContext } from './Video'
import Button from '../Button'


const VideoSettings = () => {
  const {
    toggleSettings,
  } = useContext(VideoContext)

  return (
    <div className='mc-video__view mc-video__settings-view'>
      <div>
        Settings...
        <br />
        <Button onClick={toggleSettings}>Close</Button>
      </div>
    </div>
  )
}

VideoSettings.propTypes = {
  videoRef: PropTypes.func.isRequired,
}


export default VideoSettings

import React, { useContext } from 'react'

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


export default VideoSettings
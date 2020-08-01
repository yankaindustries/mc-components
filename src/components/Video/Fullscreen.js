import React, { useContext } from 'react'

import { VideoContext } from './Video'

import Button from '../Button'
import Icon from '../Icons'


const Fullscreen = () => {
  const {
    fullscreen,
    toggleFullscreen,
  } = useContext(VideoContext)

  const fullscreenIcon = fullscreen
    ? 'fullscreen-exit'
    : 'fullscreen'

  return (
    <div className='mc-video__fullscreen mc-video__control'>
      <Button
        onClick={toggleFullscreen}
        kind='link'
        size='small'

      >
        <Icon kind={fullscreenIcon} className='mc-icon mc-icon--4' />
      </Button>
    </div>
  )
}


export default Fullscreen

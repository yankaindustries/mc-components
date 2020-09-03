import React, { useContext } from 'react'

import { VideoContext } from './Video'

import Button from '../Button'
import Icon from '../Icons'
import Slider from '../Slider'


const Volume = () => {
  const {
    muted,
    volume,
    setVolume,
    toggleMute,
  } = useContext(VideoContext)

  const volumeIcon = muted ? 'muted' : 'unmuted'

  return (
    <div className='mc-video__volume mc-video__control'>
      <Button
        onClick={toggleMute}
        kind='link'
        size='small'
      >
        <Icon kind={volumeIcon} className='mc-icon mc-icon--4' />
      </Button>

      <div className='mc-video__volume-slider'>
        <Slider
          value={volume}
          onChange={setVolume}
        />
      </div>
    </div>
  )
}


export default Volume

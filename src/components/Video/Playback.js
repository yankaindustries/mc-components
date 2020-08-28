import React, { useContext } from 'react'

import {
  VideoContext,
  STATE_PLAYING,
  STATE_ENDED,
} from './Video'

import Button from '../Button'
import Icon from '../Icons'


const Playback = () => {
  const {
    state,
    togglePlay,
  } = useContext(VideoContext)

  const icons = {
    [STATE_PLAYING]: 'pause',
    [STATE_ENDED]: 'replay',
  }

  const icon = icons[state] || 'play'

  return (
    <div className='mc-video__playback mc-video__control'>
      <Button
        onClick={togglePlay}
        kind='link'
        size='small'
      >
        <Icon kind={icon} className='mc-icon mc-icon--4' />
      </Button>
    </div>
  )
}


export default Playback

import React, { useContext } from 'react'

import { VideoContext } from './Video'
import Slider from '../Slider'


const Scrubber = () => {
  const {
    buffer,
    duration,
    time,

    setTime,
  } = useContext(VideoContext)

  const handleScrubberChange = (value) => {
    const newTime = value * duration

    setTime(newTime)
  }

  return (
    <div className='mc-video__scrubber'>
      <Slider
        value={time / duration}
        buffer={buffer / duration}
        onChange={handleScrubberChange}
      />
    </div>
  )
}


export default Scrubber

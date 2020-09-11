import React, { useContext } from 'react'

import { VideoContext } from './Video'


// const toTime = seconds => new Date(seconds * 1000).toISOString().substr(14, 5)
const toTime = (seconds) => {
  if (Number.isNaN(seconds)) return ''

  const d = new Date(null)
  d.setSeconds(seconds)
  return d.toISOString().substr(14, 5)
}

const Time = () => {
  const {
    duration,
    time,
  } = useContext(VideoContext)

  return (
    <div className='mc-video__time mc-video__control'>
      <span>{toTime(time)} / {toTime(duration)}</span>
    </div>
  )
}


export default Time

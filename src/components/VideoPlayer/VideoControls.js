import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'
import Icon from '../Icons'

import {
  VideoContext,
  PLAYBACK_PLAYING,
  PLAYBACK_ENDED,
} from './Video'


const toTime = seconds => new Date(seconds * 1000).toISOString().substr(14, 5)

const hijackClick = event => event.stopPropagation()


const VideoControls = () => {
  const {
    playback,
    time,
    duration,
    buffer,
    fullscreen,

    togglePlay,
    scrubTo,
    toggleSettings,
    toggleFullscreen,
  } = useContext(VideoContext)

  const handleScrubberInteraction = scrubber => (event) => {
    const {
      left: scrubberLeft,
      width: scrubberWidth,
    } = scrubber.getBoundingClientRect()

    const {
      clientX: eventLeft,
    } = event

    const left = Math.min(Math.max(0, eventLeft - scrubberLeft), scrubberWidth)
    const perc = left / scrubberWidth
    const newTime = perc * duration

    scrubTo(newTime)
  }

  const handleScrubberMouseDown = (event) => {
    const listener = handleScrubberInteraction(event.currentTarget)

    handleScrubberInteraction(event.currentTarget)(event)

    window.addEventListener('mousemove', listener)
    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', listener)
    })
  }

  const iconStates = {
    [PLAYBACK_PLAYING]: 'pause',
    [PLAYBACK_ENDED]: 'replay',
  }
  const controlIcon = iconStates[playback] || 'play'
  const bufferPerc = `${(buffer / duration) * 100}%`
  const timePerc = `${(time / duration) * 100}%`
  const fullscreenIcon = fullscreen
    ? 'fullscreen-exit'
    : 'fullscreen'

  return (
    <div
      className='mc-video__view mc-video__controls-view'
      onClick={togglePlay}
    >
      <div
        className='mc-video__controls mc-text-small'
        onClick={hijackClick}
      >
        <div className='mc-video__control'>
          <Button
            onClick={togglePlay}
            kind='link'
            size='small'
            symmetrical
          >
            <Icon kind={controlIcon} className='mc-icon mc-icon--3' />
          </Button>
        </div>

        <div className='mc-video__time mc-video__control'>
          <span>{toTime(time)}</span>
        </div>

        <div
          className='mc-video__scrubber mc-video__control'
          onMouseDown={handleScrubberMouseDown}
        >
          <div className='mc-video__scrubber-bar' />
          <div className='mc-video__buffer-bar' style={{ width: bufferPerc }} />
          <div className='mc-video__time-bar' style={{ width: timePerc }} />
          <div className='mc-video__time-slider' style={{ left: timePerc }} />
        </div>

        <div className='mc-video__control mc-video__duration'>
          <span>{toTime(duration)}</span>
        </div>

        <div className='mc-video__control'>
          <Button
            onClick={toggleSettings}
            kind='link'
            size='small'
            symmetrical
          >
            <Icon kind='cog' className='mc-icon mc-icon--3' />
          </Button>
        </div>

        <div className='mc-video__control'>
          <Button
            onClick={toggleFullscreen}
            kind='link'
            size='small'
            symmetrical
          >
            <Icon kind={fullscreenIcon} className='mc-icon mc-icon--3' />
          </Button>
        </div>
      </div>
    </div>
  )
}


VideoControls.propTypes = {
  videoRef: PropTypes.func.isRequired,
  containerRef: PropTypes.func.isRequired,
}


export default VideoControls

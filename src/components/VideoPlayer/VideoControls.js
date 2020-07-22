import React, { useContext } from 'react'

import Button from '../Button'
import Icon from '../Icons'
import Dropdown from '../Dropdown'
import DropdownToggle from '../DropdownToggle'
import DropdownContent from '../DropdownContent'
import DropdownHeader from '../DropdownHeader'
import DropdownBody from '../DropdownBody'

import {
  VideoContext,
  STATE_PLAYING,
  STATE_ENDED,
} from './Video'


const toTime = seconds => new Date(seconds * 1000).toISOString().substr(14, 5)

const hijackClick = event => event.stopPropagation()


const VideoControls = () => {
  const {
    playback,
    time,
    duration,
    buffer,
    speed,
    fullscreen,

    scrubTo,
    setSpeed,
    togglePlay,
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
    [STATE_PLAYING]: 'pause',
    [STATE_ENDED]: 'replay',
  }
  const controlIcon = iconStates[playback] || 'play'
  const bufferPerc = `${(buffer / duration) * 100}%`
  const timePerc = `${(time / duration) * 100}%`
  const fullscreenIcon = fullscreen
    ? 'fullscreen-exit'
    : 'fullscreen'

  return (
    <div
      className='mc-video__controls mc-text-small'
      onClick={hijackClick}
    >
      <div
        className='mc-video__scrubber mc-video__control'
        onMouseDown={handleScrubberMouseDown}
      >
        <div className='mc-video__scrubber-bar' />
        <div className='mc-video__buffer-bar' style={{ width: bufferPerc }} />
        <div className='mc-video__time-bar' style={{ width: timePerc }} />
        <div className='mc-video__time-slider' style={{ left: timePerc }} />
      </div>

      <div className='mc-video__control'>
        <Button
          onClick={togglePlay}
          kind='link'
          size='small'
        >
          <Icon kind={controlIcon} className='mc-icon mc-icon--4' />
        </Button>
      </div>

      <div className='mc-video__time mc-video__control'>
        <span>{toTime(time)} / {toTime(duration)}</span>
      </div>

      <div className='mc-video__spacer' />

      <div className='mc-video__control'>
        <Dropdown placement='top-end'>
          <DropdownToggle>
            <Button
              kind='link'
              size='small'
            >
              <Icon kind='cog' className='mc-icon mc-icon--4' />
            </Button>
          </DropdownToggle>

          <DropdownContent>
            <DropdownHeader className='mc-px-4 mc-py-2 mc-text-x-small mc-opacity--muted mc-mr-3'>
              Speed
            </DropdownHeader>

            <DropdownBody className='mc-px-4 mc-py-2'>
              <Button
                kind={speed === 0.5 ? 'secondary' : 'link'}
                onClick={() => setSpeed(0.5)}
              >
                0.5x
              </Button>

              <Button
                kind={speed === 1 ? 'secondary' : 'link'}
                onClick={() => setSpeed(1)}
              >
                1x
              </Button>

              <Button
                kind={speed === 2 ? 'secondary' : 'link'}
                onClick={() => setSpeed(2)}
              >
                2x
              </Button>
            </DropdownBody>
          </DropdownContent>
        </Dropdown>
      </div>

      <div className='mc-video__control'>
        <Button
          onClick={toggleFullscreen}
          kind='link'
          size='small'

        >
          <Icon kind={fullscreenIcon} className='mc-icon mc-icon--4' />
        </Button>
      </div>
    </div>
  )
}


export default VideoControls

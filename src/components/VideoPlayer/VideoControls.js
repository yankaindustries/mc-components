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
import Slider from './Slider'


const toTime = seconds => new Date(seconds * 1000).toISOString().substr(14, 5)

const hijackClick = event => event.stopPropagation()


const VideoControls = () => {
  const {
    state,
    muted,
    volume,
    time,
    duration,
    buffer,
    speed,
    fullscreen,

    scrubTo,
    togglePlay,
    toggleMute,
    setVolume,
    setSpeed,
    toggleFullscreen,
  } = useContext(VideoContext)

  const handleScrub = (value) => {
    const newTime = value * duration

    scrubTo(newTime)
  }

  const playbackIcons = {
    [STATE_PLAYING]: 'pause',
    [STATE_ENDED]: 'replay',
  }
  const playbackIcon = playbackIcons[state] || 'play'

  const volumeIcon = muted ? 'muted' : 'unmuted'

  const fullscreenIcon = fullscreen
    ? 'fullscreen-exit'
    : 'fullscreen'

  return (
    <div
      className='mc-video__controls mc-text-small'
      onClick={hijackClick}
    >
      <div className='mc-video__scrubber'>
        <Slider
          value={time / duration}
          buffer={buffer / duration}
          onChange={handleScrub}
        />
      </div>

      <div className='mc-video__playback mc-video__control'>
        <Button
          onClick={togglePlay}
          kind='link'
          size='small'
        >
          <Icon kind={playbackIcon} className='mc-icon mc-icon--4' />
        </Button>
      </div>

      <div className='mc-video__mute mc-video__control'>
        <Button
          onClick={toggleMute}
          kind='link'
          size='small'
        >
          <Icon kind={volumeIcon} className='mc-icon mc-icon--4' />
        </Button>

        <div className='mc-video__volume'>
          <Slider
            value={volume}
            onChange={setVolume}
          />
        </div>
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

import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '../Button'
import Icon from '../Icons'
import ClickOutside from '../ClickOutside'

import { renderChildren } from '../helpers'


const PLAYBACK_IDLE = 'idle'
const PLAYBACK_PLAYING = 'playing'
const PLAYBACK_PAUSED = 'paused'
const PLAYBACK_ENDED = 'ended'
const PLAYBACK_ERROR = 'error'


const toTime = seconds =>
  new Date(seconds * 1000).toISOString().substr(14, 5)

const Video = ({
  ...props
}) => {
  const containerEl = useRef(null)
  const videoEl = useRef(null)

  const [playbackState, setPlaybackState] = useState(PLAYBACK_IDLE)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [buffer, setBuffer] = useState(0)
  // const [muted, setMuted] = useState(false)
  // const [volume, setVolume] = useState(1)
  const [showSettings, setShowSettings] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)

  const events = {
    timeupdate: function handleTimeUpdate (event) {
      setTime(event.target.currentTime)
    },
    durationchange: function handleDurationChange (event) {
      setDuration(event.target.duration)
    },
    progress: function handleProgress (event) {
      setBuffer(
        event.target.buffered.end(event.target.buffered.length - 1),
      )
    },
    // volumechange: function handleVolumeChange (event) {
    //   setVolume(event.target.volume)
    //   setMuted(event.target.muted)
    // },
    play: function handlePlay () {
      setPlaybackState(PLAYBACK_PLAYING)
    },
    pause: function handlePause () {
      setPlaybackState(PLAYBACK_PAUSED)
    },
    seeking: function handleSeeking (event) {
      setTime(event.target.currentTime)
    },
    ended: function handleEnded () {
      setPlaybackState(PLAYBACK_ENDED)
    },
    error: function handleError () {
      setPlaybackState(PLAYBACK_ERROR)
    },
  }

  const runEventsOnVideoWith = method =>
    Object.keys(events).forEach(key =>
      videoEl.current[method](key, events[key]),
    )

  const handleFullscreenChange = () => {
    setFullscreen(!!document.fullscreenElement)
  }

  useEffect(
    () => {
      runEventsOnVideoWith('addEventListener')
      document.addEventListener('fullscreenchange', handleFullscreenChange)
      return () => {
        runEventsOnVideoWith('removeEventListener')
        document.removeEventListener('fullscreenchange', handleFullscreenChange)
      }
    },
    [videoEl],
  )

  const togglePlay = () =>
    videoEl.current[playbackState === PLAYBACK_PLAYING ? 'pause' : 'play']()

  let controlsTimer

  const handleMouseOver = () => {
    clearTimeout(controlsTimer)
    setShowControls(true)
  }

  const handleMouseOut = () => {
    clearTimeout(controlsTimer)
    controlsTimer = setTimeout(
      () => setShowControls(false),
      3000,
    )
  }

  const handleClickOutside = () => {
    clearTimeout(controlsTimer)
    setShowControls(false)
  }

  const handleControlsViewClick = () => {
    togglePlay()
  }

  const handleControlsClick = event =>
    event.stopPropagation()

  const handleControlClick = () =>
    togglePlay()

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

    videoEl.current.currentTime = newTime
    videoEl.current.newTime = newTime
  }

  const handleScrubberMouseDown = (event) => {
    const listener = handleScrubberInteraction(event.currentTarget)

    handleScrubberInteraction(event.currentTarget)(event)

    window.addEventListener('mousemove', listener)
    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', listener)
    })
  }

  const handleSettingsClick = () => setShowSettings(!showSettings)

  const handleFullscreenClick = () => {
    if (fullscreen) {
      document.exitFullscreen()
    } else {
      containerEl.current.requestFullscreen()
    }
  }

  const iconStates = {
    [PLAYBACK_PLAYING]: 'pause',
    [PLAYBACK_ENDED]: 'replay',
  }
  const controlIcon = iconStates[playbackState] || 'play'
  const bufferPerc = `${(buffer / duration) * 100}%`
  const timePerc = `${(time / duration) * 100}%`
  const fullscreenIcon = fullscreen
    ? 'fullscreen-exit'
    : 'fullscreen'

  const classes = cn({
    'mc-video': true,
    'mc-video--show-settings': showSettings,
    'mc-video--show-controls': showControls,
  })

  return (
    <ClickOutside onClickOutside={handleClickOutside}>
      <div
        ref={containerEl}
        className={classes}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <video
          ref={videoEl}
          width={100}
          className='mc-video__video'
          crossOrigin='anonymous'
          {...props}
          controls={false}
        />

        <div className='mc-video__view mc-video__controls-view'
          onClick={handleControlsViewClick}>
          <div className='mc-video__controls mc-text-small'
            onClick={handleControlsClick}>
            <div className='mc-video__control'>
              <Button
                onClick={handleControlClick}
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
                onClick={handleSettingsClick}
                kind='link'
                size='small'
                symmetrical
              >
                <Icon kind='cog' className='mc-icon mc-icon--3' />
              </Button>
            </div>

            <div className='mc-video__control'>
              <Button
                onClick={handleFullscreenClick}
                kind='link'
                size='small'
                symmetrical
              >
                <Icon kind={fullscreenIcon} className='mc-icon mc-icon--3' />
              </Button>
            </div>
          </div>
        </div>

        <div className='mc-video__view mc-video__settings-view'>
          <div>
            Settings...
            <br />
            <Button onClick={() => setShowSettings(false)}>Close</Button>
          </div>
        </div>

        {renderChildren(props.children, { video: videoEl.current })}
      </div>
    </ClickOutside>
  )
}


Video.propTypes = {
  children: PropTypes.any,
}


export default Video

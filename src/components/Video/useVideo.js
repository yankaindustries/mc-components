import { useState } from 'react'

import useBind from './useBind'
import {
  STATE_IDLE,
  STATE_PLAYING,
  STATE_ERROR,
  STATE_PAUSED,
  STATE_ENDED,
} from './Video'


const SEEK_AMOUNT = 5
const VOLUME_AMOUNT = 0.1

const minMax = (value, min, max) => Math.min(Math.max(value, min), max)


const useVideo = (videoRef, containerRef, documentRef) => {
  const [active, setActive] = useState(false)
  const [state, setState] = useState(STATE_IDLE)
  const [time, saveTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [buffer, setBuffer] = useState(0)
  const [muted, saveMuted] = useState(false)
  const [volume, saveVolume] = useState(1)
  const [speed, saveSpeed] = useState(1)
  const [fullscreen, setFullscreen] = useState(false)

  const hasStarted = () => state !== STATE_IDLE
  const isPaused = () => state === STATE_PAUSED
  const isPlaying = () => state === STATE_PLAYING

  const toggleFullscreen = () => {
    if (fullscreen) {
      document.exitFullscreen()
    } else {
      containerRef.current.requestFullscreen()
    }
  }

  const togglePlay = () => {
    videoRef.current[isPlaying() ? 'pause' : 'play']()
  }

  const setTime = (newTime) => {
    // eslint-disable-next-line no-param-reassign
    videoRef.current.currentTime = minMax(newTime, 0, duration)
  }

  const adjustTime = (amount) => {
    setTime(videoRef.current.currentTime + amount)
  }

  const setSpeed = (rate) => {
    // eslint-disable-next-line no-param-reassign
    videoRef.current.playbackRate = rate
  }

  const toggleMute = () => {
    // eslint-disable-next-line no-param-reassign
    videoRef.current.muted = !videoRef.current.muted
  }

  const setVolume = (level) => {
    // eslint-disable-next-line no-param-reassign
    videoRef.current.volume = minMax(level, 0, 1)
    // eslint-disable-next-line no-param-reassign
    videoRef.current.muted = false
  }

  const adjustVolume = (amount) => {
    setVolume(videoRef.current.volume + amount)
  }

  useBind(videoRef, {
    timeupdate: function handleTimeUpdate (event) {
      saveTime(event.target.currentTime)
    },
    durationchange: function handleDurationChange (event) {
      setDuration(event.target.duration)
    },
    progress: function handleProgress (event) {
      setBuffer(
        event.target.buffered.end(event.target.buffered.length - 1),
      )
    },
    ratechange: function handleRateChange (event) {
      saveSpeed(event.target.playbackRate)
    },
    volumechange: function handleVolumeChange (event) {
      if (event.target.volume === 0 || event.target.muted) {
        saveVolume(0)
        saveMuted(true)
      } else {
        saveVolume(event.target.volume)
        saveMuted(event.target.muted)
      }
    },
    play: function handlePlay () {
      setState(STATE_PLAYING)
    },
    pause: function handlePause () {
      setState(STATE_PAUSED)
    },
    seeking: function handleSeeking (event) {
      saveTime(event.target.currentTime)
    },
    ended: function handleEnded () {
      setState(STATE_ENDED)
    },
    error: function handleError () {
      setState(STATE_ERROR)
    },
    contextmenu: function handleContextMenu (event) {
      event.preventDefault()
    },
  })
  useBind(documentRef, {
    click: function handleClick (event) {
      setActive(containerRef.current.contains(event.target))
    },
    fullscreenchange: function handleFullscreenChange () {
      setFullscreen(!!document.fullscreenElement)
    },
    keydown: function handleKeyDown (event) {
      if (!active) return

      switch (event.code) {
        case 'Space': // SPACE
          event.preventDefault()
          togglePlay()
          break
        case 'ArrowRight':
          event.preventDefault()
          adjustTime(event.shiftKey ? SEEK_AMOUNT * 6 : SEEK_AMOUNT)
          break
        case 'ArrowLeft':
          event.preventDefault()
          adjustTime(event.shiftKey ? -SEEK_AMOUNT * 6 : -SEEK_AMOUNT)
          break
        case 'ArrowUp':
          event.preventDefault()
          adjustVolume(VOLUME_AMOUNT)
          break
        case 'ArrowDown':
          event.preventDefault()
          adjustVolume(-VOLUME_AMOUNT)
          break
        case 'KeyM':
          event.preventDefault()
          toggleMute()
          break
        default:
          break
      }
    },
  }, [state, active])

  return {
    videoRef,
    containerRef,

    buffer,
    duration,
    fullscreen,
    muted,
    speed,
    state,
    time,
    volume,

    hasStarted,
    isPaused,
    isPlaying,

    setTime,
    setSpeed,
    setVolume,
    toggleFullscreen,
    toggleMute,
    togglePlay,
  }
}


export default useVideo

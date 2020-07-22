import { useEffect, useState } from 'react'

import {
  STATE_IDLE,
  STATE_PLAYING,
  STATE_ERROR,
  STATE_PAUSED,
  STATE_ENDED,
} from './Video'


const runWith = (obj, method, events) =>
  Object.keys(events).forEach(key =>
    obj[method](key, events[key]),
  )


const useVideo = (videoRef, containerRef) => {
  const [state, setState] = useState(STATE_IDLE)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [buffer, setBuffer] = useState(0)
  // const [muted, setMuted] = useState(false)
  // const [volume, setVolume] = useState(1)
  const [controls, setControls] = useState(false)
  const [speed, saveSpeed] = useState(1)
  const [fullscreen, setFullscreen] = useState(false)

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      containerRef.current.requestFullscreen()
    }
  }

  const togglePlay = () =>
    videoRef.current[state === STATE_PLAYING ? 'pause' : 'play']()

  const scrubTo = (newTime) => {
    // eslint-disable-next-line no-param-reassign
    videoRef.current.currentTime = newTime
  }

  const setSpeed = (rate) => {
    // eslint-disable-next-line no-param-reassign
    videoRef.current.playbackRate = rate
  }

  const videoEvents = {
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
    ratechange: function handleRateChange (event) {
      saveSpeed(event.target.playbackRate)
    },
    // volumechange: function handleVolumeChange (event) {
    //   setVolume(event.target.volume)
    //   setMuted(event.target.muted)
    // },
    play: function handlePlay () {
      setState(STATE_PLAYING)
    },
    pause: function handlePause () {
      setState(STATE_PAUSED)
    },
    seeking: function handleSeeking (event) {
      setTime(event.target.currentTime)
    },
    ended: function handleEnded () {
      setState(STATE_ENDED)
    },
    error: function handleError () {
      setState(STATE_ERROR)
    },
  }

  const documentEvents = {
    fullscreenchange: () => {
      setFullscreen(!!document.fullscreenElement)
    },
  }

  useEffect(
    () => {
      runWith(videoRef.current, 'addEventListener', videoEvents)
      return () => runWith(videoRef.current, 'removeEventListener', videoEvents)
    },
    [videoRef],
  )

  useEffect(
    () => {
      runWith(document, 'addEventListener', documentEvents)
      return () => runWith(document, 'removeEventListener', documentEvents)
    },
    [containerRef],
  )

  return {
    state,
    time,
    duration,
    buffer,
    controls,
    fullscreen,
    speed,

    setControls,
    setFullscreen,

    scrubTo,
    setSpeed,
    togglePlay,
    toggleFullscreen,
  }
}


export default useVideo

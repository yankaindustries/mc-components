import { useEffect, useState } from 'react'

import {
  PLAYBACK_IDLE,
  PLAYBACK_PLAYING,
  PLAYBACK_ERROR,
  PLAYBACK_PAUSED,
  PLAYBACK_ENDED,
} from './Video'


const runWith = (obj, method, events) =>
  Object.keys(events).forEach(key =>
    obj[method](key, events[key]),
  )


const useVideo = (videoRef, containerRef) => {
  const [playback, setPlayback] = useState(PLAYBACK_IDLE)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [buffer, setBuffer] = useState(0)
  // const [muted, setMuted] = useState(false)
  // const [volume, setVolume] = useState(1)
  const [settings, setSettings] = useState(false)
  const [controls, setControls] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      containerRef.current.requestFullscreen()
    }
  }

  const togglePlay = () =>
    videoRef.current[playback === PLAYBACK_PLAYING ? 'pause' : 'play']()

  const toggleSettings = () =>
    setSettings(prevSetting => !prevSetting)

  const scrubTo = (newTime) => {
    // eslint-disable-next-line no-param-reassign
    videoRef.current.currentTime = newTime
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
    // volumechange: function handleVolumeChange (event) {
    //   setVolume(event.target.volume)
    //   setMuted(event.target.muted)
    // },
    play: function handlePlay () {
      setPlayback(PLAYBACK_PLAYING)
    },
    pause: function handlePause () {
      setPlayback(PLAYBACK_PAUSED)
    },
    seeking: function handleSeeking (event) {
      setTime(event.target.currentTime)
    },
    ended: function handleEnded () {
      setPlayback(PLAYBACK_ENDED)
    },
    error: function handleError () {
      setPlayback(PLAYBACK_ERROR)
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
    playback,
    time,
    duration,
    buffer,
    settings,
    controls,
    fullscreen,

    setSettings,
    setControls,
    setFullscreen,

    scrubTo,
    togglePlay,
    toggleSettings,
    toggleFullscreen,
  }
}


export default useVideo

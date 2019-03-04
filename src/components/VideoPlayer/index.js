import React, { PureComponent } from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'

import VideoPlayerScreen from '../VideoPlayerScreen'
import { renderChildren } from '../helpers'

const VOLUME_INTERVAL = 0.05
const SKIP_INTERVAL = 5

const SCREEN_BEFORE = 'SCREEN_BEFORE'
const SCREEN_END = 'SCREEN_END'
const SCREEN_PAUSE = 'SCREEN_PAUSE'
const SCREEN_NONE = 'SCREEN_NONE'

const STATUS_LOADING = 'STATUS_LOADING'
const STATUS_READY = 'STATUS_READY'

export default class VideoPlayer extends PureComponent {
  static propTypes = {
    accountId: PropTypes.string,
    playerId: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired,

    endscreenComponent: PropTypes.func,
    beforescreenComponent: PropTypes.func,
    pausescreenComponent: PropTypes.func,

    hasAutoplay: PropTypes.bool,
    hasControls: PropTypes.bool,
    isLooped: PropTypes.bool,
    isMuted: PropTypes.bool,

    onPlayerReady: PropTypes.func,
    onVideoReady: PropTypes.func,
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    onEnd: PropTypes.func,
    onTimeChange: PropTypes.func,
    onFullscreenChange: PropTypes.func,
    onError: PropTypes.func,
    onSeek: PropTypes.func,
    progress: PropTypes.number,
  }

  static defaultProps = {
    accountId: '5344802162001',
    playerId: '1cMNiwC9oQ',
    // playerId: 'rkcQq7gAe',
    videoId: '5450137526001',

    hasAutoplay: false,
    hasControls: false,
    isMuted: false,
    isLooped: false,
  }

  playerRef = React.createRef()
  currentTime = 0

  state = {
    screen: SCREEN_NONE,
    status: STATUS_LOADING,
  }

  componentDidMount () {
    const {
      progress,
      beforescreenComponent,
    } = this.props

    if (window.bc && window.videojs) {
      this.setupVideo()
    } else {
      this.setupScript()
    }

    if (progress) {
      this.playerRef.current.currentTime = progress
    }

    if (beforescreenComponent) {
      this.setState({ screen: SCREEN_BEFORE })
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.videoId !== nextProps.videoId) {
      this.replaceWith(nextProps.videoId)
    }
  }

  componentWillUnmount () {
    // clean listeners
    this.video.off('play')
    this.video.off('pause')
    this.video.off('ended')
    this.video.off('seeking')
    this.video.off('fullscreenchange')
    // remove DOM element
    this.video.dispose()
  }

  setupScript = () => {
    const {
      playerId,
      accountId,
    } = this.props

    const script = document.createElement('script')
    script.src = `//players.brightcove.net/${accountId}/${playerId}_default/index.min.js`
    document.body.appendChild(script)
    script.onload = this.setupVideo
  }

  setupVideo = () => {
    window.bc(this.playerRef.current, {
      playbackRates: [0.5, 1, 1.5, 2],
    })
    this.video = window.videojs(this.playerRef.current)
    this.video.ready(this.handlePlayerReady)
    this.setState({ status: STATUS_READY })
  }

  handlePlayerReady = () => {
    const {
      onSeek,
      onPause,
      onPlay,
      onPlayerReady,
      onVideoReady,
      pausescreenComponent,
    } = this.props

    this.video.on('play', () => {
      if (onPlay) {
        onPlay(this.video)
      }

      this.setState({ screen: SCREEN_NONE })
    })

    this.video.on('pause', () => {
      if (onPause) {
        onPause(this.video)
      }

      if (pausescreenComponent) {
        this.setState({ screen: SCREEN_PAUSE })
      }
    })

    this.video.on('fullscreenchange', this.handleFullscreenChange)
    this.video.on('ended', this.handleVideoEnd)

    this.video.on('seeking', () => {
      this.setState({ screen: SCREEN_NONE })
      if (onSeek) {
        onSeek(this.video)
      }
    })

    this.video.on('loadedmetadata', () => {
      this.checkBuffers()
      if (onVideoReady) {
        onVideoReady(this.video)
      }
    })

    if (onPlayerReady) {
      onPlayerReady(this.video)
    }

    this.startSecondsTimer()
  }

  handleVideoEnd = () => {
    this.currentTime = 0
    this.hasEnded = true

    const {
      isLooped,
      endscreenComponent,
      onEnd,
    } = this.props

    if (isLooped) {
      this.video.play()
    } else if (endscreenComponent) {
      this.setState({ screen: SCREEN_END })
    }

    if (onEnd) {
      onEnd(this.video)
    }
  }

  handleFullscreenChange = () => {
    const { onFullscreenChange } = this.props
    if (onFullscreenChange) {
      onFullscreenChange(this.video.isFullscreen())
    }
  }

  handleReplayClick = () => {
    this.video.play()

    this.setState({ screen: SCREEN_NONE })
  }

  resumeVideo = () => {
    this.video.play()
  }

  handleKeyDown = (e) => {
    const { target, key } = e
    const selectingVolume = target.className.indexOf('vjs-volume-bar') > -1 ||
      target.className.indexOf('vjs-volume-menu-button') > -1

    if (selectingVolume) {
      // trying to prevent these listeners from affecting accessibility controls
      return
    }

    switch (key) {
      case 'ArrowLeft': {
        e.preventDefault()
        this.skipBackwards()
        break
      }
      case 'ArrowRight': {
        e.preventDefault()
        this.skipForward()
        break
      }
      case ' ': {
        e.preventDefault()
        this.playPause()
        break
      }
      case 'ArrowUp': {
        e.preventDefault()
        this.increaseVolume()
        break
      }
      case 'ArrowDown': {
        e.preventDefault()
        this.decreaseVolume()
        break
      }
      default:
    }
  }

  increaseVolume = () => {
    const currentVolume = this.video.volume()
    const newVolume = Math.min(currentVolume + VOLUME_INTERVAL, 1)
    this.video.volume(newVolume)
  }

  decreaseVolume = () => {
    const currentVolume = this.video.volume()
    const newVolume = Math.max(currentVolume - VOLUME_INTERVAL, 0)
    this.video.volume(newVolume)
  }

  playPause = () => {
    if (this.video.paused()) {
      this.video.play()
    } else {
      this.video.pause()
    }
  }

  skipForward = () => {
    const currentTime = Math.floor(this.video.currentTime())
    const newTime = Math.min(this.video.duration(), currentTime + SKIP_INTERVAL)
    this.video.currentTime(newTime)
  }

  skipBackwards = () => {
    const currentTime = Math.floor(this.video.currentTime())
    const newTime = Math.max(0, currentTime - SKIP_INTERVAL)
    this.video.currentTime(newTime)
  }

  replaceWith = (videoId) => {
    if (this.video.customOverlay) {
      this.video.customOverlay.close()
    }

    this.video.catalog.getVideo(videoId, (error, video) => {
      if (error && this.props.onError) {
        this.props.onError(error, this.video)
        return
      }
      this.video.catalog.load(video)
      this.hasEnded = false
      this.currentTime = 0
      this.setState({
        screen: SCREEN_NONE,
      })
      this.video.play()
    })
  }

  startSecondsTimer = () => {
    if (this.props.onTimeChange) {
      this.video.on('timeupdate', () => {
        const currentTime = Math.floor(this.video.currentTime())
        const remainingTime = Math.floor(this.video.remainingTime())
        if (this.currentTime < currentTime) {
          this.currentTime = currentTime
          this.props.onTimeChange(currentTime, remainingTime)
        }
      })
    }
  }

  // videoJS fix for buffers
  checkBuffers = () => {
    const { videoId, hasAutoplay } = this.props
    // eslint-disable-next-line
    if (this.video && this.video.tech_.hls) {
      // eslint-disable-next-line
      const { mediaSource } = this.video.tech_.hls
      // eslint-disable-next-line
      const videoBuffer = mediaSource.videoBuffer_
      // eslint-disable-next-line
      const audioBuffer = mediaSource.audioBuffer_
      if (videoBuffer && !audioBuffer) {
        this.video.reset()
        this.video.catalog.getVideo(
          videoId,
          (error, video) => {
            this.video.catalog.load(video)
            if (hasAutoplay) {
              this.video.play()
            }
          },
        )
      }
    }
  }

  render () {
    const {
      endscreenComponent,
      beforescreenComponent,
      pausescreenComponent,
      videoId,
      playerId,
      hasAutoplay,
      hasControls,
      isMuted,
      accountId,
    } = this.props

    const {
      screen,
    } = this.state

    const isScreenOpen = screen !== SCREEN_NONE

    const containerClasses = cn({
      'bc-player': true,
      'bc-player--screen-open': isScreenOpen,
    })

    const playerClasses = cn(
      'bc-player__video',
      'bc-player__video--default',
      'video-js',
    )

    // eslint-disable-next-line
    const videoRoot = this.video ? this.video.el_ : undefined

    return (
      <div
        className={containerClasses}
        onKeyDown={this.handleKeyDown}
      >
        <div className='bc-player__wrapper'>
          <video
            data-application-id
            ref={this.playerRef}
            className={playerClasses}
            data-embed='default'
            data-video-id={videoId}
            data-player-id={playerId}
            data-account={accountId}
            autoPlay={hasAutoplay}
            muted={isMuted}
            controls={hasControls}
          />
        </div>

        {beforescreenComponent &&
          <VideoPlayerScreen
            isActive={screen === SCREEN_BEFORE}
            variation='beforescreen'
            videoRoot={videoRoot}
          >
            {renderChildren(beforescreenComponent, {
              onResume: this.resumeVideo,
              isActive: screen === SCREEN_BEFORE,
            })}
          </VideoPlayerScreen>
        }

        {pausescreenComponent &&
          <VideoPlayerScreen
            isActive={screen === SCREEN_PAUSE}
            variation='pausescreen'
            videoRoot={videoRoot}
          >
            {renderChildren(pausescreenComponent, {
              onResume: this.resumeVideo,
              isActive: screen === SCREEN_PAUSE,
            })}
          </VideoPlayerScreen>
        }

        {endscreenComponent &&
          <VideoPlayerScreen
            isActive={screen === SCREEN_END}
            variation='endscreen'
            videoRoot={videoRoot}
          >
            {renderChildren(endscreenComponent, {
              onReplay: this.handleReplayClick,
              isActive: screen === SCREEN_END,
            })}
          </VideoPlayerScreen>
        }
      </div>
    )
  }
}

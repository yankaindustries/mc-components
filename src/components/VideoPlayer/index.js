import React, { PureComponent } from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'

import VideoPlayerScreen from '../VideoPlayerScreen'
import { renderChildren } from '../helpers'

const VOLUME_INTERVAL = 0.05
const SKIP_INTERVAL = 5

export default class VideoPlayer extends PureComponent {
  static propTypes = {
    playerId: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired,
    /** Pass in a react component to be shown at the end of the video. */
    endscreenComponent: PropTypes.func,
    /** Pass in a react component to be shown before video starts. */
    beforescreenComponent: PropTypes.func,
    /** Pass in a react component to be shown when the video is paused. */
    pausescreenComponent: PropTypes.func,
    /**
     * Keeps video constrained to standard sizes, eg 1080x720.
     * Used to keep videos looking crisp.
     * Scales responsively.
     * */
    hasBreakpoints: PropTypes.bool,
    hasControls: PropTypes.bool,
    isMuted: PropTypes.bool,
    isLooped: PropTypes.bool,
    hasAutoplay: PropTypes.bool,
    /** Player has been initialized */
    onPlayerReady: PropTypes.func,
    /** Video is loaded and ready to play */
    onVideoReady: PropTypes.func,
    onPlay: PropTypes.func,
    onPause: PropTypes.func,
    onEnd: PropTypes.func,
    onTimeChange: PropTypes.func,
    onError: PropTypes.func,
    onSeek: PropTypes.func,
    accountId: PropTypes.string,
    progress: PropTypes.number,
  }

  static defaultProps = {
    playerId: 'rkcQq7gAe',
    videoId: '5450137526001',
    isLooped: false,
    isMuted: false,
    hasAutoplay: true,
    hasControls: true,
    hasBreakpoints: false,
    accountId: '5344802162001',
  }

  playerRef = React.createRef()
  currentTime = 0

  state = {
    endscreenOpen: false,
    beforescreenOpen: false,
    pausescreenOpen: false,
  }

  componentDidMount () {
    if (window.bc && window.videojs) {
      this.setupVideo()
    } else {
      const { playerId, accountId } = this.props

      const bcScript = document.createElement('script')
      bcScript.src = `//players.brightcove.net/${accountId}/${playerId}_default/index.min.js`

      document.body.appendChild(bcScript)
      // Call a function to play the video once player's JavaScropt loaded
      bcScript.onload = this.setupVideo
    }
    const { progress, beforescreenComponent } = this.props

    if (progress) {
      this.playerRef.current.currentTime = progress
    }

    if (beforescreenComponent) {
      this.setState({ beforescreenOpen: true })
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.videoId !== nextProps.videoId) {
      this.replaceWith(nextProps.videoId)
    }
  }

  hideOpenScreens = () => {
    const { beforescreenOpen, pausescreenOpen, endscreenOpen } = this.state
    if (beforescreenOpen) {
      this.setState({ beforescreenOpen: false })
    }
    if (pausescreenOpen) {
      this.setState({ pausescreenOpen: false })
    }
    if (endscreenOpen) {
      this.setState({ endscreenOpen: false })
    }
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
      this.hideOpenScreens()
      if (onPlay) {
        onPlay(this.video)
      }
    })

    this.video.on('pause', () => {
      if (pausescreenComponent) {
        this.setState({ pausescreenOpen: true })
      }
      if (onPause) {
        onPause(this.video)
      }
    })

    this.video.on('ended', this.handleVideoEnd)

    this.video.on('seeking', () => {
      this.hideOpenScreens()
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
      pausescreenComponent,
      onEnd,
    } = this.props
    if (isLooped) {
      this.video.play()
    } else if (endscreenComponent) {
      this.setState({ endscreenOpen: true })
    }
    if (pausescreenComponent) {
      this.setState({ pausescreenOpen: false })
    }
    if (onEnd) {
      onEnd(this.video)
    }
  }

  handleReplayClick = () => {
    this.video.play()
    this.setState({
      endscreenOpen: false,
    })
  }

  resumeVideo = () => { this.video.play() }

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

  setupVideo = () => {
    window.bc(this.playerRef.current, {
      playbackRates: [0.5, 1, 1.5, 2],
    })
    this.video = window.videojs(this.playerRef.current)
    this.video.ready(this.handlePlayerReady)
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
        endscreenOpen: false,
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
      hasBreakpoints,
      videoId,
      playerId,
      hasAutoplay,
      hasControls,
      isMuted,
      accountId,
    } = this.props
    const {
      endscreenOpen,
      beforescreenOpen,
      pausescreenOpen,
    } = this.state
    const isScreenOpen = endscreenOpen || beforescreenOpen || pausescreenOpen
    // eslint-disable-next-line
    const videoRoot = this.video ? this.video.el_ : undefined

    return (
      <div
        className={cn('bc-player', {
          'bc-player--screen-open': isScreenOpen,
          'bc-player--has-breakpoints': hasBreakpoints,
        })}
        onKeyDown={this.handleKeyDown}
      >
        {endscreenComponent && videoRoot &&
          <VideoPlayerScreen
            isActive={endscreenOpen}
            variation='endscreen'
            videoRoot={videoRoot}
          >
            {renderChildren(
              endscreenComponent,
              { onReplay: this.handleReplayClick, isActive: endscreenOpen })
            }
          </VideoPlayerScreen>
        }
        {beforescreenComponent && videoRoot &&
          <VideoPlayerScreen
            isActive={beforescreenOpen}
            variation='beforescreen'
            videoRoot={videoRoot}
          >
            {renderChildren(
              beforescreenComponent,
              { onResume: this.resumeVideo, isActive: beforescreenOpen })
            }
          </VideoPlayerScreen>
        }
        {pausescreenComponent && videoRoot &&
          <VideoPlayerScreen
            isActive={pausescreenOpen}
            variation='pausescreen'
            videoRoot={videoRoot}
          >
            {renderChildren(
              pausescreenComponent,
              { onResume: this.resumeVideo, isActive: pausescreenOpen })
            }
          </VideoPlayerScreen>
        }
        <div className='bc-player__wrapper'>
          <video
            data-application-id
            ref={this.playerRef}
            className={cn(
              'video-js',
              'bc-player__video',
              'bc-player__video--default',
            )}
            data-embed='default'
            data-video-id={videoId}
            data-player-id={playerId}
            data-account={accountId}
            autoPlay={hasAutoplay ? 'autoplay' : ''}
            muted={isMuted ? 'muted' : ''}
            controls={hasControls ? 'controls' : ''}
          />
        </div>
      </div>
    )
  }
}

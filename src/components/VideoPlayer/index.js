import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import ReplayIcon from '../icons/ReplayIcon'

export default class VideoPlayer extends React.PureComponent {
  static propTypes = {
    playerId: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired,
    /** Player theme styles, must have correlating styles to go with it */
    theme: PropTypes.oneOf(['default', 'chapter']),
    /** Pass in a react component to be shown at the end of the video. */
    endscreenComponent: PropTypes.element,
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
    accountId: PropTypes.string,
  }

  static defaultProps = {
    playerId: 'rkcQq7gAe',
    videoId: '5450137526001',
    theme: 'default',
    isLooped: false,
    isMuted: false,
    hasAutoplay: true,
    hasControls: true,
    hasBreakpoints: false,
    accountId: '5344802162001',
  }

  constructor (props) {
    super(props)
    this.playerRef = React.createRef()
  }

  state = { endscreenOpen: false }

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
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.videoId !== nextProps.videoId) {
      this.replaceWith(nextProps.videoId)
    }
  }

  handlePlayerReady = () => {
    const {
      onPlay, onPause, onVideoReady, onPlayerReady,
    } = this.props

    if (onPlay) {
      this.video.on('play', () => {
        onPlay(this.video)
      })
    }
    if (onPause) {
      this.video.on('pause', () => {
        onPause(this.video)
      })
    }

    this.video.on('ended', this.handleVideoEnd)

    if (onVideoReady) {
      this.video.on('loadedmetadata', () => {
        onVideoReady(this.video)
      })
    }
    if (onPlayerReady) {
      onPlayerReady(this.video)
    }

    this.startSecondsTimer()
  }

  handleVideoEnd = () => {
    this.currentTime = 0
    this.hasEnded = true
    if (this.props.isLooped) {
      this.video.play()
    } else if (this.props.endscreenComponent) {
      this.setState({
        endscreenOpen: true,
      })
    }
    if (this.props.onEnd) {
      this.props.onEnd(this.video)
    }
  }

  handleReplayClick = () => {
    this.video.play()
    this.setState({
      endscreenOpen: false,
    })
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
        if (this.currentTime < currentTime) {
          this.currentTime = currentTime
          this.props.onTimeChange(currentTime)
        }
      })
    }
  }

  renderEndScreen = () => (
      <div className='bc-player-endscreen'>
        <ReplayIcon
          className='bc-player-endscreen__replay'
          onClick={this.handleReplayClick}
        />
        <div className='bc-player-endscreen__content'>
          {this.props.endscreenComponent}
        </div>
      </div>
  )

  render () {
    const {
      endscreenComponent,
      hasBreakpoints,
      theme,
      videoId,
      playerId,
      hasAutoplay,
      hasControls,
      isMuted,
      accountId,
    } = this.props

    return (
      <div
        className={cn('bc-player', {
          'bc-player--endscreen-open': this.state.endscreenOpen,
          'bc-player--has-breakpoints': hasBreakpoints,
        })}
      >
        {endscreenComponent && this.renderEndScreen()}
        <div className='bc-player__wrapper'>
          <video
            data-application-id
            ref={this.playerRef}
            className={cn(
              'video-js',
              'bc-player__video',
              `bc-player__video--${theme}`,
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

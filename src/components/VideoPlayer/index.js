import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'

export default class VideoPlayer extends React.PureComponent {
  static defaultProps = {
    playerId: 'rkcQq7gAe',
    videoId: '5450137526001',
    theme: 'default',
    isLooped: false,
    isMuted: false,
    hasAutoplay: true,
    hasControls: true,
    hasBreakpoints: false,
  }

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
  }

  state = { endscreenOpen: false }

  componentWillReceiveProps (nextProps) {
    if (this.props.videoId !== nextProps.videoId) {
      this.replaceWith(nextProps.videoId)
    }
  }

  componentDidMount () {
    if (window.bc && window.videojs) {
      window.bc(this.playerRef, {
        playbackRates: [0.5, 1, 1.5, 2],
      })
      this.video = window.videojs(this.playerRef)
      this.video.ready(this.handlePlayerReady)
    }
  }

  handlePlayerReady = () => {
    if (this.props.onPlay) {
      this.video.on('play', () => {
        this.props.onPlay(this.video)
      })
    }
    if (this.props.onPause) {
      this.video.on('pause', () => {
        this.props.onPause(this.video)
      })
    }

    this.video.on('ended', this.handleVideoEnd)

    if (this.props.onVideoReady) {
      this.video.on('loadedmetadata', () => {
        this.props.onVideoReady(this.video)
      })
    }
    if (this.props.onPlayerReady) {
      this.props.onPlayerReady(this.video)
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
        <div
          className='bc-player-endscreen__replay'
          onClick={this.handleReplayClick}
        >
          <svg
            height='48'
            viewBox='0 0 48 48'
            width='48'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0 0h48v48H0z'
              fill='none'
            />
            <path
              fill='#fff'
              d='M24 10V2L14 12l10 10v-8c6.63 0 12 5.37 12 12s-5.37 12-12 12-12-5.37-12-12H8c0 8.84 7.16 16 16 16s16-7.16 16-16-7.16-16-16-16z'
            />
          </svg>
        </div>
        <div className='bc-player-endscreen__content'>
          {this.props.endscreenComponent}
        </div>
      </div>
  )

  render () {
    return (
      <div
        className={cn('bc-player', {
          'bc-player--endscreen-open': this.state.endscreenOpen,
          'bc-player--has-breakpoints': this.props.hasBreakpoints,
        })}
      >
        {this.props.endscreenComponent && this.renderEndScreen()}
        <div className='bc-player__wrapper'>
          <video
            data-application-id
            ref={(ref) => {
              this.playerRef = ref
            }}
            className={cn(
              'video-js',
              'bc-player__video',
              `bc-player__video--${this.props.theme}`,
            )}
            data-embed='default'
            data-video-id={this.props.videoId}
            data-player-id={this.props.playerId}
            data-account='5344802162001'
            autoPlay={this.props.hasAutoplay ? 'autoplay' : ''}
            muted={this.props.isMuted ? 'muted' : ''}
            controls={this.props.hasControls ? 'controls' : ''}
          />
        </div>
      </div>
    )
  }
}

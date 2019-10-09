import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import VideoPlayer from '../VideoPlayer'
import Unmute from '../Icons/Muted'
import Mute from '../Icons/Unmuted'
import { PROP_TYPE_CHILDREN } from '../constants'


export default class TileVideo extends PureComponent {
  static propTypes = {
    autoPlay: PropTypes.bool,
    children: PROP_TYPE_CHILDREN,
    className: PropTypes.string,
    controls: PropTypes.bool,
    loop: PropTypes.bool,
    muted: PropTypes.bool,
    onVideoReady: PropTypes.func,
    onEnd: PropTypes.func,
    playerRef: PropTypes.any,
    videoId: PropTypes.string.isRequired,
  }

  static defaultProps = {
    autoPlay: false,
    controls: false,
    loop: false,
    muted: false,
  }

  constructor (props) {
    super(props)

    this.state = {
      muted: props.muted,
      show: false,
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.muted !== prevProps.muted) {
      this.setState({ muted: this.props.muted })
    }
  }

  onMuteClick = (event) => {
    event.preventDefault()
    event.stopPropagation()

    this.setState(state => ({
      muted: !state.muted,
    }))
  }

  handleVideoReady = (args) => {
    this.setState({
      show: true,
    })

    if (this.props.onVideoReady) {
      this.props.onVideoReady(args)
    }
  }

  handleVideoEnd = (args) => {
    if (!this.props.loop) {
      this.setState({
        show: false,
      })

      if (this.props.onEnd) {
        this.props.onEnd(args)
      }
    }
  }

  render () {
    const {
      autoPlay,
      children,
      className,
      controls,
      loop,
      playerRef,
      videoId,
      ...restProps
    } = this.props

    const {
      muted,
      show,
    } = this.state

    const classes = cn({
      [className]: className,
      'mc-tile__component': true,
      'mc-tile-video': true,
      'mc-tile-video--show': show,
      'mc-tile-video--muted': muted,
    })

    return (
      <div className={classes}>
        {!controls &&
          <span
            className='mc-tile-video__mute'
            onClick={this.onMuteClick}
          >
            {muted
              ? <Unmute />
              : <Mute />
            }
          </span>
        }

        <div className='mc-tile-video__video'>
          <VideoPlayer
            {...restProps}
            videoId={videoId}
            hasAutoplay={autoPlay}
            hasControls={controls}
            isLooped={loop}
            isMuted={muted}
            onVideoReady={this.handleVideoReady}
            onEnd={this.handleVideoEnd}
            playerRef={playerRef}
          />
        </div>

        {children}
      </div>
    )
  }
}

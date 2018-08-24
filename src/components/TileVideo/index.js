import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Unmute from '../Icons/Muted'
import Mute from '../Icons/Unmuted'

const ACCOUNT_ID = '5344802162001'
const PLAYER_ID = 'rkcQq7gAe'


export default class TileVideo extends PureComponent {
  static propTypes = {
    autoPlay: PropTypes.bool,
    children: PropTypes.element,
    controls: PropTypes.bool,
    className: PropTypes.string,
    loop: PropTypes.bool,
    muted: PropTypes.bool,
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

    this.playerRef = React.createRef()

    this.state = {
      muted: props.muted,
    }
  }

  componentDidMount () {
    if (window.bc && window.videojs) {
      window.bc(this.playerRef.current, {
        playbackRates: [0.5, 1, 1.5, 2],
      })
      window.videojs(this.playerRef.current)
    }
  }

  onMuteClick = () => {
    this.setState(state => ({
      muted: !state.muted,
    }))
  }

  render () {
    const {
      children,
      className,
      controls,
      videoId,
      ...restProps
    } = this.props

    const {
      muted,
    } = this.state

    const classes = [
      'mc-tile__component',
      'mc-tile-video__video',
      'bc-player__video',
      'bc-player__video--default',
      'mc-tile-video__video',
      'video-js',
      className || '',
    ].join(' ')

    return (
      <div className='mc-tile-video mc-tile__component'>
        {!controls &&
          <a className='mc-tile-video__mute' onClick={this.onMuteClick}>
            {muted ? <Unmute /> : <Mute />}
          </a>
        }

        <video
          ref={this.playerRef}
          className={classes}
          data-embed='default'
          data-video-id={videoId}
          data-player-id={PLAYER_ID}
          data-account={ACCOUNT_ID}
          controls={controls}
          muted={muted}
          {...restProps}
        />

        {children}
      </div>
    )
  }
}

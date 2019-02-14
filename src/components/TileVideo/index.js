import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import VideoPlayer from '../VideoPlayer'
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

  onMuteClick = (event) => {
    event.preventDefault()
    this.setState(state => ({
      muted: !state.muted,
    }))
  }

  onReady = () => {
    this.setState({
      ready: true,
    })
  }

  render () {
    const {
      autoPlay,
      children,
      className,
      controls,
      videoId,
      ...restProps
    } = this.props

    const {
      muted,
      ready,
    } = this.state

    const classes = cn({
      [className]: className,
      'mc-tile__component': true,
      'mc-tile-video': true,
      'mc-tile-video--ready': ready,
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
            accountId={ACCOUNT_ID}
            hasAutoplay={autoPlay}
            hasControls={controls}
            isMuted={muted}
            playerId={PLAYER_ID}
            videoId={videoId}
            onVideoReady={this.onReady}
            {...restProps}
          />
        </div>

        {children}
      </div>
    )
  }
}

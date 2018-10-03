import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

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
      'mc-tile-video__video',
      className || '',
    ].join(' ')

    return (
      <div className='mc-tile-video mc-tile__component'>
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

        <VideoPlayer
          className={classes}
          accountId={ACCOUNT_ID}
          hasControls={controls}
          isMuted={muted}
          playerId={PLAYER_ID}
          videoId={videoId}
          {...restProps}
        />

        {children}
      </div>
    )
  }
}

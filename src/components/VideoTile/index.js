import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

import VideoProgress from '../VideoProgress'
import BrightcoveVideo from '../Video/BrightcoveVideo'
import ScaleContainer from '../ScaleContainer'
import playImage from '../../assets/play-with-circle.svg'

export default class VideoTile extends PureComponent {
  static propTypes = {
    slug: PropTypes.string.isRequired,
    brightcoveVideoId: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    saveVideoProgress: PropTypes.func,
    showPlayIcon: PropTypes.bool,
    showBackgroundGradient: PropTypes.bool,
    progress: PropTypes.number,
    children: PropTypes.func,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    showPlayIcon: true,
    showBackgroundGradient: false,
    progress: 0,
    saveVideoProgress: () => {},
  }

  state = {
    startLoadingVideo: false,
    videoReady: false,
  }

  onMouseEnter = () => {
    this.setState({ startLoadingVideo: true })
  }

  onVideoReady = () => {
    this.setState({ videoReady: true })
  }

  handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render () {
    const {
      showPlayIcon,
      showBackgroundGradient,
      slug,
      brightcoveVideoId,
      progress,
      imageUrl,
      saveVideoProgress,
      children,
    } = this.props
    const { startLoadingVideo, videoReady } = this.state

    return (
      <ScaleContainer
        className='video-tile'
        hoverClass='video-tile--hover'
        zoomClass='video-tile--zoom'
        onMouseEnter={this.onMouseEnter}
      >
        {(isScaled, reverseScale) => (
          <Fragment>
            <a href={slug} onClick={this.handleClick}>
              <BrightcoveVideo
                onVideoReady={this.onVideoReady}
                startLoading={startLoadingVideo}
                show={videoReady && Boolean(isScaled)}
                imageBackground={imageUrl}
                backgroundGradient={showBackgroundGradient}
                videoId={brightcoveVideoId}
                progress={progress}
                saveVideoProgress={saveVideoProgress}
              >
                {showPlayIcon && (
                  <Fragment>
                    <img
                      src={playImage}
                      className='play-center-image'
                      alt='play'
                    />
                    <VideoProgress progress={progress} />
                  </Fragment>
                )}
              </BrightcoveVideo>
            </a>
            {children(isScaled, reverseScale)}
          </Fragment>
        )}
      </ScaleContainer>
    )
  }
}

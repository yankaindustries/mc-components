import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

import AudioButton from '../../AudioButton'
import brightcove from '../../../utils/brightcove'

export default class BrightcoveVideo extends Component {
  static propTypes = {
    videoId: PropTypes.string.isRequired,
    onVideoReady: PropTypes.func.isRequired,
    saveVideoProgress: PropTypes.func.isRequired,
    show: PropTypes.bool,
    startLoading: PropTypes.bool,
    progress: PropTypes.number,
    children: PropTypes.node,
    imageBackground: PropTypes.string,
    backgroundGradient: PropTypes.bool,
  }

  static defaultProps = {
    show: false,
    startLoading: false,
    progress: 0,
  }

  state = {
    opacity: 0,
    myPlayer: undefined,
    readyToPlay: false,
    isMuted: true,
  }

  videoContainer = React.createRef()

  componentWillReceiveProps (nextProps) {
    const { myPlayer, readyToPlay } = this.state
    const { show, startLoading, saveVideoProgress } = this.props
    const shouldShow = !show && nextProps.show
    const shouldHide = show && !nextProps.show
    const shouldStartLoading = !startLoading && nextProps.startLoading
    if (shouldStartLoading) {
      if (!myPlayer) {
        this.createPlayer()
      }
    }
    if (shouldShow) {
      if (myPlayer && readyToPlay) {
        this.setState({ opacity: 1 })
        myPlayer.play()
        myPlayer.show()
      }
    } else if (shouldHide && myPlayer) {
      this.setState({ opacity: 0 })
      // prettier-ignore
      const progress = (myPlayer.currentTime() * 100) / myPlayer.duration()
      saveVideoProgress(progress)
      myPlayer.pause()
      myPlayer.hide()
    }
  }

  createPlayer = () => {
    const { videoId, progress, onVideoReady } = this.props
    const videoHtmlId = `video-${videoId}-${uuid()}`
    const playerHTML = brightcove.createPlayerHTML({
      id: videoId,
      htmlId: videoHtmlId,
    })
    this.videoContainer.current.innerHTML = playerHTML
    brightcove.init().then(() => {
      const { videojs } = window
      const myPlayer = videojs(videoHtmlId)
      myPlayer.ready(() => {
        myPlayer.on('loadedmetadata', () => {
          const currentTime = myPlayer.duration() * (progress / 100)
          myPlayer.currentTime(currentTime)
          this.setState({ myPlayer })
        })
        myPlayer.on('canplay', () => {
          onVideoReady()
          myPlayer.play()
          this.setState({ opacity: 1, readyToPlay: true })
        })
      })
    })
  }

  enableSound = (e) => {
    e.preventDefault()
    const { isMuted } = this.state
    const { myPlayer } = this.state
    myPlayer.muted(!isMuted)
    this.setState({ isMuted: !isMuted })
  }

  backgroundStyle = () => {
    const { imageBackground, show, backgroundGradient } = this.props
    let backgroundImageStyle = `url('${imageBackground}')`
    if (backgroundGradient) {
      backgroundImageStyle = `
        linear-gradient(to top, #000, rgba(0,0,0,.75) 20%, rgba(0,0,0, 0) 40%),
        ${backgroundImageStyle}
      `
    }
    return {
      backgroundImage: backgroundImageStyle,
      opacity: show ? 0 : 1,
      transition: 'opacity .75s',
    }
  }

  render () {
    const { show, children } = this.props
    const { opacity, isMuted } = this.state

    return (
      <div
        className='tile tile--1000x609 tile--no-hover'
      >
        {show &&
          <div className='mc-brightcove__audio' onClick={this.enableSound}>
            <AudioButton isMuted={isMuted} />
          </div>
        }
        <div
          ref={this.videoContainer}
          className='mc-brightcove-container'
          style={{
            opacity,
            display: show ? 'block' : 'none',
            transition: 'opacity .75s',
          }}
        />
        <div
          className='background'
          style={this.backgroundStyle()}
        />
        {!show && <div className='content'>{children}</div>}
      </div>
    )
  }
}

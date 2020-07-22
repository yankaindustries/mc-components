import React, { PureComponent, Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'

import VideoPlayer from './'
import Background from '../Background'
import Tile from '../Tile'
import TileImage from '../TileImage'
import TileVideo from '../TileVideo'
import HoverHandler from '../HoverHandler'
import AnimationHandler from '../AnimationHandler'

import shondaRhimesThumbnail from '../../utils/shonda-rhimes.png'


const screenStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}


class VideoPlayerStory extends PureComponent {
  state = {
    activeVideo: '6116577124001',
  }

  handleTileClick = () =>
    this.setState({ activeVideo: '6116577124001' })

  renderBeforeScreen = ({ onResume }) =>
    <Background color='dim' fit='container'>
      <div style={screenStyle}>
        <p>Start playing your video</p>
        <button onClick={onResume}>
          START
        </button>
      </div>
    </Background>

  renderPauseScreen = ({ onResume }) =>
    <Background color='dim' fit='container'>
      <div style={screenStyle}>
        <p>Your video is paused</p>
        <button onClick={onResume}>
          CONTINUE
        </button>
      </div>
    </Background>

  renderEndScreen = ({ onReplay }) =>
    <Background color='dim' fit='container'>
      <div style={screenStyle}>
        <p>Your video has ended</p>
        <button onClick={onReplay}>
          REPLAY
        </button>
      </div>
    </Background>

  render () {
    return (
      <div className='container'>
        <DocHeader
          title='VideoPlayer'
          description='A dynamic and simple to set up video player.'
        />

        <DocSection title='Demo'>
          <div className='row'>
            <div className='col-12'>
              <VideoPlayer
                videoId={this.state.activeVideo}
                beforescreenComponent={this.renderBeforeScreen}
                pausescreenComponent={this.renderPauseScreen}
                endscreenComponent={this.renderEndScreen}
                hasAutoplay
                hasControls
              />
            </div>

            {[1, 2, 3].map(key =>
              <div
                key={key}
                className='col-sm-4'
                onClick={this.handleTileClick}
              >
                <HoverHandler>
                  {({ hovering }) =>
                    <AnimationHandler type='zoom' animating={hovering}>
                      <Tile>
                        <Fragment>
                          <TileImage imageUrl={shondaRhimesThumbnail} />
                        </Fragment>

                        {hovering &&
                          <TileVideo
                            videoId='6078892423001'
                            autoPlay
                          />
                        }
                      </Tile>
                    </AnimationHandler>
                  }
                </HoverHandler>
              </div>,
            )}
          </div>
        </DocSection>
      </div>
    )
  }
}


storiesOf('Components|VideoPlayer', module)
  .add('Summary', withAddons({
    path: 'components/VideoPlayer/index.stories.js',
    component: VideoPlayer,
  })(() => <VideoPlayerStory />))

import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withProps } from '../../utils/addon-props'

import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'

import VideoPlayer from './'
import Tile from '../Tile'
import TileCaption from '../TileCaption'
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


storiesOf('Components|VideoPlayer', module)
  .add('Summary', withProps(VideoPlayer)(() =>
    <div className='container'>
      <DocHeader
        title='VideoPlayer'
        description='A dynamic and simple to set up video player.'
      />

      <DocSection title='Demo'>
        <div className='row'>
          <div className='col-12'>
            <VideoPlayer
              hasAutoplay={false}
              beforescreenComponent={
                ({ onResume }) =>
                  <div style={screenStyle}>
                    <p>Start playing your video</p>
                    <button onClick={onResume}>
                      START
                    </button>
                  </div>
              }
              pausescreenComponent={
                ({ onResume }) =>
                  <div style={screenStyle}>
                    <p>Your video is paused</p>
                    <button onClick={onResume}>
                      CONTINUE
                    </button>
                  </div>
              }
              endscreenComponent={
                ({ onReplay }) =>
                  <div style={screenStyle}>
                    <p>Your video has ended</p>
                    <button onClick={onReplay}>
                      REPLAY
                    </button>
                  </div>
              }
            />
          </div>

          {[1, 2, 3].map(key =>
            <div className='col-sm-4' key={key}>
              <HoverHandler>
                {({ intent }) =>
                  <AnimationHandler type='zoom' animating={intent}>
                    <Tile>
                      <Fragment>
                        <TileImage imageUrl={shondaRhimesThumbnail} />
                        <TileCaption>
                          <h5 className='mc-text-h5 mc-text--uppercase'>
                            Shonda Rhimes
                          </h5>
                          <p className='mc-text--muted'>
                            Teaches Writing For Television
                          </p>
                        </TileCaption>
                      </Fragment>

                      {intent &&
                        <TileVideo />
                      }
                    </Tile>
                  </AnimationHandler>
                }
              </HoverHandler>
            </div>,
          )}
        </div>
      </DocSection>

      <DocSection title='Properties'>
        <PropExample
          name='accountId | playerId | videoId'
          type='string'
          description='
            The default values for these are for the MasterClass account
            of the Brightcove service.
          '
        >
          <div className='row'>
            <div className='col-lg-4'>
              <VideoPlayer hasAutoplay={false} />
            </div>
          </div>
        </PropExample>

        <div className='row'>
          <div className='col-lg-4'>
            <PropExample
              name='beforeScreenComponent'
              type='function({ onResume, isActive })'
              description='Renders a component before the video plays.'
            >
              <VideoPlayer
                hasAutoplay={false}
                beforescreenComponent={
                  ({ onResume }) =>
                    <div style={screenStyle}>
                      <p>Start playing your video</p>
                      <button onClick={onResume}>
                        START
                      </button>
                    </div>
                }
              />
            </PropExample>
          </div>

          <div className='col-lg-4'>
            <PropExample
              name='pausescreenComponent'
              type='function({ onResume, isActive })'
              description='Renders a component when the video is paused.'
            >
              <VideoPlayer
                hasAutoplay={false}
                pausescreenComponent={
                  ({ onResume }) =>
                    <div style={screenStyle}>
                      <p>Your video is paused</p>
                      <button onClick={onResume}>
                        CONTINUE
                      </button>
                    </div>
                }
              />
            </PropExample>
          </div>

          <div className='col-lg-4'>
            <PropExample
              name='endscreenComponent'
              type='function({ onReplay, isActive })'
              description='Renders a component when the video is done.'
            >
              <VideoPlayer
                hasAutoplay={false}
                progress={11}
                endscreenComponent={
                  ({ onReplay }) =>
                    <div style={screenStyle}>
                      <p>Your video has ended</p>
                      <button onClick={onReplay}>
                        REPLAY
                      </button>
                    </div>
                }
              />
            </PropExample>
          </div>
        </div>

        <PropExample
          name='hasAutoplay'
          type='boolean'
          description='Automatically plays the video when ready.'
        >
          <div className='row'>
            <div className='col-lg-4'>
              <VideoPlayer hasAutoplay={true} />
            </div>
          </div>
        </PropExample>

        <PropExample
          name='isLooped'
          type='boolean'
          description='
            Automatically replays the video when it has reached the end.
          '
        >
          <div className='row'>
            <div className='col-lg-4'>
              <VideoPlayer
                hasAutoplay={false}
                isLooped={true}
              />
            </div>
          </div>
        </PropExample>

        <PropExample
          name='isMuted'
          type='boolean'
          description='Defaults the videos volume to zero.'
        >
          <div className='row'>
            <div className='col-lg-4'>
              <VideoPlayer
                hasAutoplay={false}
                isMuted={true}
              />
            </div>
          </div>
        </PropExample>

        <div className='row'>
          <div className='col-lg-4'>
            <PropExample
              name='onPlayerReady'
              type='function(video)'
              description='Callback event'
            >
              <VideoPlayer
                hasAutoplay={false}
                onPlayerReady={action('onPlayerReady')}
              />
            </PropExample>
          </div>

          <div className='col-lg-4'>
            <PropExample
              name='onVideoReady'
              type='function(video)'
              description='Callback event'
            >
              <VideoPlayer
                hasAutoplay={false}
                onVideoReady={action('onVideoReady')}
              />
            </PropExample>
          </div>

          <div className='col-lg-4'>
            <PropExample
              name='onPlay'
              type='function(video)'
              description='Callback event'
            >
              <VideoPlayer
                hasAutoplay={false}
                onPlay={action('onPlay')}
              />
            </PropExample>
          </div>

          <div className='col-lg-4'>
            <PropExample
              name='onPause'
              type='function(video)'
              description='Callback event'
            >
              <VideoPlayer
                hasAutoplay={false}
                onPause={action('onPause')}
              />
            </PropExample>
          </div>

          <div className='col-lg-4'>
            <PropExample
              name='onEnd'
              type='function(video)'
              description='Callback event'
            >
              <VideoPlayer
                hasAutoplay={false}
                onEnd={action('onEnd')}
              />
            </PropExample>
          </div>

          <div className='col-lg-4'>
            <PropExample
              name='onTimeChange'
              type='function(currentTime, remainingTime)'
              description='Callback event'
            >
              <VideoPlayer
                hasAutoplay={false}
                onTimeChange={action('onTimeChange')}
              />
            </PropExample>
          </div>

          <div className='col-lg-4'>
            <PropExample
              name='onError'
              type='function(error, video)'
              description='Callback event'
            >
              <VideoPlayer
                hasAutoplay={false}
                onError={action('onError')}
              />
            </PropExample>
          </div>

          <div className='col-lg-4'>
            <PropExample
              name='onSeek'
              type='function(video)'
              description='Callback event'
            >
              <VideoPlayer
                hasAutoplay={false}
                onSeek={action('onSeek')}
              />
            </PropExample>
          </div>
        </div>
      </DocSection>
    </div>,
  ))

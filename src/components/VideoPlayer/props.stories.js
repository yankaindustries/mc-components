import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'

import VideoPlayer from './'
import Background from '../Background'


const screenStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}


storiesOf('Components|VideoPlayer', module)
  .add('Props', withAddons({
    path: 'components/VideoPlayer/index.stories.js',
    component: VideoPlayer,
  })(() =>
    <div className='container'>
      <DocHeader
        title='VideoPlayer'
        description='A dynamic and simple to set up video player.'
      />

      <DocSection title='Props'>
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
              <VideoPlayer
                accountId='5344802162001'
                playerId='1cMNiwC9oQ'
                videoId='5450137526001'
                hasControls
              />
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
                beforescreenComponent={
                  ({ onResume }) =>
                    <Background color='dim' fit='container'>
                      <div style={screenStyle}>
                        <p>Start playing your video</p>
                        <button onClick={onResume}>
                          START
                        </button>
                      </div>
                    </Background>
                }
                hasControls
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
                pausescreenComponent={
                  ({ onResume }) =>
                    <Background color='dim' fit='container'>
                      <div style={screenStyle}>
                        <p>Your video is paused</p>
                        <button onClick={onResume}>
                          CONTINUE
                        </button>
                      </div>
                    </Background>
                }
                hasControls
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
                endscreenComponent={
                  ({ onReplay }) =>
                    <Background color='dim' fit='container'>
                      <div style={screenStyle}>
                        <p>Your video has ended</p>
                        <button onClick={onReplay}>
                          REPLAY
                        </button>
                      </div>
                    </Background>
                }
                hasControls
              />
            </PropExample>
          </div>
        </div>

        <PropExample
          name='hasAutoplay'
          type='boolean'
          description='
            Automatically plays the video when ready. NOTE: this will not work
            alone on mobile browsers. Must be accompanied by `isMuted`
          '
        >
          <div className='row'>
            <div className='col-lg-4'>
              ...
            </div>
          </div>
        </PropExample>

        <PropExample
          name='hasControls'
          type='boolean'
          description='Automatically plays the video when ready.'
        >
          <div className='row'>
            <div className='col-lg-4'>
              <VideoPlayer hasControls />
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
                isLooped
                hasControls
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
                isMuted
                hasControls
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
              <VideoPlayer onPlayerReady={action('onPlayerReady')} />
            </PropExample>
          </div>

          <div className='col-lg-4'>
            <PropExample
              name='onVideoReady'
              type='function(video)'
              description='Callback event'
            >
              <VideoPlayer
                onVideoReady={action('onVideoReady')}
                hasControls
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
                onPlay={action('onPlay')}
                hasControls
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
                onPause={action('onPause')}
                hasControls
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
                onEnd={action('onEnd')}
                hasControls
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
                onTimeChange={action('onTimeChange')}
                hasControls
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
                onError={action('onError')}
                hasControls
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
                onSeek={action('onSeek')}
                hasControls
              />
            </PropExample>
          </div>
        </div>
      </DocSection>
    </div>,
  ))

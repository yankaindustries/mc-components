import React from 'react'

import Scrubber from './Scrubber'
import Playback from './Playback'
import Volume from './Volume'
import Time from './Time'
import Spacer from './Spacer'
import Settings from './Settings'
import Fullscreen from './Fullscreen'


const hijackEvent = event => event.stopPropagation()


const VideoControls = () => (
  <div
    className='mc-video__controls mc-text-small'
    onClick={hijackEvent}
    onDoubleClick={hijackEvent}
  >
    <Scrubber />
    <Playback />
    <Volume />
    <Time />
    <Spacer />
    <Settings />
    <Fullscreen />
  </div>
)


export default VideoControls

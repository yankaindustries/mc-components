import React from 'react'
import { storiesOf } from '@storybook/react'

import CheckOverlay from './index'

import shondaRhimesThumbnail from '../../assets/shonda-rhimes-video.png'


storiesOf('components|Overlays/CheckOverlay', module)
  .add('default', () =>
    <CheckOverlay>
      {({ checked }) =>
        <img src={shondaRhimesThumbnail} />
      }
    </CheckOverlay>
  )

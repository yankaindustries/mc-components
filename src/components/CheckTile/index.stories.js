import React from 'react'
import { storiesOf } from '@storybook/react'

import CheckTile from '../CheckTile'

import shondaRhimesThumbnail from '../../assets/shonda-rhimes-video.png'


storiesOf('components|Tiles/CheckTile', module)
  .add('default', () =>
    <div className='container'>
      <CheckTile imageUrl={shondaRhimesThumbnail} />
    </div>,
  )

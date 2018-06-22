import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import shondaRhimesThumbnail from '../../assets/shonda-rhimes-video.png'

import ImageTile from '../ImageTile'

const infoProps = {
  inline: true,
  header: false,
}

storiesOf('ImageTile', module)
  .add(
    'ImageTile 4x3',
    withInfo({ ...infoProps })(() => (
      <div style={{ maxWidth: '500px' }}>
        <ImageTile
          imageUrl={shondaRhimesThumbnail}
          aspectRatio='4x3'
          backgroundGradient={false}
        >
          <p>Content</p>
        </ImageTile>
      </div>
    )),
  )
  .add(
    'ImageTile - 16x9 - backgroundGradient',
    withInfo({ ...infoProps })(() => (
      <div style={{ maxWidth: '500px' }}>
        <ImageTile
          imageUrl={shondaRhimesThumbnail}
          aspectRatio='16x9'
          backgroundGradient
        >
          <p>Content</p>
        </ImageTile>
      </div>
    )),
  )
  .add(
    'ImageTile - 16x9 - with animation',
    withInfo({ ...infoProps })(() => (
      <div style={{ maxWidth: '500px' }}>
        <ImageTile
          imageUrl={shondaRhimesThumbnail}
          aspectRatio='16x9'
          animationStyle='hover-zoom'
        >
          <p>Content</p>
        </ImageTile>
      </div>
    )),
  )

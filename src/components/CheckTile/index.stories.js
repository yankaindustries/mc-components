import React, { Component } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import shondaRhimesThumbnail from '../../assets/shonda-rhimes-video.png'

import CheckTile from '../CheckTile'

// CheckTile Handler
class CheckTileHandler extends Component {
  state = { checked: false }

  render () {
    const { checked } = this.state

    return (
      <div style={{ maxWidth: '500px' }}>
        <CheckTile
          {...this.props}
          checked={checked}
          onCheck={() => this.setState({ checked: !checked })}
        />
      </div>
    )
  }
}


storiesOf('components|Tiles/CheckTile', module)
  .add(
    'CheckTile - 1000x609',
    withInfo()(() => (
      <div style={{ maxWidth: '500px' }}>
        <CheckTile
          imageUrl={shondaRhimesThumbnail}
          checked
          aspectRatio='1000x609'
          animationStyle='hover-zoom'
          onCheck={() => {}}
        >
          <p>Content</p>
        </CheckTile>
      </div>
    )),
  )
  .add(
    'CheckTile - 1000x609 - no animation',
    withInfo()(() => (
      <div style={{ maxWidth: '500px' }}>
        <CheckTile
          imageUrl={shondaRhimesThumbnail}
          checked={false}
          aspectRatio='1000x609'
          onCheck={() => {}}
        >
          <p>Content</p>
        </CheckTile>
      </div>
    )),
  )
  .add(
    'with handler',
    withInfo()(() => (
      <CheckTileHandler
        imageUrl={shondaRhimesThumbnail}
        aspectRatio='1000x609'
      >
        <p>Content</p>
      </CheckTileHandler>
    )),
  )

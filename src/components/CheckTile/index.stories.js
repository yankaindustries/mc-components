import React, {Component} from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import shondaRhimesThumbnail from '../../images/shonda-rhimes-video.png'

import CheckTile from '../CheckTile'

const infoProps = {
  inline: true,
  header: false,
};

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
        >
        </CheckTile>
      </div>
    )
  }
}


storiesOf('CheckTile', module)
  .add('CheckTile - 1000x609',
    withInfo({ ...infoProps })(() =>
      <div style={{ maxWidth: '500px' }}>
        <CheckTile
          imageUrl={shondaRhimesThumbnail}
          checked={true}
          aspectRatio='1000x609'
          animationStyle='hover-zoom'
        >
        </CheckTile>
      </div>,
    ),
  )
  .add('CheckTile - 1000x609 - no animation',
    withInfo({ ...infoProps })(() =>
      <div style={{ maxWidth: '500px' }}>
        <CheckTile
          imageUrl={shondaRhimesThumbnail}
          checked={false}
          aspectRatio='1000x609'
        >
        </CheckTile>
      </div>,
    ),
  )
  .add('with handler',
    withInfo({ ...infoProps })(() =>
      <CheckTileHandler
        imageUrl={shondaRhimesThumbnail}
        aspectRatio='1000x609'
      >
      </CheckTileHandler>,
    ),
  )

import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import ScaleContainer from '../ScaleContainer'

const infoProps = {
  inline: true,
  header: false,
}

storiesOf('components|ScaleContainer', module)
  .add('default',
    withInfo({ ...infoProps })(() =>
      <ScaleContainer
        className='video-tile'
        hoverClass='video-tile--hover'
        zoomClass='video-tile--zoom'
      >
        {() =>
          <div style={{ backgroundColor: 'blue' }}>
            <p>Content</p>
          </div>
        }
      </ScaleContainer>,
    ),
  )

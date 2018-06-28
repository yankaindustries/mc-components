import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import ScaleContainer from '../ScaleContainer'

const infoProps = {
  inline: true,
  header: false,
}

storiesOf('ScaleContainer', module)
  .add('ScaleContainer',
    withInfo({ ...infoProps })(() =>
      <div style={{
        position: 'relative',
        width: 350,
        height: 214,
        margin: 'auto',
      }}>
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
        </ScaleContainer>
      </div>,
    ),
  )

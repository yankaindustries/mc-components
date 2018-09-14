import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'

import Tile from '../Tile'
import TileImage from '../TileImage'

import shondaRhimesThumbnail from '../../utils/shonda-rhimes.png'


storiesOf('components|Tiles/TileImage', module)
  .add('TileImage', withProps(TileImage)(() => (
    <div className='container'>
      <h2 className='mc-text-h2'>TileImage</h2>

      <DocSection title='Props'>
        <PropExample
          name='image'
          type='String'
        >
          <div className='row'>
            <div className='col-sm-6'>
              <Tile>
                <TileImage image={<img src={shondaRhimesThumbnail} />} />
              </Tile>
            </div>
          </div>
        </PropExample>
      </DocSection>
    </div>
  )))

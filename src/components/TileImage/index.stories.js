import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'

import Tile from '../Tile'
import TileImage from '../TileImage'

import shondaRhimesThumbnail from '../../utils/shonda-rhimes.png'


storiesOf('Components|Tiles/TileImage', module)
  .add('TileImage', withAddons({
    path: 'components/TileImage/index.stories.js',
    component: TileImage,
  })(() => (
    <div className='container'>
      <div className='example__heading'>
        <h1 className='mc-text-h1'>TileImage</h1>
      </div>

      <DocSection title='Props'>
        <PropExample
          name='image'
          type='Element'
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

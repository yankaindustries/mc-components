import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'

import Tile from '../Tile'
import TileImage from '../TileImage'
import TileOverlay from '../TileOverlay'

import shondaRhimesThumbnail from '../../utils/shonda-rhimes.png'


storiesOf('components|Tiles/TileOverlay', module)
  .add('TileOverlay', withProps(TileOverlay)(() => (
    <div className='container'>
      <h2 className='mc-text-h2'>TileOverlay</h2>

      <DocSection title='Props'>
        <PropExample
          name='type'
          type='String["gradient-bottom"]'
        >
          <div className='row'>
            <div className='col-sm-6'>
              <Tile>
                <TileImage imageUrl={shondaRhimesThumbnail} />
                <TileOverlay type='gradient-bottom' />
              </Tile>
            </div>
          </div>
        </PropExample>
      </DocSection>
    </div>
  )))

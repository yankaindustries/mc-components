import React from 'react'
import { storiesOf } from '@storybook/react'

import DocSection from '../../utils/DocSection'

import Tile from '../Tile'
import TileOverlay from '../TileOverlay'


storiesOf('components|Tiles/TileOverlay', module)
  .add('TileOverlay', () => (
    <div className='container'>
      <div className='container'>
        <h2>TileOverlay</h2>

        <div className='row'>
          <div className='col-md-6'>
            <DocSection title='Example'>
              <Tile>
                <TileOverlay type='gradient-bottom' />
                <div className='example__filler' />
              </Tile>
            </DocSection>
          </div>
        </div>
      </div>
    </div>
  ))

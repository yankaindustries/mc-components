import React from 'react'
import { storiesOf } from '@storybook/react'

import DocSection from '../../utils/DocSection'

import Tile from '../Tile'
import TileCheck from '../TileCheck'


storiesOf('components|Tiles/TileCheck', module)
  .add('TileCheck', () => (
    <div className='container'>
      <div className='container'>
        <h2>TileCheck</h2>

        <div className='row'>
          <div className='col-md-6'>
            <DocSection title='Example'>
              <Tile>
                <TileCheck checked />
                <div className='example__filler' />
              </Tile>
            </DocSection>
          </div>
        </div>
      </div>
    </div>
  ))

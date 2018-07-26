import React from 'react'
import { storiesOf } from '@storybook/react'

import DocSection from '../../utils/DocSection'

import Tile from '../Tile'
import TileCaption from '../TileCaption'


storiesOf('components|Tiles/TileCaption', module)
  .add('TileCaption', () => (
    <div className='container'>
      <div className='container'>
        <h2>TileCaption</h2>

        <div className='row'>
          <div className='col-md-6'>
            <DocSection title='Example'>
              <Tile>
                <TileCaption
                  title='Shonda Rhimes'
                  subtitle='Teaches Writing'
                />
                <div className='example__filler' />
              </Tile>
            </DocSection>
          </div>
        </div>
      </div>
    </div>
  ))

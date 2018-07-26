import React from 'react'
import { storiesOf } from '@storybook/react'

import DocSection from '../../utils/DocSection'

import Tile from '../Tile'
import TileImage from '../TileImage'

import shondaRhimesThumbnail from '../../assets/shonda-rhimes-video.png'


storiesOf('components|Tiles/TileImage', module)
  .add('TileImage', () => (
    <div className='container'>
      <div className='container'>
        <h2>TileImage</h2>

        <div className='row'>
          <div className='col-md-6'>
            <DocSection title='Example'>
              <Tile>
                <TileImage imageUrl={shondaRhimesThumbnail} />
                <div className='example__filler' />
              </Tile>
            </DocSection>
          </div>
        </div>
      </div>
    </div>
  ))

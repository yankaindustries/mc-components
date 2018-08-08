import React from 'react'
import { storiesOf } from '@storybook/react'

import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'

import Tile from '../Tile'
import TileImage from '../TileImage'

import shondaRhimesThumbnail from '../../assets/images/shonda-rhimes-video.png'


storiesOf('components|Tiles/TileImage', module)
  .add('TileImage', () => (
    <div className='container'>
      <div className='container'>
        <h2 className='mc-heading-2'>TileImage</h2>

        <DocSection title='Props'>
          <PropExample
            name='imageUrl'
            type='String'
          >
            <div className='row'>
              <div className='col-sm-6'>
                <Tile>
                  <TileImage imageUrl={shondaRhimesThumbnail} />
                </Tile>
              </div>
            </div>
          </PropExample>
        </DocSection>
      </div>
    </div>
  ))

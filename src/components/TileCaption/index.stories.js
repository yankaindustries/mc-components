import React from 'react'
import { storiesOf } from '@storybook/react'

import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'

import Tile from '../Tile'
import TileCaption from '../TileCaption'


storiesOf('components|Tiles/TileCaption', module)
  .add('TileCaption', () => (
    <div className='container'>
      <div className='container'>
        <h2>TileCaption</h2>

        <DocSection title='Props'>
          <div className='row'>
            <div className='col-md-6'>
                <PropExample
                  name='title'
                  type='String'
                >
                  <Tile>
                    <TileCaption
                      title='Shonda Rhimes'
                    />
                    <div className='example__filler' />
                  </Tile>
                </PropExample>
              </div>

              <div className='col-md-6'>
                <PropExample
                  name='subtitle'
                  type='String'
                >
                  <Tile>
                    <TileCaption
                      title='Shonda Rhimes'
                      subtitle='Teaches Writing'
                    />
                    <div className='example__filler' />
                  </Tile>
                </PropExample>
            </div>
          </div>
        </DocSection>
      </div>
    </div>
  ))

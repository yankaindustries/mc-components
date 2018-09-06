import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'
import Placeholder from '../../utils/Placeholder'

import Tile from '../Tile'
import TileCaption from '../TileCaption'


storiesOf('components|Tiles/TileCaption', module)
  .add('TileCaption', withProps(TileCaption)(() => (
    <div className='container'>
      <div className='container'>
        <h2 className='mc-text-h2'>TileCaption</h2>

        <DocSection title='Variants'>
          <PropExample
            name='position'
            type='String'
          >
            <div className='row'>
              <div className='col-sm-4'>
                <Tile>
                  <TileCaption position='left bottom'>
                    left bottom
                  </TileCaption>
                  <Placeholder />
                </Tile>
              </div>

              <div className='col-sm-4'>
                <Tile>
                  <TileCaption position='center bottom'>
                    center bottom
                  </TileCaption>
                  <Placeholder />
                </Tile>
              </div>

              <div className='col-sm-4'>
                <Tile>
                  <TileCaption position='left below'>
                    left below
                  </TileCaption>
                  <Placeholder />
                </Tile>
              </div>
            </div>
          </PropExample>
        </DocSection>
      </div>
    </div>
  )))

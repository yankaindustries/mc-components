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
      <h2 className='mc-text-h2'>TileCaption</h2>

      <DocSection title='Variants'>
        <PropExample
          name='position'
          type='String'
        >
          <div className='row'>
            <div className='col-sm-4'>
              <Tile>
                <TileCaption position='x-left y-center'>
                  left center
                </TileCaption>
                <Placeholder />
              </Tile>
            </div>

            <div className='col-sm-4'>
              <Tile>
                <TileCaption position='x-center y-center'>
                  center center
                </TileCaption>
                <Placeholder />
              </Tile>
            </div>

            <div className='col-sm-4'>
              <Tile>
                <TileCaption position='x-right y-center'>
                  right center
                </TileCaption>
                <Placeholder />
              </Tile>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm-4'>
              <Tile>
                <TileCaption position='x-left y-bottom'>
                  left bottom
                </TileCaption>
                <Placeholder />
              </Tile>
            </div>

            <div className='col-sm-4'>
              <Tile>
                <TileCaption position='x-center y-bottom'>
                  center bottom
                </TileCaption>
                <Placeholder />
              </Tile>
            </div>

            <div className='col-sm-4'>
              <Tile>
                <TileCaption position='x-right y-bottom'>
                  left below
                </TileCaption>
                <Placeholder />
              </Tile>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm-4'>
              <Tile>
                <TileCaption position='x-left y-below'>
                  left below
                </TileCaption>
                <Placeholder />
              </Tile>
            </div>

            <div className='col-sm-4'>
              <Tile>
                <TileCaption position='x-center y-below'>
                  center below
                </TileCaption>
                <Placeholder />
              </Tile>
            </div>

            <div className='col-sm-4'>
              <Tile>
                <TileCaption position='x-right y-below'>
                  right below
                </TileCaption>
                <Placeholder />
              </Tile>
            </div>
          </div>
        </PropExample>
      </DocSection>
    </div>
  )))

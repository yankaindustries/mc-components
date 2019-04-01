import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'
import Placeholder from '../../utils/Placeholder'

import Tile from '../Tile'
import TileOverlay from '../TileOverlay'


storiesOf('Components|Tiles/TileOverlay', module)
  .add('TileOverlay', withProps(TileOverlay)(() => (
    <div className='container'>
      <div className='example__heading'>
        <h1 className='mc-text-h1'>TileOverlay</h1>
      </div>

      <DocSection title='Props'>
        <PropExample
          name='type'
          type='String'
        >
          <div className='row'>
            <div className='col-4'>
              <Tile>
                <Placeholder>
                  gradient-bottom
                </Placeholder>
                <TileOverlay type='gradient-bottom' />
              </Tile>
            </div>

            <div className='col-4'>
              <Tile>
                <Placeholder>
                  gradient-left
                </Placeholder>
                <TileOverlay type='gradient-left' />
              </Tile>
            </div>

            <div className='col-4'>
              <Tile>
                <Placeholder>
                  spotlight
                </Placeholder>
                <TileOverlay type='spotlight' />
              </Tile>
            </div>
          </div>
        </PropExample>

        <PropExample
          name='color'
          type='String'
        >
          <div className='row'>
            <div className='col-sm-6'>
              <Tile>
                <Placeholder>
                  255,0,0
                </Placeholder>
                <TileOverlay color='255,0,0' />
              </Tile>
            </div>
            <div className='col-sm-6'>
              <Tile>
                <Placeholder>
                  0,0,255
                </Placeholder>
                <TileOverlay color='0,0,255' />
              </Tile>
            </div>
          </div>
        </PropExample>

      </DocSection>
    </div>
  )))

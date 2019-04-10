import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'
import Placeholder from '../../utils/Placeholder'

import Tile from '../Tile'
import TileCaption from '../TileCaption'


storiesOf('Components|Tiles/TileCaption', module)
  .add('TileCaption', withAddons({
    path: 'components/TileCaption/index.stories.js',
    component: TileCaption,
  })(() => (
    <div className='container'>
      <div className='example__heading'>
        <h1 className='mc-text-h1'>TileCaption</h1>
      </div>

      <DocSection title='Props'>
        <PropExample
          name='position'
          type='String'
        >
          <div className='row'>
            <div className='col-sm-4'>
              <Tile>
                <TileCaption position='left center'>
                  left center
                </TileCaption>
                <Placeholder />
              </Tile>
            </div>

            <div className='col-sm-4'>
              <Tile>
                <TileCaption position='center'>
                  center center
                </TileCaption>
                <Placeholder />
              </Tile>
            </div>

            <div className='col-sm-4'>
              <Tile>
                <TileCaption position='right center'>
                  right center
                </TileCaption>
                <Placeholder />
              </Tile>
            </div>
          </div>

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
                <TileCaption position='right bottom'>
                  right bottom
                </TileCaption>
                <Placeholder />
              </Tile>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm-4'>
              <Tile>
                <TileCaption position='left below'>
                  left below
                </TileCaption>
                <Placeholder />
              </Tile>
            </div>

            <div className='col-sm-4'>
              <Tile>
                <TileCaption position='center below'>
                  center below
                </TileCaption>
                <Placeholder />
              </Tile>
            </div>

            <div className='col-sm-4'>
              <Tile>
                <TileCaption position='right below'>
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

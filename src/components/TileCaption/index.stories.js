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
        <h2>TileCaption</h2>

        <DocSection title='Variants'>
          <PropExample
            name='title'
            type='String'
          >
            <div className='row'>
              <div className='col-sm-4'>
                <Tile>
                  <TileCaption
                    title='Shonda Rhimes'
                  />
                  <Placeholder />
                </Tile>
              </div>
            </div>
          </PropExample>

          <PropExample
            name='subtitle'
            type='String'
          >
            <div className='row'>
              <div className='col-sm-4'>
                <Tile>
                  <TileCaption
                    title='Shonda Rhimes'
                    subtitle='Teaches Writing'
                  />
                  <Placeholder />
                </Tile>
              </div>
            </div>
          </PropExample>

          <PropExample
            name='position'
            type='String'
          >
            <div className='row'>
              <div className='col-sm-4'>
                <Tile>
                  <TileCaption
                    title='Shonda Rhimes'
                    position='left bottom'
                  />
                  <Placeholder />
                </Tile>
              </div>

              <div className='col-sm-4'>
                <Tile>
                  <TileCaption
                    title='Shonda Rhimes'
                    position='center bottom'
                  />
                  <Placeholder />
                </Tile>
              </div>

              <div className='col-sm-4'>
                <Tile>
                  <TileCaption
                    title='Shonda Rhimes'
                    position='left below'
                  />
                  <Placeholder />
                </Tile>
              </div>
            </div>
          </PropExample>
        </DocSection>
      </div>
    </div>
  )))

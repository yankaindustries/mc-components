import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'

import Tile from '../Tile'
import TileVideo from '../TileVideo'


storiesOf('components|Tiles/TileVideo', module)
  .add('TileVideo', withProps(TileVideo)(() => (
    <div className='container'>
      <h2 className='mc-text-h2'>TileVideo</h2>

      <DocSection title='Props'>
        <PropExample
          name='autoPlay'
          type='Boolean'
        >
          <div className='row'>
            <div className='col-sm-6'>
              <Tile>
                <TileVideo videoId='5450137526001' autoPlay />
              </Tile>
            </div>
          </div>
        </PropExample>

        <PropExample
          name='controls'
          type='Boolean'
        >
          <div className='row'>
            <div className='col-sm-6'>
              <Tile>
                <TileVideo videoId='5450137526001' controls />
              </Tile>
            </div>
          </div>
        </PropExample>

        <PropExample
          name='loop'
          type='Boolean'
        >
          <div className='row'>
            <div className='col-sm-6'>
              <Tile>
                <TileVideo videoId='5450137526001' controls loop />
              </Tile>
            </div>
          </div>
        </PropExample>

        <PropExample
          name='muted'
          type='Boolean'
        >
          <div className='row'>
            <div className='col-sm-6'>
              <Tile>
                <TileVideo videoId='5450137526001' controls muted />
              </Tile>
            </div>
          </div>
        </PropExample>
      </DocSection>
    </div>
  )))

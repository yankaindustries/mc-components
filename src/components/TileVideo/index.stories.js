import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'

import Tile from '../Tile'
import TileVideo from '../TileVideo'


storiesOf('Components|Tiles/TileVideo', module)
  .add('TileVideo', withAddons({
    path: 'components/TileVideo/index.stories.js',
    component: TileVideo,
  })(() => (
    <div className='container'>
      <div className='example__heading'>
        <h1 className='mc-text-h1'>TileVideo</h1>
      </div>

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

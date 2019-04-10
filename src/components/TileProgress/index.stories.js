import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'
import Placeholder from '../../utils/Placeholder'

import Tile from '../Tile'
import TileProgress from '../TileProgress'


storiesOf('Components|Tiles/TileProgress', module)
  .add('TileProgress', withAddons({
    path: 'components/TileProgress/index.stories.js',
    component: TileProgress,
  })(() => (
    <div className='container'>
      <div className='example__heading'>
        <h1 className='mc-text-h1'>TileProgress</h1>
      </div>

      <DocSection title='Props'>
        <PropExample
          name='value'
          type='Number'
        >
          <div className='row'>
            <div className='col-sm-6'>
              <Tile>
                <Placeholder>{'value={72}'}</Placeholder>
                <TileProgress value={72} />
              </Tile>
            </div>
          </div>
        </PropExample>
      </DocSection>
    </div>
  )))

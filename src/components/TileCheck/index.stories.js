import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'
import Placeholder from '../../utils/Placeholder'

import Tile from '../Tile'
import TileCheck from '../TileCheck'


storiesOf('Components|Tiles/TileCheck', module)
  .add('TileCheck', withAddons({
    path: 'components/TileCheck/index.stories.js',
    component: TileCheck,
  })(() => (
    <div className='container'>
      <div className='example__heading'>
        <h1 className='mc-text-h1'>TileCheck</h1>
      </div>

      <DocSection title='Props'>
        <PropExample
          name='checked'
          type='Boolean'
        >
          <div className='row'>
            <div className='col-sm-6'>
              <Tile>
                <TileCheck checked>
                  {({ checked }) =>
                    <Placeholder>
                      {checked ? 'true' : 'false'}
                    </Placeholder>
                  }
                </TileCheck>
              </Tile>
            </div>
          </div>
        </PropExample>
      </DocSection>
    </div>
  )))

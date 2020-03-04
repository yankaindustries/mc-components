import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'

import ResponsiveHandler from './index'
import Tile from '../Tile'
import TileImage from '../TileImage'

import shondaRhimesThumbnail from '../../utils/shonda-rhimes.png'


storiesOf('Utilities|ResponsiveHandler', module)
  .add('default', withAddons({
    path: 'components/ResponsiveHandler/index.stories.js',
    component: ResponsiveHandler,
  })(() => (
    <div className='container'>
      <div className='example__heading'>
        <h1 className='mc-text-h1'>ResponsiveHandler</h1>
        <p className='mc-opacity--muted'>
          Get access to screen size as a prop
        </p>
      </div>

      <DocSection title='Demo'>
        <PropExample>
          <ResponsiveHandler>
            {({ responsive }) =>
              <div className='row row--vertcal-space'>
                <div className='col-12'>
                  <Tile aspectRatio={responsive('1x1', '21x9', '21x9', '21x9')}>
                    <TileImage imageUrl={shondaRhimesThumbnail} />
                  </Tile>
                </div>

                <div className='col-sm-4'>
                  <Tile aspectRatio={responsive('1x1', '16x9', '16x9', '16x9')}>
                    <TileImage imageUrl={shondaRhimesThumbnail} />
                  </Tile>
                </div>

                <div className='col-sm-4'>
                  <Tile aspectRatio={responsive('1x1', '16x9', '16x9', '16x9')}>
                    <TileImage imageUrl={shondaRhimesThumbnail} />
                  </Tile>
                </div>

                <div className='col-sm-4'>
                  <Tile aspectRatio={responsive('1x1', '16x9', '16x9', '16x9')}>
                    <TileImage imageUrl={shondaRhimesThumbnail} />
                  </Tile>
                </div>
              </div>
            }
          </ResponsiveHandler>
        </PropExample>
      </DocSection>
    </div>
  )))

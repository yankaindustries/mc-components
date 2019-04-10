import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'

import ResponsiveHandler from './index'
import Tile from '../Tile'
import TileImage from '../TileImage'

import shondaRhimesThumbnail from '../../utils/shonda-rhimes.png'


storiesOf('utilities|ResponsiveHandler', module)
  .add('default', withAddons({
    path: 'components/ResponsiveHandler/index.stories.js',
    component: ResponsiveHandler,
  })(() => (
    <div className='container'>
      <div className='example__heading'>
        <h1 className='mc-text-h1'>ResponsiveHandler</h1>
        <p className='mc-text--muted'>
          Get access to screen size as a prop
        </p>
      </div>

      <DocSection title='Demo'>
        <PropExample>
          <div className='row row--vertcal-space'>
            <div className='col-12'>
              <ResponsiveHandler>
                {({ gteMD }) =>
                  <Tile aspectRatio={gteMD ? '519x187' : '16x9'}>
                    <TileImage imageUrl={shondaRhimesThumbnail} />
                  </Tile>
                }
              </ResponsiveHandler>
            </div>

            <div className='col-md-4'>
              <Tile aspectRatio='16x9'>
                <TileImage imageUrl={shondaRhimesThumbnail} />
              </Tile>
            </div>

            <div className='col-md-4'>
              <Tile aspectRatio='16x9'>
                <TileImage imageUrl={shondaRhimesThumbnail} />
              </Tile>
            </div>

            <div className='col-md-4'>
              <Tile aspectRatio='16x9'>
                <TileImage imageUrl={shondaRhimesThumbnail} />
              </Tile>
            </div>
          </div>
        </PropExample>
      </DocSection>
    </div>
  )))

import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'

import ResponsiveHandler from './index'

import Tile from '../Tile'
import TileImage from '../TileImage'

import shondaRhimesThumbnail from '../../assets/images/shonda-rhimes-video.png'


storiesOf('utilities|ResponsiveHandler', module)
  .add('default', withProps(ResponsiveHandler)(() => (
    <div className='container'>
      <h1 className='mc-text-h1'>
        ResponsiveHandler
      </h1>

      <DocSection title='Example'>
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

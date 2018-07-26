import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withProps } from '../../utils/addon-props'

import DocSection from '../../utils/DocSection'

import CheckTile from './index'
import AnimationHandler from '../AnimationHandler'
import ImageTile from '../ImageTile'
import shondaRhimesThumbnail from '../../assets/shonda-rhimes-video.png'


storiesOf('components|Tiles/CheckTile', module)
  .add('default', withProps(CheckTile)(() =>
    <div className='container'>
      <h2>CheckTile</h2>

      <DocSection title='Examples'>
        <div className='row'>
          <div className='col-sm-4'>
            <CheckTile onChange={action('onChange:1')}>
              {({ checked }) =>
                <AnimationHandler animation='zoom' animating={checked}>
                  <ImageTile imageUrl={shondaRhimesThumbnail} />
                </AnimationHandler>
              }

            </CheckTile>
          </div>
          <div className='col-sm-4'>
            <CheckTile onChange={action('onChange:1')}>
              {({ checked }) =>
                <AnimationHandler animation='zoom' animating={checked}>
                  <ImageTile imageUrl={shondaRhimesThumbnail} />
                </AnimationHandler>
              }

            </CheckTile>
          </div>
          <div className='col-sm-4'>
            <CheckTile onChange={action('onChange:1')}>
              {({ checked }) =>
                <AnimationHandler animation='zoom' animating={checked}>
                  <ImageTile imageUrl={shondaRhimesThumbnail} />
                </AnimationHandler>
              }

            </CheckTile>
          </div>
        </div>
      </DocSection>
    </div>,
  ))

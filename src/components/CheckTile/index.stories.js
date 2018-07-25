import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import DocSection from '../../utils/DocSection'
import PropsTable from '../../utils/PropsTable'

import CheckTile from './index'
import AnimationHandler from '../AnimationHandler'
import ImageTile from '../ImageTile'
import shondaRhimesThumbnail from '../../assets/shonda-rhimes-video.png'


storiesOf('components|Tiles/CheckTile', module)
  .add('default', () =>
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

      <DocSection title='Properties'>
        <div className='row'>
          <div className='col-lg-6 col-md-9'>
            <PropsTable component={CheckTile} />
          </div>
        </div>
      </DocSection>
    </div>,
  )

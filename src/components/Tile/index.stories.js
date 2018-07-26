import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import DocSection from '../../utils/DocSection'

import Tile from '../Tile'
import TileImage from '../TileImage'
import TileOverlay from '../TileOverlay'
import TileCaption from '../TileCaption'
import TileCheck from '../TileCheck'
import AnimationHandler from '../AnimationHandler'
import HoverHandler from '../HoverHandler'

import shondaRhimesThumbnail from '../../assets/shonda-rhimes-video.png'


storiesOf('components|Tiles', module)
  .add('Summary', () => (
    <div className='container'>
      <div className='container'>
        <h2>Tile</h2>

        <div className='row'>
          <div className='col-lg-4 col-md-6'>
            <DocSection title='Tile (container)'>
              <Tile>
                <div className='example__filler' />
              </Tile>
            </DocSection>
          </div>

          <div className='col-lg-4 col-md-6'>
            <DocSection title='TileImage'>
              <Tile>
                <TileImage imageUrl={shondaRhimesThumbnail} />
              </Tile>
            </DocSection>
          </div>

          <div className='col-lg-4 col-md-6'>
            <DocSection title='TileOverlay'>
              <Tile>
                <TileOverlay type='gradient-bottom' />
                <TileImage imageUrl={shondaRhimesThumbnail} />
              </Tile>
            </DocSection>
          </div>

          <div className='col-lg-4 col-md-6'>
            <DocSection title='TileCaption'>
              <Tile>
                <TileCaption
                  title='Shonda Rhimes'
                  subtitle='Teaches Writing'
                />
                <TileOverlay type='gradient-bottom' />
                <TileImage imageUrl={shondaRhimesThumbnail} />
              </Tile>
            </DocSection>
          </div>

          <div className='col-lg-4 col-md-6'>
            <DocSection title='TileCheck'>
              <Tile>
                <TileCheck checked />
                <TileCaption
                  title='Shonda Rhimes'
                  subtitle='Teaches Writing'
                />
                <TileOverlay type='gradient-bottom' />
                <TileImage imageUrl={shondaRhimesThumbnail} />
              </Tile>
            </DocSection>
          </div>

          <div className='col-lg-4 col-md-6'>
            <DocSection title='w/ Animations'>
              <HoverHandler>
                {({ hovering }) =>
                  <Tile>
                    <TileCheck>
                      {() =>
                        <Fragment>
                          <AnimationHandler
                            type='lift'
                            animating={hovering}
                          >
                            <TileCaption
                              title='Shonda Rhimes'
                              subtitle='Teaches Writing'
                            />
                          </AnimationHandler>

                          <TileOverlay type='gradient-bottom' />

                          <AnimationHandler
                            type='ken-burns'
                            animating={hovering}
                          >
                            <TileImage imageUrl={shondaRhimesThumbnail} />
                          </AnimationHandler>
                        </Fragment>
                      }
                    </TileCheck>
                  </Tile>
                }
              </HoverHandler>
            </DocSection>
          </div>
        </div>
      </div>
    </div>
  ))

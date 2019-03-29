import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'
import Placeholder from '../../utils/Placeholder'

import Tile from '../Tile'
import TileImage from '../TileImage'
import TileVideo from '../TileVideo'
import TileOverlay from '../TileOverlay'
import TileCaption from '../TileCaption'
import TileCheck from '../TileCheck'
import TileProgress from '../TileProgress'
import AnimationHandler from '../AnimationHandler'
import HoverHandler from '../HoverHandler'
import Button from '../Button'

import shondaRhimesThumbnail from '../../utils/shonda-rhimes.png'


storiesOf('Components|Tiles', module)
  .add('Summary', () => (
    <div className='container'>
      <div className='example__heading'>
        <h1 className='mc-text-h1'>Tile</h1>
      </div>

      <div className='row'>
        <div className='col-lg-4 col-md-6'>
          <DocSection title='Tile'>
            <Tile>
              <Placeholder>
                (empty)
              </Placeholder>
            </Tile>
          </DocSection>
        </div>

        <div className='col-lg-4 col-md-6'>
          <DocSection title='TileOverlay'>
            <Tile>
              <TileOverlay type='gradient-bottom' />
              <Placeholder />
            </Tile>
          </DocSection>
        </div>

        <div className='col-lg-4 col-md-6'>
          <DocSection title='TileCaption'>
            <Tile>
              <TileCaption>
                <h5 className='mc-text-h5'>
                  Shonda Rhimes
                </h5>
                <p className='mc-text--muted'>
                  Teaches Writing
                </p>
              </TileCaption>
              <Placeholder />
            </Tile>
          </DocSection>
        </div>

        <div className='col-lg-4 col-md-6'>
          <DocSection title='TileCheck'>
            <Tile>
              <TileCheck checked />
              <Placeholder />
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
          <DocSection title='TileVideo'>
            <Tile>
              <TileVideo videoId='5450137526001' autoPlay loop muted />
            </Tile>
          </DocSection>
        </div>

        <div className='col-lg-4 col-md-6'>
          <DocSection title='TileProgress'>
            <Tile>
              <Placeholder>{'value={72}'}</Placeholder>
              <TileProgress value={72}></TileProgress>
            </Tile>
          </DocSection>
        </div>
      </div>

      <hr />

      <div className='row mc-pb-10'>
        <div className='col-lg-4 col-md-6'>
          <DocSection title='Animations'>
            <HoverHandler>
              {({ hovering }) =>
                <Tile>
                  <TileCheck>
                    {() =>
                      <Fragment>
                        <AnimationHandler
                          type='ken-burns'
                          animating={hovering}
                        >
                          <TileImage imageUrl={shondaRhimesThumbnail} />
                          <TileOverlay type='gradient-bottom' />
                        </AnimationHandler>

                        <AnimationHandler
                          type='lift'
                          animating={hovering}
                        >
                          <TileCaption>
                            <h5 className='mc-text-h5'>
                              Shonda Rhimes
                            </h5>
                            <p className='mc-text--muted'>
                              Teaches Writing
                            </p>
                          </TileCaption>
                        </AnimationHandler>
                      </Fragment>
                    }
                  </TileCheck>
                </Tile>
              }
            </HoverHandler>
          </DocSection>
        </div>

        <div className='col-lg-4 col-md-6'>
          <DocSection title='Swap'>
            <HoverHandler>
              {({ intent }) =>
                <AnimationHandler
                  type='zoom'
                  animating={intent}
                >
                  <Tile>
                    <TileImage imageUrl={shondaRhimesThumbnail} />

                    {!intent &&
                      <TileOverlay type='gradient-bottom' />
                    }

                    {intent &&
                      <TileVideo
                        videoId='5450137526001'
                        autoPlay
                        loop
                        muted
                      />
                    }

                    <TileCaption
                      position={intent
                        ? 'left below'
                        : 'left bottom'
                      }
                    >
                      <h5 className='mc-text-h5'>
                        Shonda Rhimes
                      </h5>
                      <p className='mc-text--muted'>
                        Teaches Writing
                      </p>
                    </TileCaption>
                  </Tile>
                </AnimationHandler>
              }
            </HoverHandler>
          </DocSection>
        </div>

        <div className='col-lg-4 col-md-6'>
          <DocSection title='Zoom Tile'>
            <HoverHandler>
              {({ hovering }) =>
                <AnimationHandler
                  type='zoom-tile'
                  animating={hovering}
                >
                  <div>
                    <Tile>
                      <TileImage imageUrl={shondaRhimesThumbnail} />
                      <TileOverlay />

                      <TileCaption
                        position='center bottom'
                      >
                        <div className='mc-tile__reveal-on-hover'>
                          <Button secondary>Resume</Button>
                        </div>
                      </TileCaption>

                      <TileCaption
                        position='left below'
                        className='mc-tile__darken-bg-on-hover'
                      >
                        <h5 className='mc-text-h5'>
                          Shonda Rhimes
                        </h5>
                        <p className='mc-text--muted'>
                          Teaches Writing
                        </p>

                        <div className='mc-tile__reveal-on-hover'>
                          <p className={`
                            mc-mt-2
                            mc-text-small
                            mc-text--muted
                          `}>
                            Some other stuff...
                          </p>
                        </div>
                      </TileCaption>
                    </Tile>
                  </div>
                </AnimationHandler>
              }
            </HoverHandler>
          </DocSection>
        </div>
      </div>
    </div>
  ))


storiesOf('Components|Tiles/Tile', module)
  .add('Tile', () => (
    <div className='container'>
      <div className='example__heading'>
        <h1 className='mc-text-h1'>Tile</h1>
      </div>

      <DocSection title='Props'>
        <PropExample
          name='aspectRatio'
          type='String'
          description='auto, 1x1, 2x3, 3x4, 4x3, 9x16, 16x9, 21x9'
        >
          <div className='row'>
            <div className='col-sm-12'>
              <Tile aspectRatio='21x9'>
                <Placeholder>21x9</Placeholder>
              </Tile>
            </div>

            <div className='col-sm-4'>
              <Tile aspectRatio='16x9'>
                <Placeholder>16x9</Placeholder>
              </Tile>
            </div>
            <div className='col-sm-4'>
              <Tile aspectRatio='16x9'>
                <Placeholder>16x9</Placeholder>
              </Tile>
            </div>
            <div className='col-sm-4'>
              <Tile aspectRatio='16x9'>
                <Placeholder>16x9</Placeholder>
              </Tile>
            </div>

            <div className='col-sm-2'>
              <Tile aspectRatio='4x3'>
                <Placeholder>4x3</Placeholder>
              </Tile>
            </div>
            <div className='col-sm-2'>
              <Tile aspectRatio='4x3'>
                <Placeholder>4x3</Placeholder>
              </Tile>
            </div>
            <div className='col-sm-2'>
              <Tile aspectRatio='4x3'>
                <Placeholder>4x3</Placeholder>
              </Tile>
            </div>
            <div className='col-sm-2'>
              <Tile aspectRatio='4x3'>
                <Placeholder>4x3</Placeholder>
              </Tile>
            </div>
            <div className='col-sm-2'>
              <Tile aspectRatio='4x3'>
                <Placeholder>4x3</Placeholder>
              </Tile>
            </div>
            <div className='col-sm-2'>
              <Tile aspectRatio='4x3'>
                <Placeholder>4x3</Placeholder>
              </Tile>
            </div>

            <div className='col-sm-4'>
              <Tile aspectRatio='3x4'>
                <Placeholder>3x4</Placeholder>
              </Tile>
            </div>
            <div className='col-sm-4'>
              <Tile aspectRatio='3x4'>
                <Placeholder>3x4</Placeholder>
              </Tile>
            </div>
            <div className='col-sm-4'>
              <Tile aspectRatio='3x4'>
                <Placeholder>3x4</Placeholder>
              </Tile>
            </div>

            <div className='col-sm-2'>
              <Tile aspectRatio='9x16'>
                <Placeholder>9x16</Placeholder>
              </Tile>
            </div>
            <div className='col-sm-2'>
              <Tile aspectRatio='9x16'>
                <Placeholder>9x16</Placeholder>
              </Tile>
            </div>
            <div className='col-sm-2'>
              <Tile aspectRatio='9x16'>
                <Placeholder>9x16</Placeholder>
              </Tile>
            </div>
            <div className='col-sm-2'>
              <Tile aspectRatio='9x16'>
                <Placeholder>9x16</Placeholder>
              </Tile>
            </div>
            <div className='col-sm-2'>
              <Tile aspectRatio='9x16'>
                <Placeholder>9x16</Placeholder>
              </Tile>
            </div>
            <div className='col-sm-2'>
              <Tile aspectRatio='9x16'>
                <Placeholder>9x16</Placeholder>
              </Tile>
            </div>
          </div>
        </PropExample>
      </DocSection>
    </div>
  ))

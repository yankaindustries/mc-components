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
import AnimationHandler from '../AnimationHandler'
import HoverHandler from '../HoverHandler'
import Background from '../Background'

import shondaRhimesThumbnail from '../../utils/shonda-rhimes.png'


storiesOf('components|Tiles', module)
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
                <h3 className='mc-text-h5 mc-text--uppercase'>
                  Shonda Rhimes
                </h3>
                <h4 className='mc-text--muted'>
                  Teaches Writing
                </h4>
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
      </div>

      <hr />

      <div className='row'>
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
                        </AnimationHandler>

                        <TileOverlay type='gradient-bottom' />

                        <AnimationHandler
                          type='lift'
                          animating={hovering}
                        >
                          <TileCaption>
                            <h3 className='mc-text-h5 mc-text--uppercase'>
                              Shonda Rhimes
                            </h3>
                            <h4 className='mc-text--muted'>
                              Teaches Writing
                            </h4>
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
                      <Background
                        color={intent
                          ? 'dark'
                          : 'transparent'
                        }
                      >
                        <h3 className='mc-text-h5 mc-text--uppercase'>
                          Shonda Rhimes
                        </h3>
                        <h4 className='mc-text--muted'>
                          Teaches Writing
                        </h4>
                      </Background>
                    </TileCaption>
                  </Tile>
                </AnimationHandler>
              }
            </HoverHandler>
          </DocSection>
        </div>

        <div className='col-lg-4 col-md-6'>
          <DocSection title='Extra'>
            <HoverHandler>
              {({ hovering }) =>
                <AnimationHandler
                  type='zoom'
                  animating={hovering}
                >
                  <div>
                    <Tile>
                      <TileImage imageUrl={shondaRhimesThumbnail} />
                      <TileOverlay type='gradient-bottom' />
                    </Tile>

                    <Background color={'medium'}>
                      <div style={{ padding: '1em' }}>
                        <h3 className='mc-text-h4 mc-text--uppercase'>
                          Shonda Rhimes
                        </h3>
                        <h4 className='mc-text-h5 mc-text--uppercase mc-text--muted mc-text--light mc-text--airy'>
                          Teaches Writing
                        </h4>
                      </div>
                    </Background>
                  </div>
                </AnimationHandler>
              }
            </HoverHandler>
          </DocSection>
        </div>
      </div>
    </div>
  ))


storiesOf('components|Tiles/Tile', module)
  .add('Tile', () => (
    <div className='container'>
      <div className='example__heading'>
        <h1 className='mc-text-h1'>Tile</h1>
      </div>

      <DocSection title='Variations'>
        <PropExample
          name='aspectRatio'
          type='String'
        >
          <div className='row'>
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

            <div className='col-sm-12'>
              <Tile aspectRatio='519x187'>
                <Placeholder>519x187</Placeholder>
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

            <div className='col-sm-12'>
              <Tile aspectRatio='21x9'>
                <Placeholder>21x9</Placeholder>
              </Tile>
            </div>
          </div>
        </PropExample>
      </DocSection>
    </div>
  ))

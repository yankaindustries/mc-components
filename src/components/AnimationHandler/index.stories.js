import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'

import AnimationHandler from './index'
import HoverHandler from '../HoverHandler'
import Button from '../Button'

import Tile from '../Tile'
import TileImage from '../TileImage'
import TileOverlay from '../TileOverlay'
import TileCaption from '../TileCaption'

import shondaRhimesThumbnail from '../../utils/shonda-rhimes.png'


storiesOf('utilities|AnimationHandler', module)
  .add('default', withProps(AnimationHandler)(() => (
    <div className='container'>
      <div className='example__heading'>
        <h1 className='mc-text-h1'>AnimationHandler</h1>
        <p className='mc-text--muted'>
          Easily apply unified animations to components
        </p>
      </div>

      <DocSection title='Variations'>
        <PropExample
          name='animation'
          type='String["zoom", "lift", "ken-burns"]'
        >
          <div className='row'>
            <div className='col-auto'>
              <HoverHandler>
                {({ hovering }) =>
                  <AnimationHandler type='zoom' animating={hovering}>
                    <div>
                      <Button>
                        Zoom
                      </Button>
                    </div>
                  </AnimationHandler>
                }
              </HoverHandler>
            </div>

            <div className='col-auto'>
              <HoverHandler>
                {({ hovering }) =>
                  <AnimationHandler type='lift' animating={hovering}>
                    <div>
                      <Button secondary>
                        Lift
                      </Button>
                    </div>
                  </AnimationHandler>
                }
              </HoverHandler>
            </div>

            <div className='col-auto'>
              <HoverHandler>
                {({ hovering }) =>
                  <AnimationHandler type='ken-burns' animating={hovering}>
                    <div>
                      <Button tertiary>
                        Ken Burns
                      </Button>
                    </div>
                  </AnimationHandler>
                }
              </HoverHandler>
            </div>
          </div>
        </PropExample>
      </DocSection>

      <DocSection title='Demo'>
        <PropExample>
          <div style={{ maxWidth: '500px' }}>
            <HoverHandler>
              {({ hovering }) =>
                <Tile>
                  <AnimationHandler type='ken-burns' animating={hovering}>
                    <TileImage imageUrl={shondaRhimesThumbnail} />
                  </AnimationHandler>

                  <TileOverlay type='gradient-bottom' />

                  <AnimationHandler type='lift' animating={hovering}>
                    <TileCaption>
                      <h2 className='mc-text-h2 mc-text--uppercase'>
                        Shonda Rhimes
                      </h2>
                      <h4 className='mc-text-h4 mc-text--uppercase mc-text--muted mc-text--normal mc-text--airy'>
                        Teaches Writing for Television
                      </h4>
                    </TileCaption>
                  </AnimationHandler>
                </Tile>
              }
            </HoverHandler>
          </div>
        </PropExample>
      </DocSection>
    </div>
  )))

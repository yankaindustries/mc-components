import React from 'react'
import { storiesOf } from '@storybook/react'

import DocSection from '../../utils/DocSection'
import PropsTable from '../../utils/PropsTable'
import PropExample from '../../utils/PropExample'

import AnimationHandler from './index'
import HoverHandler from '../HoverHandler'
import Button from '../Button'

import Tile from '../Tile'
import TileImage from '../TileImage'
import TileOverlay from '../TileOverlay'
import TileCaption from '../TileCaption'

import shondaRhimesThumbnail from '../../assets/shonda-rhimes-video.png'


storiesOf('utilities|AnimationHandler', module)
  .add('default',
    () => (
      <div className='container'>
        <h2>AnimationHandler</h2>

        <DocSection title='Variations'>
          <PropExample
            name='animation'
            type='String["zoom", "lift", "ken-burns"]'
          >
            <HoverHandler>
              {({ hovering }) =>
                <AnimationHandler type='zoom' animating={hovering}>
                  <Button primary>
                    Zoom
                  </Button>
                </AnimationHandler>
              }
            </HoverHandler>

            <HoverHandler>
              {({ hovering }) =>
                <AnimationHandler type='lift' animating={hovering}>
                  <Button secondary>
                    Lift
                  </Button>
                </AnimationHandler>
              }
            </HoverHandler>

            <HoverHandler>
              {({ hovering }) =>
                <AnimationHandler type='ken-burns' animating={hovering}>
                  <Button tertiary>
                    Ken Burns
                  </Button>
                </AnimationHandler>
              }
            </HoverHandler>
          </PropExample>
        </DocSection>

        <DocSection title='Example'>
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
                      <TileCaption
                        title='Shonda Rhimes'
                        subtitle='Teaches Writing for Television'
                        backdrop
                      />
                    </AnimationHandler>
                  </Tile>
                }
              </HoverHandler>
            </div>
          </PropExample>
        </DocSection>

        <DocSection title='Properties'>
          <div className='row'>
            <div className='col-lg-6 col-md-9'>
              <PropsTable component={AnimationHandler} />
            </div>
          </div>
        </DocSection>
      </div>
    ),
  )

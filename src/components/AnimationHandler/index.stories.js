import React from 'react'
import { storiesOf } from '@storybook/react'

import DocSection from '../../utils/DocSection'
import PropsTable from '../../utils/PropsTable'
import PropExample from '../../utils/PropExample'

import AnimationHandler from './index'
import HoverHandler from '../HoverHandler'
import Button from '../Button'
import ImageTile from '../ImageTile'
import ImageTileCaption from '../ImageTileCaption'

import shondaRhimesThumbnail from '../../assets/shonda-rhimes-video.png'


storiesOf('components|Utilities/AnimationHandler', module)
  .add('default',
    () => (
      <div className="container">
        <h2>AnimationHandler</h2>

        <DocSection title='Variations'>
          <PropExample
            name='animation'
            type='String["zoom", "lift", "ken-burns"]'
          >
            <HoverHandler>
              {({ hovering }) =>
                  <AnimationHandler animation='zoom' animating={hovering}>
                    <Button primary>Zoom</Button>
                  </AnimationHandler>
              }
            </HoverHandler>

            <HoverHandler>
              {({ hovering }) =>
                  <AnimationHandler animation='lift' animating={hovering}>
                    <Button secondary>Lift</Button>
                  </AnimationHandler>
              }
            </HoverHandler>

            <HoverHandler>
              {({ hovering }) =>
                  <AnimationHandler animation='ken-burns' animating={hovering}>
                    <Button tertiary>Ken Burns</Button>
                  </AnimationHandler>
              }
            </HoverHandler>
          </PropExample>
        </DocSection>

        <DocSection title='Example'>
          <PropExample>
            <div style={{ width: '500px' }}>
              <HoverHandler>
                {({ hovering }) =>
                  <div>
                    <AnimationHandler
                      animation="ken-burns"
                      animating={hovering}
                      cropped={true}
                    >
                        <ImageTile
                          imageUrl={shondaRhimesThumbnail}
                          aspectRatio='4x3'
                        />
                    </AnimationHandler>

                    <AnimationHandler
                      animation="lift"
                      animating={hovering}
                    >
                      <ImageTileCaption
                        title='Jane Doe'
                        subtitle='Teaches Something'
                        position={hovering ? 'below' : 'above'}
                      />
                    </AnimationHandler>
                  </div>
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

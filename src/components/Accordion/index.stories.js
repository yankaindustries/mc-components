import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'

import Accordion from '../Accordion'
import AnimationHandler from '../AnimationHandler'
import HoverHandler from '../HoverHandler'
import Button from '../Button'
import Tile from '../Tile'
import TileCaption from '../TileCaption'
import TileImage from '../TileImage'
import TileOverlay from '../TileOverlay'


const tiles = [
  {
    image: 'http://stephenpontes.com/clients/mc/images/gr.png',
    instructor: 'Gordon Ramsay',
    course: 'Teaches Cooking 1',
    description: 'Called the Prophet of Dystopia, Margaret Atwood is one of the most influential literary voices of our generation. Explore Margaret\'s creative process for developing ideas into novels with strong structures and nuanced characters.',
  },
  {
    image: 'http://stephenpontes.com/clients/mc/images/tk.png',
    instructor: 'Thomas Keller',
    course: 'Teaches Cooking Techniques II: Meats, Stocks, and Sauces',
    description: 'Called the Prophet of Dystopia, Margaret Atwood is one of the most influential literary voices of our generation. Explore Margaret\'s creative process for developing ideas into novels with strong structures and nuanced characters.',
  },
  {
    image: 'http://stephenpontes.com/clients/mc/images/da.png',
    instructor: 'Dominique Ansel',
    course: 'Teaches French Pastry Fundamentals',
    description: 'Called the Prophet of Dystopia, Margaret Atwood is one of the most influential literary voices of our generation. Explore Margaret\'s creative process for developing ideas into novels with strong structures and nuanced characters.',
  },
  {
    image: 'http://stephenpontes.com/clients/mc/images/dakr.jpg',
    instructor: 'David Axelrod and Karl Rove',
    course: 'Teaches Campaign Strategy and Messaging',
    description: 'Called the Prophet of Dystopia, Margaret Atwood is one of the most influential literary voices of our generation. Explore Margaret\'s creative process for developing ideas into novels with strong structures and nuanced characters.',
  },
]


storiesOf('components|Accordion', module)
  .add('Summary', withProps(Accordion)(() => (
    <div>
      <div className='container'>
        <DocHeader
          title='Accordion'
          description='
            Excellent for when you need to take a deeper dive when using
            short form content like a Tile.
          '
          experimental
        />

        <DocSection title='Demo'>
          <HoverHandler nowrap>
            {({ intent: parentHovering, props: parentProps }) =>
              <Accordion {...parentProps}>
                {tiles.map((tile, key) =>
                  <HoverHandler key={key} nowrap>
                    {({ intent: panelHovering, props: panelProps }) =>
                      <Tile aspectRatio='auto' {...panelProps}>
                        <TileImage imageUrl={tile.image} />

                        <AnimationHandler
                          type='hide'
                          animating={parentHovering}
                        >
                          <TileOverlay type='gradient-bottom' />
                          <TileCaption position='center bottom'>
                            <h4 className='mc-text-h4'>
                              {tile.instructor}
                            </h4>
                            <p className='mc-text--muted'>
                              {tile.course}
                            </p>
                          </TileCaption>
                        </AnimationHandler>

                        <AnimationHandler
                          type='show-delayed'
                          animating={panelHovering}
                        >
                          <div>
                            <TileOverlay type='gradient-left' />
                            <TileCaption position='left center'>
                              <div className='row'>
                                <div className='col-4 offset-1'>
                                  <h4 className='mc-text-h4'>
                                    {tile.instructor}
                                  </h4>
                                  <p className='mc-text--muted'>
                                    {tile.course}
                                  </p>
                                  <p className='mc-mb-4'>
                                    {tile.description}
                                  </p>
                                  <Button>Start Class</Button>
                                </div>
                              </div>
                            </TileCaption>
                          </div>
                        </AnimationHandler>
                      </Tile>
                    }
                  </HoverHandler>,
                )}
              </Accordion>
            }
          </HoverHandler>
        </DocSection>
      </div>
    </div>
  )))

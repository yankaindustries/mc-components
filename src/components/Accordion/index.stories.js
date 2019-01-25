import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'

import Accordion from '../Accordion'
import AnimationHandler from '../AnimationHandler'
import HoverHandler from '../HoverHandler'
import Button from '../Button'
import ResponsiveHandler from '../ResponsiveHandler'
import Tile from '../Tile'
import TileCaption from '../TileCaption'
import TileImage from '../TileImage'
import TileOverlay from '../TileOverlay'


const instructors = [
  {
    image: 'http://stephenpontes.com/clients/mc/images/gr.png',
    instructor: 'Gordon Ramsay',
    course: 'Teaches Cooking 1',
    description: 'Oscar, Golden Globe, Emmy, and Tony winner Helen Mirren is one of the greatest actresses of our time. In her first online class, she discusses the dualism that is core to her method: the necessity for mastering technique (craft) and then letting go so that your imagination can take over (art)...',
  },
  {
    image: 'http://stephenpontes.com/clients/mc/images/tk.png',
    instructor: 'Thomas Keller',
    course: 'Teaches Cooking Techniques II: Meats, Stocks, and Sauces',
    description: 'Oscar, Golden Globe, Emmy, and Tony winner Helen Mirren is one of the greatest actresses of our time. In her first online class, she discusses the dualism that is core to her method: the necessity for mastering technique (craft) and then letting go so that your imagination can take over (art)...',
  },
  {
    image: 'http://stephenpontes.com/clients/mc/images/da.png',
    instructor: 'Dominique Ansel',
    course: 'Teaches French Pastry Fundamentals',
    description: 'Oscar, Golden Globe, Emmy, and Tony winner Helen Mirren is one of the greatest actresses of our time. In her first online class, she discusses the dualism that is core to her method: the necessity for mastering technique (craft) and then letting go so that your imagination can take over (art)...',
  },
  {
    image: 'http://stephenpontes.com/clients/mc/images/dakr.jpg',
    instructor: 'David Axelrod and Karl Rove',
    course: 'Teaches Campaign Strategy and Messaging',
    description: 'Oscar, Golden Globe, Emmy, and Tony winner Helen Mirren is one of the greatest actresses of our time. In her first online class, she discusses the dualism that is core to her method: the necessity for mastering technique (craft) and then letting go so that your imagination can take over (art)...',
  },
]

const responsiveValues = ({ gteLG, gteMD }, lg, md, sm) => {
  if (gteLG) {
    return lg
  }

  if (gteMD) {
    return md
  }

  return sm
}


storiesOf('Components|Accordion', module)
  .add('Summary', withProps(Accordion)(() => (
    <ResponsiveHandler>
      {media =>
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
                <Accordion
                  className='mc-mb-10'
                  aspectRatio={responsiveValues(media, '21x9', '16x9', '4x3')}
                  {...parentProps}
                >
                  {instructors
                    .slice(0, responsiveValues(media, 4, 3, 2))
                    .map((tile, key) =>
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
                              <h6 className='mc-text-h6 mc-text--airy mc-mb-2'>
                                {tile.instructor}
                              </h6>
                              <p className='mc-text-small mc-text--hinted'>
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
                                    <h6 className='mc-text-h6 mc-text--airy mc-mb-2'>
                                      {tile.instructor}
                                    </h6>
                                    <p className='mc-text-small mc-text--hinted mc-mb-8'>
                                      {tile.course}
                                    </p>
                                    <p className='mc-text-x-small mc-text--hinted mc-mb-8'>
                                      {tile.description}
                                    </p>
                                    <Button
                                      className='mc-mc-3'
                                      fullWidth
                                    >
                                      Start Class
                                    </Button>
                                    <Button
                                      fullWidth
                                      link
                                    >
                                      Watch Trailer
                                    </Button>
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
      }
    </ResponsiveHandler>
  )))

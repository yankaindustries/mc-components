import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'

import Carousel from '../Carousel'
import Tile from '../Tile'
import TileImage from '../TileImage'
import TileOverlay from '../TileOverlay'
import TileCaption from '../TileCaption'
import ResponsiveHandler from '../ResponsiveHandler'

import { responsiveValues } from '../helpers'


const items = [
  {
    id: 1,
    thumbnail: 'images/instructors/thumb-rh.jpg',
    image: 'images/instructors/full-rh.jpg',
    instructor: 'Ron Howard',
    teaches: 'Directing',
  },
  {
    id: 2,
    thumbnail: 'images/instructors/thumb-wh.jpg',
    image: 'images/instructors/full-wh.jpg',
    instructor: 'Werner Herzog',
    teaches: 'Filmmaking',
  },
  {
    id: 3,
    thumbnail: 'images/instructors/thumb-dvf.jpg',
    image: 'images/instructors/full-dvf.jpg',
    instructor: 'Diane Von Furstenberg',
    teaches: 'Building a Fashion Brand',
  },
  {
    id: 4,
    thumbnail: 'images/instructors/thumb-dm.jpg',
    image: 'images/instructors/full-dm.jpg',
    instructor: 'deadmau5',
    teaches: 'Electronic Music Production',
  },
  {
    id: 5,
    thumbnail: 'images/instructors/thumb-slj.jpg',
    image: 'images/instructors/full-slj.jpg',
    instructor: 'Samuel L. Jackson',
    teaches: 'Acting',
  },
  {
    id: 6,
    thumbnail: 'images/instructors/thumb-tk.jpg',
    image: 'images/instructors/full-tk.jpg',
    instructor: 'Thomas Keller',
    teaches: 'Cooking Techniques',
  },
  {
    id: 7,
    thumbnail: 'images/instructors/thumb-sr.jpg',
    image: 'images/instructors/full-sr.jpg',
    instructor: 'Shonda Rhimes',
    teaches: 'Writing for Television',
  },
]

const tiles = () =>
  items.map(item =>
    <div key={item.id} className='col-auto'>
      <Tile>
        <TileImage imageUrl={item.thumbnail} />
        <TileOverlay />
        <TileCaption>
          <h6 className='mc-text-h6 mc-text--uppercase'>
            {item.instructor}
          </h6>
          <h6 className='mc-text-h8 mc-text--airy mc-opacity--muted'>
            {item.teaches}
          </h6>
        </TileCaption>
      </Tile>
    </div>,
  )

const random = (min, max) =>
  Math.floor(min + (Math.random() * (max - min)))


storiesOf('Components|Carousel', module)
  .add('Carousel', withAddons({
    path: 'components/Carousel/index.stories.js',
    component: Carousel,
  })(() =>
    <ResponsiveHandler>
      {media =>
        <div className='container'>
          <DocHeader title='Carousel' />

          <DocSection title='Props'>
            <PropExample
              name='autoPlay'
              type='Boolean'
            >
              <Carousel
                className='row'
                showCount={responsiveValues(media, 3, 2, 1)}
                autoPlay
              >
                {tiles()}
              </Carousel>
            </PropExample>

            <PropExample
              name='centered'
              type='Boolean'
            >
                <Carousel
                  className='row'
                  showCount={responsiveValues(media, 3, 2, 1)}
                  centered
                >
                  {tiles()}
                </Carousel>
            </PropExample>

            <PropExample
              name='controls'
              type='Boolean'
            >
                <Carousel
                  className='row'
                  showCount={responsiveValues(media, 3, 2, 1)}
                  controls
                >
                  {tiles()}
                </Carousel>
            </PropExample>

            <PropExample
              name='dots'
              type='Boolean'
            >
                <Carousel
                  className='row'
                  showCount={responsiveValues(media, 3, 2, 1)}
                  dots
                >
                  {tiles()}
                </Carousel>
            </PropExample>

            <PropExample
              name='overflow'
              type='Boolean'
            >
              <Carousel
                className='row'
                showCount={responsiveValues(media, 3, 2, 1)}
                overflow
              >
                {tiles()}
              </Carousel>
            </PropExample>


            <PropExample
              name='peek'
              type='Boolean'
            >
                <Carousel
                  className='row'
                  showCount={responsiveValues(media, 3, 2, 1)}
                  peek
                >
                  {tiles()}
                </Carousel>
            </PropExample>


            <PropExample
              name='color'
              type='String'
            >
                <Carousel
                  className='row'
                  showCount={responsiveValues(media, 3, 2, 1)}
                  peek
                  color='0, 255, 0'
                >
                  {tiles()}
                </Carousel>
            </PropExample>


            <PropExample
              name='focusOnSelect'
              type='Boolean'
            >
                <Carousel
                  className='row'
                  showCount={responsiveValues(media, 3, 2, 1)}
                  focusOnSelect loop
                >
                  {tiles()}
                </Carousel>
            </PropExample>

            <PropExample
              name='loop'
              type='Boolean'
            >
                <Carousel
                  className='row'
                  showCount={responsiveValues(media, 3, 2, 1)}
                  loop
                >
                  {tiles()}
                </Carousel>
            </PropExample>

            <PropExample
              name='highlightOnActive'
              type='Boolean'
            >
                <Carousel
                  className='row'
                  showCount={responsiveValues(media, 3, 2, 1)}
                  highlightOnActive
                >
                  {tiles()}
                </Carousel>
            </PropExample>

            <PropExample
              name='highlightOnHover'
              type='Boolean'
            >
                <Carousel
                  className='row'
                  showCount={responsiveValues(media, 3, 2, 1)}
                  highlightOnHover
                >
                  {tiles()}
                </Carousel>
            </PropExample>

            <PropExample
              name='scrollCount'
              type='Number'
            >
                <Carousel
                  className='row'
                  scrollCount={2}
                  controls
                >
                  {tiles()}
                </Carousel>
            </PropExample>

            <PropExample
              name='showCount'
              type='Number'
            >
                <Carousel
                  className='row'
                  showCount={2}
                  controls
                >
                  {tiles()}
                </Carousel>
            </PropExample>


            <PropExample
              name='transition'
              type='String'
            >
                <Carousel
                  className='row'
                  transition='slide'
                  controls
                >
                  {tiles()}
                </Carousel>

                <Carousel
                  className='row'
                  transition='fade'
                  controls
                >
                  {tiles()}
                </Carousel>
            </PropExample>

            <PropExample
              name='variableWidth'
              type='Boolean'
            >
                <Carousel
                  className='row'
                  variableWidth
                >
                  {items.map(item =>
                    <div key={item.id} className='col-auto' style={{ width: random(200, 600) }}>
                      <Tile>
                        <TileImage imageUrl={item.thumbnail} />
                        <TileOverlay />
                        <TileCaption>
                          <h6 className='mc-text-h6 mc-text--uppercase'>
                            {item.instructor}
                          </h6>
                          <h6 className='mc-text-h8 mc-text--airy mc-opacity--muted'>
                            {item.teaches}
                          </h6>
                        </TileCaption>
                      </Tile>
                    </div>,
                  )}
                </Carousel>
            </PropExample>
          </DocSection>
        </div>
      }
    </ResponsiveHandler>,
  ))

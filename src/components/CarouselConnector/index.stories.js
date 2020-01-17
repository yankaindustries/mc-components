import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'

import Carousel from '../Carousel'
import CarouselConnector from '../CarouselConnector'
import Tile from '../Tile'
import TileImage from '../TileImage'
import TileOverlay from '../TileOverlay'
import TileCaption from '../TileCaption'


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


storiesOf('Components|Carousel', module)
  .add('CarouselConnector', withAddons({
    path: 'components/CarouselConnector/index.stories.js',
    component: CarouselConnector,
  })(() =>
    <div className='container'>
      <DocHeader
        title='CarouselConnector'
        description='Mechanism to keep two carousels in sync.'
      />

      <DocSection
        title='Props'
      >
        <PropExample
          name='children'
          type='function({ sliderRef, asNavFor })'
        >
          <CarouselConnector>
            {({ sliderRef, asNavFor }) =>
              <Fragment>
                <Carousel
                  className='row'
                  sliderRef={sliderRef('hero')}
                  asNavFor={asNavFor('thumbs')}
                  controls
                >
                  {tiles()}
                </Carousel>

                <hr className='mc-my-4' />

                <Carousel
                  className='row'
                  sliderRef={sliderRef('thumbs')}
                  asNavFor={asNavFor('hero')}
                  controls
                >
                  {tiles()}
                </Carousel>
              </Fragment>
            }
          </CarouselConnector>
        </PropExample>
      </DocSection>
    </div>,
  ))

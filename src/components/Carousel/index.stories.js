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
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/920/original/1509413132-Slide_Thumb.jpg%3F1509413132',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1096/original/1510703201-RH_Class_Hero.jpg%3F1510703201',
    instructor: 'Ron Howard',
    teaches: 'Directing',
  },
  {
    id: 2,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/332/original/1477793873-wh-tile.jpg%3F1477793873',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/331/original/1495558129-hero-wh-v3.jpg%3F1495558129',
    instructor: 'Werner Herzog',
    teaches: 'Filmmaking',
  },
  {
    id: 3,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/628/original/1493844712-DVF_SlideThumb_V1_A.jpg%3F1493844712',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/627/original/1495558421-hero-dvf-v3.jpg%3F1495558421',
    instructor: 'Diane Von Furstenberg',
    teaches: 'Building a Fashion Brand',
  },
  {
    id: 4,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/354/original/1479173180-DM5_SlideThumb_V2_A_%25281%2529.jpg%3F1479173180',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/561/original/1489515027-DM5_CM_Hero_V1_A.jpg%3F1489515027',
    instructor: 'deadmau5',
    teaches: 'Electronic Music Production',
  },
  {
    id: 5,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/867/original/1508818886-SLJ_SlideThumb_V2_A.jpg%3F1508818886',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/866/original/1508818329-SLJ_class_hero_no_gradient.jpg%3F1508818329',
    instructor: 'Samuel L. Jackson',
    teaches: 'Acting',
  },
  {
    id: 6,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/1087/original/1510618603-Slide_Thumb.jpg%3F1510618603',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1070/original/1510618084-Class_Hero.jpg%3F1510618084',
    instructor: 'Thomas Keller',
    teaches: 'Cooking Techniques',
  },
  {
    id: 7,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/428/original/1481770014-SR_SlideThumb_V1_B.jpg%3F1481770014',
    image: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/429/original/1495558277-hero-sr-v3.jpg%3F1495558277',
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

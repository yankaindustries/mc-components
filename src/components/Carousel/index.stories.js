import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'

import Carousel from '../Carousel'
import Tile from '../Tile'
import TileImage from '../TileImage'
import ResponsiveHandler from '../ResponsiveHandler'

import { responsiveValues } from '../helpers'


const items = [
  {
    id: 1,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/920/original/1509413132-Slide_Thumb.jpg%3F1509413132',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1096/original/1510703201-RH_Class_Hero.jpg%3F1510703201',
  },
  {
    id: 2,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/332/original/1477793873-wh-tile.jpg%3F1477793873',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/331/original/1495558129-hero-wh-v3.jpg%3F1495558129',
  },
  {
    id: 3,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/628/original/1493844712-DVF_SlideThumb_V1_A.jpg%3F1493844712',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/627/original/1495558421-hero-dvf-v3.jpg%3F1495558421',
  },
  {
    id: 4,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/354/original/1479173180-DM5_SlideThumb_V2_A_%25281%2529.jpg%3F1479173180',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/561/original/1489515027-DM5_CM_Hero_V1_A.jpg%3F1489515027',
  },
  {
    id: 5,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/867/original/1508818886-SLJ_SlideThumb_V2_A.jpg%3F1508818886',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/866/original/1508818329-SLJ_class_hero_no_gradient.jpg%3F1508818329',
  },
  {
    id: 6,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/1087/original/1510618603-Slide_Thumb.jpg%3F1510618603',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1070/original/1510618084-Class_Hero.jpg%3F1510618084',
  },
  {
    id: 7,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/428/original/1481770014-SR_SlideThumb_V1_B.jpg%3F1481770014',
    image: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/429/original/1495558277-hero-sr-v3.jpg%3F1495558277',
  },
]

const tiles = () =>
  items.map((item, key) => (
    <div key={key} className='col-auto'>
      <Tile key={item.id}>
        <TileImage imageUrl={item.thumbnail} />
      </Tile>
    </div>
  ))


storiesOf('Components|Carousels')
  .add('Summary', withProps(Carousel)(() => (
    <ResponsiveHandler>
      {(media) =>
        <div className='container'>
          <div className='example__heading'>
            <h1 className='mc-text-h1'>Carousels</h1>
            <p className='mc-text--muted'>
              Show off content in a horizontally paginated way.
            </p>
          </div>

          <DocSection title='Demo'>
            <Carousel
              className='row'
              controls={responsiveValues(media, true, true, false)}
              peek={responsiveValues(media, false, false, true)}
              showCount={responsiveValues(media, 3, 2, 1)}
            >
              {tiles()}
            </Carousel>
          </DocSection>
        </div>
      }
    </ResponsiveHandler>
  )))


storiesOf('Components|Carousels/Carousel', module)
  .add('Carousel', withProps(Carousel)(() => (
    <ResponsiveHandler>
      {(media) =>
        <div className='container'>
          <div className='example__heading'>
            <h1 className='mc-text-h1'>Carousel</h1>
          </div>

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
          </DocSection>
        </div>
      }
    </ResponsiveHandler>
  )))

import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import Carousel from '../Carousel'
import Tile from '../Tile'
import TileImage from '../TileImage'
import ResponsiveHandler from '../ResponsiveHandler'


const items = [
  { id: 1, image: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/920/original/1509413132-Slide_Thumb.jpg%3F1509413132' },
  { id: 2, image: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/332/original/1477793873-wh-tile.jpg%3F1477793873' },
  { id: 3, image: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/628/original/1493844712-DVF_SlideThumb_V1_A.jpg%3F1493844712' },
  { id: 4, image: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/354/original/1479173180-DM5_SlideThumb_V2_A_%25281%2529.jpg%3F1479173180' },
  { id: 5, image: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/867/original/1508818886-SLJ_SlideThumb_V2_A.jpg%3F1508818886' },
  { id: 6, image: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/1087/original/1510618603-Slide_Thumb.jpg%3F1510618603' },
  { id: 7, image: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/428/original/1481770014-SR_SlideThumb_V1_B.jpg%3F1481770014' },
]

// const hero = React.createRef()
// const thumbs = React.createRef()

storiesOf('components|Carousel', module)
  .add('default', withProps(Carousel)(() => (
    <div className='container'>
      <br />
      <br />
      <br />

      <Carousel
        showCount={1}
        transition='fade'
        infinite
      >
        {items.map((item, key) => (
          <div key={key}>
            <Tile key={item.id}>
              <TileImage imageUrl={item.image} />
            </Tile>
          </div>
        ))}
      </Carousel>

      <br />

      <ResponsiveHandler>
        {({ ltMD }) =>
          <div>
            <Carousel
              className='row'
              showCount={ltMD ? 2 : 3}
              autoPlay
              centered
              infinite
            >
              {items.map((item, key) => (
                <div key={key} className='col-auto'>
                  <Tile key={item.id}>
                    <TileImage imageUrl={item.image} />
                  </Tile>
                </div>
              ))}
            </Carousel>

            <hr />

            <Carousel
              className='row'
              showCount={ltMD ? 2 : 3}
              centered
              controls
              fadeOut
              infinite
            >
              {items.map((item, key) => (
                <div key={key} className='col-auto'>
                  <Tile key={item.id}>
                    <TileImage imageUrl={item.image} />
                  </Tile>
                </div>
              ))}
            </Carousel>
          </div>
        }
      </ResponsiveHandler>

      <hr />

      <div className='row'>
        {items.map((item, key) => (
          <div key={key} className='col-md-4 col-6'>
            <Tile key={item.id}>
              <TileImage imageUrl={item.image} />
            </Tile>
          </div>
        ))}
      </div>
    </div>
  )))

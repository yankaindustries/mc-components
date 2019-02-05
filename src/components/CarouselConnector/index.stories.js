import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import Carousel from '../Carousel'
import CarouselConnector from '../CarouselConnector'
import Tile from '../Tile'
import TileImage from '../TileImage'
import TileOverlay from '../TileOverlay'
import TileCaption from '../TileCaption'
import Button from '../Button'
import ResponsiveHandler from '../ResponsiveHandler'


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


storiesOf('Components|Carousels/CarouselConnector', module)
  .add('CarouselConnector', withProps(CarouselConnector)(() => (
    <CarouselConnector>
      {({ sliderRef, asNavFor }) =>
        <ResponsiveHandler>
          {({ gteMD }) =>
            <div className='container'>
              <Carousel
                sliderRef={sliderRef('hero')}
                asNavFor={asNavFor('thumbs')}
                transition='fade'
                loop
              >
                {items.map((item, key) =>
                  <div className='uncontainer' key={key}>
                    <Tile
                      className='mc-hero__image'
                      aspectRatio={gteMD ? '16x9' : '1x1'}
                    >
                      <TileImage
                        className='example-offset-left-one-quarter example-offset-left-one-quarter--active'
                        imageUrl={item.image}
                      />
                      <TileOverlay
                        className='example-offset-left-one-quarter example-offset-left-one-quarter--active'
                        type='spotlight'
                      />
                      <TileCaption position='left center'>
                        <div className='row row--fill align-items-center'>
                          <div className='offset-1 col-xl-5 col-md-8 col-lg-6'>
                            <h2 className='mc-text-h1 mc-text--uppercase mc-text--center mc-text-md--left'>
                              {item.instructor}
                            </h2>
                            <h3 className='mc-text-h3 mc-text--muted mc-text--airy mc-text--center mc-text-md--left mc-mb-4'>
                              Teaches {item.teaches}
                            </h3>
                            <p className='mc-text-intro mc-text--hinted mc-text--center mc-text-md--left mc-mb-8'>
                              Online classes taught by the world&apos;s
                              greatest minds.<br /> Learn from
                              {item.instructor} and all 35+ other
                              instructors.
                            </p>
                            <div className='row'>
                              <div className='col-auto'>
                                <Button primary>
                                  All Access Pass
                                </Button>
                              </div>
                              <div className='col-auto'>
                                <Button secondary>
                                  Learn More
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TileCaption>
                    </Tile>
                  </div>,
                )}
              </Carousel>

              <Carousel
                className='row'
                sliderRef={sliderRef('thumbs')}
                asNavFor={asNavFor('hero')}
                centered
                overflow
                focusOnSelect
                loop
                controls={gteMD}
              >
                {items.map((item, key) => (
                  <div key={key} className='col-auto'>
                    <Tile key={item.id}>
                      <TileImage imageUrl={item.thumbnail} />
                      {gteMD && <TileOverlay />}
                      {gteMD &&
                        <TileCaption
                          title={item.instructor}
                          subtitle={`Teaches ${item.teaches}`}
                        />
                      }
                    </Tile>
                  </div>
                ))}
              </Carousel>
            </div>
          }
        </ResponsiveHandler>
      }
    </CarouselConnector>
  )))

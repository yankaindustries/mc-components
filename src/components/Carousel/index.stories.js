import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import Carousel from '../Carousel'
import CarouselConnector from '../CarouselConnector'
import Tile from '../Tile'
import TileImage from '../TileImage'
import TileOverlay from '../TileOverlay'
import Button from '../Button'
import Header from '../HeaderLoggedOut'
import ResponsiveHandler from '../ResponsiveHandler'



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

storiesOf('components|Carousel', module)
  .add('default', withProps(Carousel)(() => (
    <div>
      <Header />

      <CarouselConnector>
        {({ sliderRef, asNavFor }) =>
          <div>
            <div className='mc-hero'>
              <ResponsiveHandler>
                {({ gteMD }) =>
                  <Carousel
                    sliderRef={sliderRef('hero')}
                    asNavFor={asNavFor('thumbs')}
                    transition='fade'
                    loop
                  >
                    {items.map((item, key) => (
                      <div key={key} className='container'>
                        <Tile
                          key={key}
                          aspectRatio={gteMD ? '16x9' : '3x4'}
                          naked
                        >
                          <Tile
                            className='mc-hero__image'
                            aspectRatio={gteMD ? '16x9' : '3x4'}
                            naked
                          >
                            <TileImage imageUrl={item.image} />
                            <TileOverlay type='offset-spotlight' />
                          </Tile>

                          <div className='mc-hero__content'>
                            <div className='row row--fill align-items-center'>
                              <div className='col-xl-5 col-lg-6 col-md-8'>
                                <h2 className='mc-text-d1 mc-text--uppercase mc-text-center mc-text-md-left'>
                                  Alice Waters
                                </h2>
                                <h3 className='mc-text-h3 mc-text--muted mc-text-center mc-text-md-left'>
                                  Teaches the art of home cooking
                                </h3>
                                <br />
                                <p className='mc-text-intro mc-text-center mc-text-md-left'>
                                  Online classes taught by the world&apos;s
                                  greatest minds.<br /> Learn from Alice Waters
                                  and all 35+ other instructors.
                                </p>
                                <br />
                                <div className='row'>
                                  <div className='col-md-6'>
                                    <Button primary fullWidth>
                                      All Access Pass
                                    </Button>
                                  </div>
                                  <div className='col-md-6'>
                                    <Button secondary fullWidth>
                                      Learn More
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tile>
                      </div>
                    ))}
                  </Carousel>
                }
              </ResponsiveHandler>
            </div>

            <div className='container'>
              <Carousel
                className='row'
                sliderRef={sliderRef('thumbs')}
                asNavFor={asNavFor('hero')}
                centered
                fadeEdges
                focusOnSelect
                loop
                controls
              >
                {items.map((item, key) => (
                  <div key={key} className='col-auto'>
                    <Tile key={item.id}>
                      <TileImage imageUrl={item.thumbnail} />
                    </Tile>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        }
      </CarouselConnector>
    </div>
  )))

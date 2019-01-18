import React from 'react'
import { storiesOf } from '@storybook/react'

import Carousel from '../../components/Carousel'
import Badge from '../../components/Badge'
import Button from '../../components/Button'
import Tile from '../../components/Tile'
import TileImage from '../../components/TileImage'
import TileOverlay from '../../components/TileOverlay'
import TileCaption from '../../components/TileCaption'
import AnimationHandler from '../../components/AnimationHandler'
import HoverHandler from '../../components/HoverHandler'

const jbi = [
  {
    id: 1,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/920/original/1509413132-Slide_Thumb.jpg%3F1509413132',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1096/original/1510703201-RH_Class_Hero.jpg%3F1510703201',
    instructor: 'Ron Howard',
    lesson: '01. Banana bread mastery.',
    extract: 'Do ugly vegetables taste better? Which are the most versatile herbs? Gordon shows you how to select great produce to create phenomenal dishes.',
  },
  {
    id: 2,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/332/original/1477793873-wh-tile.jpg%3F1477793873',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/331/original/1495558129-hero-wh-v3.jpg%3F1495558129',
    instructor: 'Werner Herzog',
    lesson: '07. Nose flute for beginners',
    extract: 'Do ugly vegetables taste better? Which are the most versatile herbs? Gordon shows you how to select great produce to create phenomenal dishes.',
  },
  {
    id: 3,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/628/original/1493844712-DVF_SlideThumb_V1_A.jpg%3F1493844712',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/627/original/1495558421-hero-dvf-v3.jpg%3F1495558421',
    instructor: 'Diane Von Furstenberg',
    lesson: '03. Choosing your first tattoo',
    extract: 'Do ugly vegetables taste better? Which are the most versatile herbs? Gordon shows you how to select great produce to create phenomenal dishes.',
  },
  {
    id: 4,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/354/original/1479173180-DM5_SlideThumb_V2_A_%25281%2529.jpg%3F1479173180',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/561/original/1489515027-DM5_CM_Hero_V1_A.jpg%3F1489515027',
    instructor: 'deadmau5',
    lesson: '08. Picking a mask to hide your face',
    extract: 'Do ugly vegetables taste better? Which are the most versatile herbs? Gordon shows you how to select great produce to create phenomenal dishes.',
  },
  {
    id: 5,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/867/original/1508818886-SLJ_SlideThumb_V2_A.jpg%3F1508818886',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/866/original/1508818329-SLJ_class_hero_no_gradient.jpg%3F1508818329',
    instructor: 'Samuel L. Jackson',
    lesson: '11. Say what again, and the eloquent use of profanity in classical theatrical productions',
    extract: 'Do ugly vegetables taste better? Which are the most versatile herbs? Gordon shows you how to select great produce to create phenomenal dishes.',
  },
  {
    id: 6,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/1087/original/1510618603-Slide_Thumb.jpg%3F1510618603',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1070/original/1510618084-Class_Hero.jpg%3F1510618084',
    instructor: 'Thomas Keller',
    lesson: '02. Make: Pinterest fails turned into fuel for your fireplace',
    extract: 'Do ugly vegetables taste better? Which are the most versatile herbs? Gordon shows you how to select great produce to create phenomenal dishes.',
  },
  {
    id: 7,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/428/original/1481770014-SR_SlideThumb_V1_B.jpg%3F1481770014',
    image: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/429/original/1495558277-hero-sr-v3.jpg%3F1495558277',
    instructor: 'Shonda Rhimes',
    lesson: '04. Enemy of the state? How to become a hide and seek master',
    extract: 'Do ugly vegetables taste better? Which are the most versatile herbs? Gordon shows you how to select great produce to create phenomenal dishes.',
  },
]


const playlist = [
  {
    id: 1,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/920/original/1509413132-Slide_Thumb.jpg%3F1509413132',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1096/original/1510703201-RH_Class_Hero.jpg%3F1510703201',
    playlist: 'Creative Life',
    count: '6',
    lesson: 'Leadership',
    extract: 'Take charge of being in charge.',
  },
  {
    id: 2,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/920/original/1509413132-Slide_Thumb.jpg%3F1509413132',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1096/original/1510703201-RH_Class_Hero.jpg%3F1510703201',
    playlist: 'Creative Life',
    count: '6',
    lesson: 'Developing Characters For The Screen',
    extract: 'The best actors create characters you can\'t forget. Actors and directors on the ingredients jha kljnsln lksnlkn sklnlsao eiown.',
  },
  {
    id: 3,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/920/original/1509413132-Slide_Thumb.jpg%3F1509413132',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1096/original/1510703201-RH_Class_Hero.jpg%3F1510703201',
    playlist: 'Creative Life',
    count: '6',
    lesson: 'Dinner For a Special Occassion',
    extract: 'Showing up every day to do the work can be hard. Reflections on the deep motivations that are the foundation of great work hkuhiu ujhek.',
  },
  {
    id: 4,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/920/original/1509413132-Slide_Thumb.jpg%3F1509413132',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1096/original/1510703201-RH_Class_Hero.jpg%3F1510703201',
    playlist: 'Creative Life',
    count: '6',
    lesson: 'Developing Characters For The Screen',
    extract: 'The best actors create characters you can\'t forget. Actors and directors on the ingredients jha kljnsln lksnlkn sklnlsao eiown.',
  },
  {
    id: 5,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/920/original/1509413132-Slide_Thumb.jpg%3F1509413132',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1096/original/1510703201-RH_Class_Hero.jpg%3F1510703201',
    playlist: 'Creative Life',
    count: '6',
    lesson: 'Leadership',
    extract: 'Take charge of being in charge.',
  },
  {
    id: 6,
    thumbnail: 'http://res.cloudinary.com/drr3rfplf/image/fetch/dpr_auto,f_auto,q_auto:best/https://masterclass-development.s3-us-west-1.amazonaws.com/images/920/original/1509413132-Slide_Thumb.jpg%3F1509413132',
    image: 'https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1096/original/1510703201-RH_Class_Hero.jpg%3F1510703201',
    playlist: 'Creative Life',
    count: '6',
    lesson: 'Dinner For a Special Occassion',
    extract: 'Showing up every day to do the work can be hard. Reflections on the deep motivations that are the foundation of great work hkuhiu ujhek.',
  },
]

storiesOf('Playground|Pages', module)
  .add('LIHP', () =>
    <div className='container mc-pt-5'>
      <h5 className={`
        mc-text-h5
        mc-text--airy
        mc-mb-6
      `}>
        Jump Back In
      </h5>

      <Carousel
        slidesToShow={4}
        controls
        className='row'
      >
        {jbi.map((item, key) => (
          <div key={key} className='col-auto'>
            <HoverHandler>
              {({ intent }) =>
              <AnimationHandler type='zoom-tile' animating={intent}>
                <Tile key={item.id}>
                  <TileImage imageUrl={item.thumbnail} />
                  <TileOverlay />

                  <TileCaption
                    position='center bottom'
                  >
                    <div className='mc-tile__reveal-on-hover'>
                      <Button secondary>Resume</Button>
                    </div>
                  </TileCaption>

                  <TileCaption
                    position='left below'
                  >
                    <h6 className={`
                      mc-text-h7
                      mc-text--uppercase
                      mc-text--muted
                      mc-mb-2
                    `}>
                      {item.instructor}
                    </h6>
                    <p>
                      {`${item.lesson}`}
                    </p>

                    <div className='mc-tile__reveal-on-hover'>
                      <p className={`
                        mc-mt-2
                        mc-text-small
                        mc-text--muted
                      `}>
                        {`${item.extract}`}
                      </p>
                    </div>
                  </TileCaption>
                </Tile>
                </AnimationHandler>
              }
            </HoverHandler>
          </div>
        ))}
      </Carousel>

      <div className='mc-py-10'></div>

      <h5 className={`
        mc-text-h5
        mc-text--airy
        mc-mb-6
      `}>
        Playlist in Creative Life
      </h5>

      <Carousel
        slidesToShow={3}
        controls
        className='row'
      >
        {playlist.map((item, key) => (
          <div key={key} className='col-auto'>
            <Tile
              key={item.id}
              aspectRatio='2x3'
             >
              <TileImage imageUrl={item.thumbnail} />
              <TileOverlay />

              <TileCaption
                position='left bottom'
              >
                <div className='mc-p-4'>
                  <div className={`
                    d-flex
                    align-items-center
                    justify-content-between
                  `}>
                    <h6 className={`
                      mc-text-h8
                      mc-text--uppercase
                    `}>
                      {item.playlist}
                    </h6>

                    <Badge>
                      <span className='mc-text-small'>6 Videos</span>
                    </Badge>
                  </div>

                  <h5 className='mc-text-h5'>
                    {`${item.lesson}`}
                  </h5>
                  <p className={`
                    mc-mt-2
                    mc-text-small
                    mc-text--hinted
                    mc-text--3-lines
                  `}>
                    {`${item.extract}`}
                  </p>
                </div>
              </TileCaption>
            </Tile>
          </div>
        ))}
      </Carousel>

    </div>,
  )

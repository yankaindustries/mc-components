/* eslint react/display-name:0, react/prop-types:0 */
import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { times } from 'lodash'

import withAddons from '../../utils/withAddons'

import Accordion from '../../components/Accordion'
import AnimationHandler from '../../components/AnimationHandler'
import Badge from '../../components/Badge'
import Button from '../../components/Button'
import Carousel from '../../components/Carousel'
import HoverHandler from '../../components/HoverHandler'
import IconPlay from '../../components/Icons/Play'
import ResponsiveHandler from '../../components/ResponsiveHandler'
import Tile from '../../components/Tile'
import TileCaption from '../../components/TileCaption'
import TileImage from '../../components/TileImage'
import TileOverlay from '../../components/TileOverlay'
import TileProgress from '../../components/TileProgress'

import { responsiveValues } from '../../components/helpers'

const jbi = [
  {
    id: 1,
    thumbnail: 'images/instructors/thumb-rh.jpg',
    image: 'images/instructors/full-rh.jpg',
    instructor: 'Ron Howard',
    lesson: '01. Banana Bread Mastery.',
    extract: 'Do ugly vegetables taste better? Which are the most versatile herbs? Gordon shows you how to select great produce to create phenomenal dishes.',
  },
  {
    id: 2,
    thumbnail: 'images/instructors/thumb-wh.jpg',
    image: 'images/instructors/full-wh.jpg',
    instructor: 'Werner Herzog',
    lesson: '07. Nose Flute For Beginners',
    extract: 'Do ugly vegetables taste better? Which are the most versatile herbs? Gordon shows you how to select great produce to create phenomenal dishes.',
  },
  {
    id: 3,
    thumbnail: 'images/instructors/thumb-dvf.jpg',
    image: 'images/instructors/full-dvf.jpg',
    instructor: 'Diane Von Furstenberg',
    lesson: '03. Choosing Your First Tattoo',
    extract: 'Do ugly vegetables taste better? Which are the most versatile herbs? Gordon shows you how to select great produce to create phenomenal dishes.',
  },
  {
    id: 4,
    thumbnail: 'images/instructors/thumb-dm.jpg',
    image: 'images/instructors/full-dm.jpg',
    instructor: 'deadmau5',
    lesson: '08. Picking A Mask To Hide Your Face',
    extract: 'Do ugly vegetables taste better? Which are the most versatile herbs? Gordon shows you how to select great produce to create phenomenal dishes.',
  },
  {
    id: 5,
    thumbnail: 'images/instructors/thumb-slj.jpg',
    image: 'images/instructors/full-slj.jpg',
    instructor: 'Samuel L. Jackson',
    lesson: '11. Say What Again, And The Eloquent Use Of Profanity In Classical Theatrical Productions',
    extract: 'Do ugly vegetables taste better? Which are the most versatile herbs? Gordon shows you how to select great produce to create phenomenal dishes.',
  },
  {
    id: 6,
    thumbnail: 'images/instructors/thumb-tk.jpg',
    image: 'images/instructors/full-tk.jpg',
    instructor: 'Thomas Keller',
    lesson: '02. Make: Pinterest Fails Turned Into Fuel For Your Fireplace',
    extract: 'Do ugly vegetables taste better? Which are the most versatile herbs? Gordon shows you how to select great produce to create phenomenal dishes.',
  },
  {
    id: 7,
    thumbnail: 'images/instructors/thumb-sr.jpg',
    image: 'images/instructors/full-sr.jpg',
    instructor: 'Shonda Rhimes',
    lesson: '04. Enemy of the state? How to become a hide and seek master',
    extract: 'Do ugly vegetables taste better? Which are the most versatile herbs? Gordon shows you how to select great produce to create phenomenal dishes.',
  },
]

const instructors = [
  {
    image: 'images/instructors/full-gr.jpg',
    instructor: 'Gordon Ramsay',
    course: 'Teaches Cooking 1',
    description: 'Called the Prophet of Dystopia, Margaret Atwood is one of the most influential literary voices of our generation. Explore Margaret\'s creative process for developing ideas into novels with strong structures and nuanced characters.',
    color: '15, 20, 25',
  },
  {
    image: 'images/instructors/full-tk.jpg',
    instructor: 'Thomas Keller',
    course: 'Teaches Cooking Techniques II: Meats, Stocks, and Sauces',
    description: 'Called the Prophet of Dystopia, Margaret Atwood is one of the most influential literary voices of our generation. Explore Margaret\'s creative process for developing ideas into novels with strong structures and nuanced characters.',
    color: '5, 10, 25',
  },
  {
    image: 'images/instructors/full-da.jpg',
    instructor: 'Dominique Ansel',
    course: 'Teaches French Pastry Fundamentals',
    description: 'Called the Prophet of Dystopia, Margaret Atwood is one of the most influential literary voices of our generation. Explore Margaret\'s creative process for developing ideas into novels with strong structures and nuanced characters.',
    color: '0, 0, 0',
  },
  {
    image: 'images/instructors/full-dakr.jpg',
    instructor: 'David Axelrod and Karl Rove',
    course: 'Teaches Campaign Strategy and Messaging',
    description: 'Called the Prophet of Dystopia, Margaret Atwood is one of the most influential literary voices of our generation. Explore Margaret\'s creative process for developing ideas into novels with strong structures and nuanced characters.',
    color: '10, 10, 20',
  },
]

const playlist = [
  {
    id: 1,
    thumbnail: 'images/instructors/thumb-rh.jpg',
    image: 'images/instructors/full-rh.jpg',
    playlist: 'Creative Life',
    count: '6',
    lesson: 'Leadership',
    extract: 'Take charge of being in charge.',
    color: '61, 7, 7',
  },
  {
    id: 2,
    thumbnail: 'images/instructors/thumb-rh.jpg',
    image: 'images/instructors/full-rh.jpg',
    playlist: 'Creative Life',
    count: '6',
    lesson: 'Developing Characters For The Screen',
    extract: 'The best actors create characters you can\'t forget. Actors and directors on the ingredients jha kljnsln lksnlkn sklnlsao eiown.',
    color: '95, 107, 120',
  },
  {
    id: 3,
    thumbnail: 'images/instructors/thumb-rh.jpg',
    image: 'images/instructors/full-rh.jpg',
    playlist: 'Creative Life',
    count: '6',
    lesson: 'Dinner For a Special Occassion',
    extract: 'Showing up every day to do the work can be hard. Reflections on the deep motivations that are the foundation of great work hkuhiu ujhek.',
    color: '96, 85, 76',
  },
  {
    id: 4,
    thumbnail: 'images/instructors/thumb-rh.jpg',
    image: 'images/instructors/full-rh.jpg',
    playlist: 'Creative Life',
    count: '6',
    lesson: 'Developing Characters For The Screen',
    extract: 'The best actors create characters you can\'t forget. Actors and directors on the ingredients jha kljnsln lksnlkn sklnlsao eiown.',
    color: '123, 71, 56',
  },
  {
    id: 5,
    thumbnail: 'images/instructors/thumb-rh.jpg',
    image: 'images/instructors/full-rh.jpg',
    playlist: 'Creative Life',
    count: '6',
    lesson: 'Leadership',
    extract: 'Take charge of being in charge.',
  },
  {
    id: 6,
    thumbnail: 'images/instructors/thumb-rh.jpg',
    image: 'images/instructors/full-rh.jpg',
    playlist: 'Creative Life',
    count: '6',
    lesson: 'Dinner For a Special Occassion',
    extract: 'Showing up every day to do the work can be hard. Reflections on the deep motivations that are the foundation of great work hkuhiu ujhek.',
  },
]


storiesOf('Playground|Pages', module)
  .add('LIHP', withAddons({
    path: 'playground/lihp/index.stories.js',
  })(() =>
    <ResponsiveHandler>
      {media =>
        <div className='container mc-pt-6'>
          <h5 className={`
            mc-text-h5
            mc-text--airy
            mc-mb-6
          `}>
            Jump Back In
          </h5>

          <div className='mc-mb-10'>
            <Carousel
              slidesToShow={responsiveValues(media, 4, 3, 2)}
              controls
              className='row mc-mb-10'
            >
              {jbi.map((item, key) => (
                <div key={key} className='col-auto'>
                  <HoverHandler>
                    {({ intent }) =>
                      <AnimationHandler
                        type='zoom-tile'
                        animating={intent}
                      >
                        <Tile key={item.id}>
                          <TileImage imageUrl={item.thumbnail} />

                          <TileCaption
                            position='right bottom'
                            padding={1}
                          >
                            <Badge>
                              1:23
                            </Badge>
                          </TileCaption>

                          <TileCaption
                            position='center bottom'
                            padding={4}
                            className='mc-tile__reveal-on-hover'
                          >
                            <Button kind='secondary'>Resume</Button>
                          </TileCaption>

                          <TileCaption
                            position='left below'
                            className='mc-tile__darken-bg-on-hover'
                          >
                            <h6 className={`
                              mc-text-h7
                              mc-text--uppercase
                              mc-opacity--muted
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
                                mc-opacity--muted
                              `}>
                                {`${item.extract}`}
                              </p>
                            </div>
                          </TileCaption>
                          <TileProgress value={50} />
                        </Tile>
                      </AnimationHandler>
                    }
                  </HoverHandler>
                </div>
              ))}
            </Carousel>
          </div>

          {times(2, () =>
            <Fragment>
              <h5 className={`
                mc-text-h5
                mc-text--airy
                mc-mb-6
              `}>
                Creative Writing
              </h5>

              <Accordion
                className='mc-mb-10'
                aspectRatio={responsiveValues(media, '21x9', '16x9', '4x3')}
                on='intent'
              >
                {instructors
                  .slice(0, responsiveValues(media, 4, 3, 2))
                  .map((item, key) =>
                    ({ itemActive, parentActive }) =>
                      <Tile
                        aspectRatio='auto'
                        key={key}
                        style={{ background: `rgb(${item.color})` }}
                        crop
                      >
                        <TileImage
                          imageUrl={item.image}
                          className={itemActive
                            ? 'example-offset-left-one-quarter example-offset-left-one-quarter--active'
                            : 'example-offset-left-one-quarter'
                          }
                        />

                        {!itemActive &&
                          <TileOverlay
                            type='gradient-bottom'
                            color={item.color}
                          />
                        }

                        <AnimationHandler
                          type='hide'
                          animating={parentActive}
                        >
                          <TileCaption position='center bottom'>
                            <h6 className='mc-text-h6 mc-text--airy mc-mb-2'>
                              {item.instructor}
                            </h6>
                            <p className='mc-text-small mc-opacity--hinted'>
                              {item.course}
                            </p>
                          </TileCaption>
                        </AnimationHandler>

                        {itemActive &&
                          <TileOverlay
                            type='gradient-left'
                            color={item.color}
                            className={itemActive
                              ? 'example-offset-left-one-quarter example-offset-left-one-quarter--active'
                              : 'example-offset-left-one-quarter'
                            }
                          />
                        }

                        <AnimationHandler
                          type='show'
                          animating={itemActive}
                        >
                          <TileCaption position='left center'>
                            <div className='row'>
                              <div className='col-4 offset-1'>
                                <div className='example-instructor-card-content'>
                                  <h6 className='mc-text-h6 mc-text--airy mc-mb-2'>
                                    {item.instructor}
                                  </h6>
                                  <p className='mc-text-small mc-opacity--hinted mc-mb-2'>
                                    {item.course}
                                  </p>
                                  <p className='mc-text-x-small mc-mb-8'>
                                    {item.description}
                                  </p>
                                  <Button
                                    className='mc-mc-3'
                                    fullWidth
                                  >
                                    Start Class
                                  </Button>
                                  <Button
                                    fullWidth
                                    kind='link'
                                  >
                                    Watch Trailer
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </TileCaption>
                        </AnimationHandler>
                      </Tile>,
                  )
                }
              </Accordion>
            </Fragment>,
          )}

          <div className='uncontainer'>
            <Tile aspectRatio='21x9' className='mc-mb-10'>
              <TileImage imageUrl='http://placekitten.com/1920/1080' />
              <TileOverlay type='spotlight' />
              <TileCaption
                padding={6}
                position='center bottom'
              >
                <h6 className={`
                  mc-text-h7
                  mc-text--uppercase
                  mc-mb-4
                `}>
                  New Class Announcement
                </h6>
                <h2 className={`
                  mc-text-h2
                  mc-text--airy
                  mc-mb-2
                `}>
                  Natalie Portman
                </h2>
                <p className='mc-mb-6 mc-opacity--hinted'>
                  Teaches Cooking Techniques II: Meats, Stocks, And Sauces
                </p>
                <Button>
                  <IconPlay className='mc-mr-3' />
                  Start Class
                </Button>
              </TileCaption>
            </Tile>
          </div>

          <h5 className={`
            mc-text-h5
            mc-text--airy
            mc-mb-6
          `}>
            Playlist in Creative Life
          </h5>

          <Carousel
            className='row'
            slidesToShow={responsiveValues(media, 3, 3, 1)}
            controls
          >
            {playlist.map((item, key) => (
              <div key={key} className='col-auto'>
                <Tile
                  key={item.id}
                  aspectRatio='2x3'
                 >
                  <TileImage imageUrl={item.thumbnail} />
                  <TileOverlay color={item.color} />

                  <TileCaption
                    position='left bottom'
                  >
                    <div className={`
                      d-flex
                      align-items-center
                      justify-content-between
                      mc-mb-2
                    `}>
                      <h6 className={`
                        mc-text-h8
                        mc-text--uppercase
                        mc-opacity--hinted
                      `}>
                        {item.playlist}
                      </h6>

                      <Badge>
                        <IconPlay /> 6 Videos
                      </Badge>
                    </div>

                    <h5 className='mc-text-h5'>
                      {`${item.lesson}`}
                    </h5>
                    <p className={`
                      mc-mt-2
                      mc-text-small
                      mc-opacity--hinted
                      mc-text--3-lines
                    `}>
                      {`${item.extract}`}
                    </p>
                  </TileCaption>
                </Tile>
              </div>
            ))}
          </Carousel>
        </div>
      }
    </ResponsiveHandler>,
  ))

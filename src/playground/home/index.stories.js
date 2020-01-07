import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'

import CarouselConnector from '../../components/CarouselConnector'
import Carousel from '../../components/Carousel'
import Button from '../../components/Button'
import Tile from '../../components/Tile'
import TileImage from '../../components/TileImage'
import TileOverlay from '../../components/TileOverlay'
import TileCaption from '../../components/TileCaption'
import AnimationHandler from '../../components/AnimationHandler'
import HoverHandler from '../../components/HoverHandler'
import ResponsiveHandler from '../../components/ResponsiveHandler'
import Background from '../../components/Background'
import Facebook from '../../components/Icons/Facebook'
import Twitter from '../../components/Icons/Twitter'
import Instagram from '../../components/Icons/Instagram'
import ChevronLeft from '../../components/Icons/ChevronLeft'
import ChevronRight from '../../components/Icons/ChevronRight'


const items = [
  {
    thumbnail: 'images/instructors/thumb-rh.jpg',
    image: 'images/instructors/full-rh.jpg',
    instructor: 'Ron Howard',
    class: 'Directing',
  },
  {
    thumbnail: 'images/instructors/thumb-wh.jpg',
    image: 'images/instructors/full-wh.jpg',
    instructor: 'Werner Herzog',
    class: 'Filmmaking',
  },
  {
    thumbnail: 'images/instructors/thumb-dvf.jpg',
    image: 'images/instructors/full-dvf.jpg',
    instructor: 'Diane Von Furstenberg',
    class: 'Building a Fashion Brand',
  },
  {
    thumbnail: 'images/instructors/thumb-dm.jpg',
    image: 'images/instructors/full-dm.jpg',
    instructor: 'deadmau5',
    class: 'Electronic Music Production',
  },
  {
    thumbnail: 'images/instructors/thumb-slj.jpg',
    image: 'images/instructors/full-slj.jpg',
    instructor: 'Samuel L. Jackson',
    class: 'Acting',
  },
  {
    thumbnail: 'images/instructors/thumb-tk.jpg',
    image: 'images/instructors/full-tk.jpg',
    instructor: 'Thomas Keller',
    class: 'Cooking Techniques',
  },
  {
    thumbnail: 'images/instructors/thumb-sr.jpg',
    image: 'images/instructors/full-sr.jpg',
    instructor: 'Shonda Rhimes',
    class: 'Writing for Television',
  },
]


storiesOf('Playground|Pages', module)
  .add('Home', withAddons({
    path: 'playground/home/index.stories.js',
  })(() =>
    <div className='container'>
      <CarouselConnector>
        {({ sliderRef, asNavFor }) =>
          <ResponsiveHandler>
            {({ gteMD }) =>
              <div>
                <Carousel
                  sliderRef={sliderRef('hero')}
                  asNavFor={asNavFor('thumbs')}
                  transition='fade'
                  loop
                >
                  {items.map((item, key) =>
                    <Tile
                      key={key}
                      className='mc-hero__image'
                      aspectRatio={gteMD ? '16x9' : '1x1'}
                    >
                      <TileImage
                        className='example-offset-left-one-quarter example-offset-left-one-quarter--actives'
                        imageUrl={item.image}
                      />
                      <TileOverlay
                        className='example-offset-left-one-quarter example-offset-left-one-quarter--actives'
                        type='spotlight'
                      />
                      <TileCaption position='left center'>
                        <div className='row row--fill align-items-center mc-text--center mc-text-md--left'>
                          <div className='col-xl-5 col-md-8 col-lg-6'>
                            <h2 className='mc-text-h1 mc-text--uppercase'>
                              {item.instructor}
                            </h2>
                            <h3 className='mc-text-h3 mc-opacity--muted mc-text--airy mc-mb-4'>
                              Teaches {item.teaches}
                            </h3>
                            <p className='mc-text-intro mc-opacity--hinted mc-mb-8'>
                              Online classes taught by the world&apos;s
                              greatest minds.<br /> Learn from
                              {item.instructor} and all 35+ other
                              instructors.
                            </p>
                            <div className='row justify-content-center justify-content-md-start'>
                              <div className='col-auto'>
                                <Button>
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
                    </Tile>,
                  )}
                </Carousel>

                <Carousel
                  className='row'
                  sliderRef={sliderRef('thumbs')}
                  asNavFor={asNavFor('hero')}
                  controls={gteMD}
                  centered
                  focusOnSelect
                  loop
                >
                  {items.map((item, key) => (
                    <div key={key} className='col-auto'>
                      <Tile key={item.id}>
                        <TileImage imageUrl={item.thumbnail} />
                        {gteMD && <TileOverlay />}
                        {gteMD &&
                          <TileCaption>
                            <h6 className='mc-text-h6 mc-text--uppercase'>
                              {item.instructor}
                            </h6>
                            <h6 className='mc-text-h8 mc-text--airy mc-opacity--muted'>
                              {item.teaches}
                            </h6>
                          </TileCaption>
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

      <div className='mc-section'>
        <div className='mc-section__header'>
          <h5 className='mc-text-h5 mc-text--airy mc-text--center'>
            MasterClass In The News
          </h5>
        </div>

        <div className='row justify-content-center'>
          <div className='col-auto mc-opacity--muted mc-text--center'>
            <img height='20' src='images/in-the-news/today.svg' />
          </div>
          <div className='col-auto mc-opacity--muted mc-text--center'>
            <img height='20' src='images/in-the-news/nbc.svg' />
          </div>
          <div className='col-auto mc-opacity--muted mc-text--center'>
            <img height='20' src='images/in-the-news/nyt.svg' />
          </div>
          <div className='col-auto mc-opacity--muted mc-text--center'>
            <img height='20' src='images/in-the-news/bb.svg' />
          </div>
          <div className='col-auto mc-opacity--muted mc-text--center'>
            <img height='20' src='images/in-the-news/espn.svg' />
          </div>
          <div className='col-auto mc-opacity--muted mc-text--center'>
            <img height='20' src='images/in-the-news/vf.svg' />
          </div>
        </div>
      </div>

      <div className='mc-section'>
        <div className='mc-section__header'>
          <h5 className='mc-text-h5 mc-text--airy mc-text--center'>
            Now Available
          </h5>
        </div>

        <div className='row'>
          <div className='col-12'>
            <ResponsiveHandler>
              {({ gteMD }) =>
                <HoverHandler>
                  {({ hovering }) =>
                    <Tile aspectRatio={gteMD ? '21x9' : '16x9'}>
                      <AnimationHandler type='ken-burns' animating={hovering}>
                        <TileImage imageUrl='images/playground/tile-full-mg.jpeg' />
                      </AnimationHandler>

                      <TileOverlay />

                      <AnimationHandler type='lift' animating={hovering}>
                        <TileCaption>
                          <h4 className='mc-text-h4 mc-text--uppercase'>
                            Malcom Gladwell
                          </h4>
                          <h5 className='mc-text-h5 mc-text--normal mc-opacity--muted'>
                            Teaches Writing
                          </h5>
                        </TileCaption>
                      </AnimationHandler>
                    </Tile>
                  }
                </HoverHandler>
              }
            </ResponsiveHandler>
          </div>

          <div className='col-md-6'>
            <HoverHandler>
              {({ hovering }) =>
                <Tile aspectRatio='16x9'>
                  <AnimationHandler type='ken-burns' animating={hovering}>
                    <TileImage imageUrl='images/playground/tile-aw.jpeg' />
                  </AnimationHandler>

                  <TileOverlay />

                  <AnimationHandler type='lift' animating={hovering}>
                    <TileCaption>
                      <h4 className='mc-text-h4 mc-text--uppercase'>
                        Alice Waters
                      </h4>
                      <h5 className='mc-text-h5 mc-text--normal mc-opacity--muted'>
                        Teaches the Art of Home Cooking
                      </h5>
                    </TileCaption>
                  </AnimationHandler>
                </Tile>
              }
            </HoverHandler>
          </div>

          <div className='col-md-6'>
            <HoverHandler>
              {({ hovering }) =>
                <Tile aspectRatio='16x9'>
                  <AnimationHandler type='ken-burns' animating={hovering}>
                    <TileImage imageUrl='images/playground/tile-al.jpeg' />
                  </AnimationHandler>

                  <TileOverlay />

                  <AnimationHandler type='lift' animating={hovering}>
                    <TileCaption>
                      <h4 className='mc-text-h4 mc-text--uppercase'>
                        Annie Leibovitz
                      </h4>
                      <h5 className='mc-text-h5 mc-text--normal mc-opacity--muted'>
                        Teaches Photography
                      </h5>
                    </TileCaption>
                  </AnimationHandler>
                </Tile>
              }
            </HoverHandler>
          </div>
        </div>
      </div>

      <div className='mc-section'>
        <div className='mc-section__header'>
          <h5 className='mc-text-h5 mc-text--airy mc-text--center'>
            What Students Are Saying
          </h5>
        </div>

        <div className='row'>
          <div className='col-md-4'>
            <div className='mc-card mc-card--equal-height mc-background--color-light mc-invert'>
              <div className='row align-items-center small-gutters'>
                <div className='col col-auto'>
                  <img width='56' src='images/playground/saying-al.png' />
                </div>
                <div className='col'>
                  <h6 className='mc-text-h6 mc-text--uppercase'>
                    Annie Leibovitz
                  </h6>
                  <h5 className='mc-text-h7 mc-text--uppercase mc-text--normal mc-opacity--muted'>
                    Photography
                  </h5>
                </div>

                <div className='col-12'>
                  <p>
                    Annie&apos;s MasterClass offered insight into her
                    approach, but also offered the permission to create,
                    create, create! And with a tenacity I had been afraid
                    to embody.
                  </p>
                </div>

                <div className='col-auto'>
                  <img src='images/playground/saying-student.png' />
                </div>
                <div className='col'>
                  <h6 className='mc-text-h6 mc-opacity--muted'>
                    Jesse L.
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='mc-card mc-card--equal-height mc-background--color-light mc-invert'>
              <div className='row align-items-center small-gutters'>
                <div className='col col-auto'>
                  <img width='56' src='images/playground/saying-gr.png' />
                </div>
                <div className='col'>
                  <h6 className='mc-text-h6 mc-text--uppercase'>
                    Gordon Ramsay
                  </h6>
                  <h5 className='mc-text-h7 mc-text--uppercase mc-text--normal mc-opacity--muted'>
                    Cooking
                  </h5>
                </div>

                <div className='col-12'>
                  <p>
                    I loved this class, I learned to create rather than
                    follow recipes and how to think outside the box!
                    I&apos;ve always loved cooking, this class has taken me
                    to a new level!
                  </p>
                </div>

                <div className='col-auto'>
                  <img src='images/playground/saying-student.png' />
                </div>
                <div className='col'>
                  <h6 className='mc-text-h6 mc-opacity--muted'>
                    Pamela E.
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='mc-card mc-card--equal-height mc-background--color-light mc-invert'>
              <div className='row align-items-center small-gutters'>
                <div className='col col-auto'>
                  <img width='56' src='images/playground/saying-jp.png' />
                </div>
                <div className='col'>
                  <h6 className='mc-text-h6'>
                    James Patterson
                  </h6>
                  <h5 className='mc-text-h7 mc-text--uppercase mc-text--normal mc-opacity--muted'>
                    Writing
                  </h5>
                </div>

                <div className='col-12'>
                  <p>
                    These classes are the important keys to unlocking our
                    written creativity. If you have belief, freedom and
                    discipline, then who knows what the future will hold.
                  </p>
                </div>

                <div className='col-auto'>
                  <img src='images/playground/saying-student.png' />
                </div>
                <div className='col'>
                  <h6 className='mc-text-h6 mc-opacity--muted'>
                    Jean-Paul W.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mc-section'>
        <div className='mc-section__header'>
          <h5 className='mc-text-h5 mc-text--airy mc-text--center'>
            Now Available
          </h5>
        </div>

        <div className='row'>
          <div className='col-12'>
            <ResponsiveHandler>
              {({ gteMD }) =>
                <HoverHandler>
                  {({ hovering }) =>
                    <Tile aspectRatio={gteMD ? '21x9' : '16x9'}>
                      <AnimationHandler type='ken-burns' animating={hovering}>
                        <TileImage imageUrl='images/playground/tile-full-sl.jpeg' />
                      </AnimationHandler>

                      <TileOverlay />

                      <AnimationHandler type='lift' animating={hovering}>
                        <TileCaption>
                          <h4 className='mc-text-h4 mc-text--uppercase'>
                            Spike Lee
                          </h4>
                          <h5 className='mc-text-h5 mc-text--normal mc-opacity--muted'>
                            Teaches Filmmaking
                          </h5>
                        </TileCaption>
                      </AnimationHandler>
                    </Tile>
                  }
                </HoverHandler>
              }
            </ResponsiveHandler>
          </div>

          <div className='col-md-6'>
            <HoverHandler>
              {({ hovering }) =>
                <Tile aspectRatio='16x9'>
                  <AnimationHandler type='ken-burns' animating={hovering}>
                    <TileImage imageUrl='images/playground/tile-dn.jpeg' />
                  </AnimationHandler>

                  <TileOverlay />

                  <AnimationHandler type='lift' animating={hovering}>
                    <TileCaption>
                      <h4 className='mc-text-h4 mc-text--uppercase'>
                        Daniel Negreanu
                      </h4>
                      <h5 className='mc-text-h5 mc-text--normal mc-opacity--muted'>
                        Teaches Poker
                      </h5>
                    </TileCaption>
                  </AnimationHandler>
                </Tile>
              }
            </HoverHandler>
          </div>

          <div className='col-md-6'>
            <HoverHandler>
              {({ hovering }) =>
                <Tile aspectRatio='16x9'>
                  <AnimationHandler type='ken-burns' animating={hovering}>
                    <TileImage imageUrl='images/playground/tile-ma.jpeg' />
                  </AnimationHandler>

                  <TileOverlay />

                  <AnimationHandler type='lift' animating={hovering}>
                    <TileCaption>
                      <h4 className='mc-text-h4 mc-text--uppercase'>
                        Margaret Atwood
                      </h4>
                      <h5 className='mc-text-h5 mc-text--normal mc-opacity--muted'>
                        Teaches Creative Writing
                      </h5>
                    </TileCaption>
                  </AnimationHandler>
                </Tile>
              }
            </HoverHandler>
          </div>
        </div>
      </div>

      <div className='mc-section'>
        <div className='row align-items-center'>
          <div className='col-lg-4'>
            <div className='mc-section__header'>
              <h3 className='mc-text-h3 mc-text--center mc-text-lg--left'>
                Instructor Announcements
              </h3>
              <p className='mc-text--center mc-text-lg--left mc-opacity--muted'>
                Learn from the world’s greatest minds.
              </p>
              <br />

              <div className='row small-gutters justify-content-center justify-content-lg-start'>
                <div className='col-auto'>
                  <ChevronLeft className='mc-icon--5 mc-icon--circled mc-opacity--muted' />
                </div>

                <div className='col-auto'>
                  <ChevronRight className='mc-icon--5 mc-icon--circled' />
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-8'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='row'>
                  <div className='col-12'>
                    <div className='mc-card mc-background--color-light mc-invert'>
                      <div className='row align-items-center small-gutters'>
                        <div className='col col-auto'>
                          <img width='56' src='images/instructors/thumb-mg.jpg' />
                        </div>
                        <div className='col'>
                          <h6 className='mc-text-h6'>
                            Malcom Gladwell
                          </h6>
                          <h6 className='mc-text-h8 mc-text--normal mc-opacity--muted'>
                            @Gladwell
                          </h6>
                        </div>

                        <div className='col-12'>
                          <p>
                            If my books aren&apos;t enough for you,
                            I&apos;ve done a really fun writing seminar!
                            <br />
                            <a href='#' className='mc-text--twitter'>
                              @MasterClass
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-12'>
                    <div className='mc-card mc-background--color-light mc-invert'>
                      <div className='row align-items-center small-gutters'>
                        <div className='col col-auto'>
                          <img width='56' src='images/instructors/thumb-avb.jpg' />
                        </div>
                        <div className='col'>
                          <h6 className='mc-text-h6'>
                            Armin Van Buuren
                          </h6>
                          <h6 className='mc-text-h8 mc-text--normal mc-opacity--muted'>
                            @arminvanbuuren
                          </h6>
                        </div>

                        <div className='col-12'>
                          <p>
                            My
                            {' '}
                            <a href='#' className='mc-text--twitter'>
                              @masterclass
                            </a>
                            is now live! So proud to be able to share
                            everything I know about dance music with you.
                            Join me in the studio:
                            {' '}
                            <a href='#' className='mc-text--twitter'>
                              http://www.masterclass.com/avb
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-6'>
                <div className='mc-card mc-card--equal-height mc-background--color-light mc-invert'>
                  <div className='row align-items-center small-gutters'>
                    <div className='col col-auto'>
                      <img width='56' src='images/instructors/thumb-sm.jpg' />
                    </div>
                    <div className='col'>
                      <h6 className='mc-text-h6'>
                        Steve Martin
                      </h6>
                    </div>

                    <div className='col-12'>
                      <img
                        className='mc-card__image mc-mb-4'
                        src='images/instructors/thumb-sm.jpg'
                      />
                      <p>
                        I&apos;m told people are signing up in droves (a car
                        made in the 30s) for my
                        {' '}
                        <a href='#' className='mc-text--twitter'>
                          MasterClass
                        </a>
                        {' '}
                        in comedy. For the aspiring comedian, writer, or
                        future world leader.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='uncontainer'>
        <Background
          element={<img src='images/playground/learn-from-the-best.jpg' />}
          size='cover'
        >
          <div className='mc-section mc-text--center'>
            <h2 className='mc-text-h3 mc-text--uppercase mc-text--light'>
              Learn From The Best
            </h2>
            <br />
            <p>
              Visit our blog for a deeper dive into all things MasterClass.
            </p>
            <br />
            <a href='#' className='mc-text--uppercase'>
              Read More
              {' '}
              <ChevronRight className='mc-icon--3x' />
            </a>
          </div>
        </Background>
      </div>

      <div className='mc-section'>
        <div className='mc-section__header'>
          <h5 className='mc-text-h5 mc-text--airy mc-text--center'>
            Stay up to date with MasterClass
          </h5>
        </div>

        <div className='row justify-content-center'>
          <div className='col-auto'>
            <Twitter className='mc-icon--8 mc-icon--circled mc-opacity--muted' />
          </div>
          <div className='col-auto'>
            <Facebook className='mc-icon--8 mc-icon--circled mc-opacity--muted' />
          </div>
          <div className='col-auto'>
            <Instagram className='mc-icon--8 mc-icon--circled mc-opacity--muted' />
          </div>
        </div>
      </div>
    </div>,
  ))

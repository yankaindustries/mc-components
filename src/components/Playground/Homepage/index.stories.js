import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from '../../HeaderLoggedOut'
import Footer from '../../Footer'
import Button from '../../Button'
import Tile from '../../Tile'
import TileImage from '../../TileImage'
import TileOverlay from '../../TileOverlay'
import TileCaption from '../../TileCaption'
import HoverHandler from '../../HoverHandler'
import AnimationHandler from '../../AnimationHandler'


storiesOf('playground|Pages', module)
  .add('Home', () =>
    <div>
      <Header />

      <div
        className='mc-background--dark'
        style={{
          padding: '160px 0',
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <h2 className='mc-text-d1 mc-text--uppercase mc-text-center mc-text-md-left'>
                Alice Waters
              </h2>
              <h3 className='mc-text-h3 mc-text--muted mc-text-center mc-text-md-left'>
                Teaches the art of home cooking
              </h3>
              <br />
              <p className='mc-text-intro mc-text-center mc-text-md-left'>
                Online classes taught by the world&apos;s greatest minds.<br />
                Learn from Alice Waters and all 35+ other instructors.
              </p>
              <br />
              <div className='row row--vertical-space'>
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
      </div>

      <div className='container'>
        <div className='mc-section'>
          <div className='mc-section__header'>
            <h2 className='mc-text-h3 mc-text-center'>
              MasterClass In The News
            </h2>
          </div>

          <div className='row row--vertical-space'>
            <div className='col-md-2 mc-text--muted mc-text-center'>
              <img height='20' src='https://do6eyjibs3jse.cloudfront.net/assets/experiments/mc_press/today-4d4e4dfc0db7fa08e4e18e4b0ae9f8598e674c0de4f3349d9b74f02138604276.svg' />
            </div>
            <div className='col-md-2 mc-text--muted mc-text-center'>
              <img height='20' src='https://do6eyjibs3jse.cloudfront.net/assets/experiments/mc_press/nbc-e43bb6ae09ed3b16c8e6509a76ed454e7cb9289c3723288a84d4b31e34785222.svg' />
            </div>
            <div className='col-md-2 mc-text--muted mc-text-center'>
              <img height='20' src='https://do6eyjibs3jse.cloudfront.net/assets/experiments/mc_press/new_york_times-8e2107a8c7cb51f1ea6dff352bbe21ad7c414e2348b2fa88b0c506b5ddc80ed9.svg' />
            </div>
            <div className='col-md-2 mc-text--muted mc-text-center'>
              <img height='20' src='https://do6eyjibs3jse.cloudfront.net/assets/experiments/mc_press/billboard-afafead87dedb11a8a2c8684e2a9714dc4add1f508b91ea5ad06789197e6e8ee.svg' />
            </div>
            <div className='col-md-2 mc-text--muted mc-text-center'>
              <img height='20' src='https://do6eyjibs3jse.cloudfront.net/assets/experiments/mc_press/espn-2aca223117c3e92562149a240ff5dab1619562b8de78ed05cae0ce69c50afae8.svg' />
            </div>
            <div className='col-md-2 mc-text--muted mc-text-center'>
              <img height='20' src='https://do6eyjibs3jse.cloudfront.net/assets/experiments/mc_press/vanity_fair-cdfde3c2628fa297d4bba5cf9aaa5786cc0f0fb8c66a593bb5da88afe407ec99.svg' />
            </div>
          </div>
        </div>
      </div>

      <div className='mc-background--dark'>
        <div className='container'>
          <div className='mc-section'>
            <div className='mc-section__header'>
              <h2 className='mc-text-h3 mc-text-center'>
                Now Available
              </h2>
            </div>

            <div className='row row--vertical-space'>
              <div className='col-12'>
                <HoverHandler>
                  {({ hovering }) =>
                    <Tile aspectRatio='519x187'>
                      <AnimationHandler type='ken-burns' animating={hovering}>
                        <TileImage imageUrl='https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1473/original/1520466687-Featured_Tile.jpg%3F1520466687' />
                      </AnimationHandler>

                      <TileOverlay />

                      <AnimationHandler type='lift' animating={hovering}>
                        <TileCaption
                          title='Malcom Gladwell'
                          subtitle='Teaches Writing'
                        />
                      </AnimationHandler>
                    </Tile>
                  }
                </HoverHandler>
              </div>

              <div className='col-sm-6'>
                <HoverHandler>
                  {({ hovering }) =>
                    <Tile aspectRatio='16x9'>
                      <AnimationHandler type='ken-burns' animating={hovering}>
                        <TileImage imageUrl='https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1049/original/1510617187-Class_Tile.jpg%3F1510617187' />
                      </AnimationHandler>

                      <TileOverlay />

                      <AnimationHandler type='lift' animating={hovering}>
                        <TileCaption
                          title='Alice Waters'
                          subtitle='Teaches the Art of Home Cooking'
                        />
                      </AnimationHandler>
                    </Tile>
                  }
                </HoverHandler>
              </div>

              <div className='col-sm-6'>
                <HoverHandler>
                  {({ hovering }) =>
                    <Tile aspectRatio='16x9'>
                      <AnimationHandler type='ken-burns' animating={hovering}>
                        <TileImage imageUrl='https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/343/original/1513219465-Class_Tile.jpg%3F1513219465' />
                      </AnimationHandler>

                      <TileOverlay />

                      <AnimationHandler type='lift' animating={hovering}>
                        <TileCaption
                          title='Annie Leibovitz'
                          subtitle='Teaches Photography'
                        />
                      </AnimationHandler>
                    </Tile>
                  }
                </HoverHandler>
              </div>
            </div>
          </div>

          <div className='mc-section'>
            <div className='mc-section__header'>
              <h2 className='mc-text-h3 mc-text-center'>
                What Students Are Saying
              </h2>
            </div>

            <div className='row'>
              <div className='col-sm-4'>
                <div className='mc-background--light'>
                  <div className='mc-section'>
                    Annie Leibovitz
                    Photography

                    Annie&apos;s MasterClass offered insight into her approach,
                    but also offered the permission to create, create, create!
                    And with a tenacity I had been afraid to embody.

                    Jesse L.
                  </div>
                </div>
              </div>

              <div className='col-sm-4'>
                <div className='mc-background--light'>
                  <div className='mc-section'>
                    Gordon Ramsay
                    Cooking

                    I loved this class, I learned to create rather than follow
                    recipes and how to think outside the box! I&apos;ve always
                    loved cooking, this class has taken me to a new level!

                    Pamela E.
                  </div>
                </div>
              </div>

              <div className='col-sm-4'>
                <div className='mc-background--light'>
                  <div className='mc-section'>
                    James Patterson
                    Writing

                    These classes are the important keys to unlocking our
                    written creativity. If you have belief, freedom and
                    discipline, then who knows what the future will hold.

                    Jean-Paul W.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mc-section'>
            <div className='mc-section__header'>
              <h2 className='mc-text-h3 mc-text-center'>
                Now Available
              </h2>
            </div>

            <div className='row row--vertical-space'>
              <div className='col-12'>
                <HoverHandler>
                  {({ hovering }) =>
                    <Tile aspectRatio='519x187'>
                      <AnimationHandler type='ken-burns' animating={hovering}>
                        <TileImage imageUrl='https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1532/original/1521243500-Featured_Tile.jpg%3F1521243500' />
                      </AnimationHandler>

                      <TileOverlay />

                      <AnimationHandler type='lift' animating={hovering}>
                        <TileCaption
                          title='Spike Lee'
                          subtitle='Teaches Filmmaking'
                        />
                      </AnimationHandler>
                    </Tile>
                  }
                </HoverHandler>
              </div>

              <div className='col-sm-6'>
                <HoverHandler>
                  {({ hovering }) =>
                    <Tile aspectRatio='16x9'>
                      <AnimationHandler type='ken-burns' animating={hovering}>
                        <TileImage imageUrl='https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1689/original/1528446991-Class_Tile.jpg%3F1528446991' />
                      </AnimationHandler>

                      <TileOverlay />

                      <AnimationHandler type='lift' animating={hovering}>
                        <TileCaption
                          title='Daniel Negreanu'
                          subtitle='Teaches Poker'
                        />
                      </AnimationHandler>
                    </Tile>
                  }
                </HoverHandler>
              </div>

              <div className='col-sm-6'>
                <HoverHandler>
                  {({ hovering }) =>
                    <Tile aspectRatio='16x9'>
                      <AnimationHandler type='ken-burns' animating={hovering}>
                        <TileImage imageUrl='https://res.cloudinary.com/static-masterclass/image/fetch/dpr_auto,f_auto,q_auto:best/https://d3e9iqx18mbphw.cloudfront.net/images/1752/original/1530892888-Class_Tile.jpg%3F1530892888' />
                      </AnimationHandler>

                      <TileOverlay />

                      <AnimationHandler type='lift' animating={hovering}>
                        <TileCaption
                          title='Margaret Atwood'
                          subtitle='Teaches Creative Writing'
                        />
                      </AnimationHandler>
                    </Tile>
                  }
                </HoverHandler>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>,
  )

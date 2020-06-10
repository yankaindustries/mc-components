import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import CodeExample from '../../utils/CodeExample'

import Carousel from '../Carousel'
import ResponsiveHandler from '../ResponsiveHandler'
import Tile from '../Tile'
import TileImage from '../TileImage'
import TileOverlay from '../TileOverlay'
import TileCaption from '../TileCaption'
import Background from '../Background'
import Button from '../Button'


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


storiesOf('Components|Carousel', module)
  .add('Summary', withAddons({
    path: 'components/Carousel/index.stories.js',
    component: Carousel,
  })(() =>
    <ResponsiveHandler>
      {({ responsive }) =>
        <div className='container'>
          <DocHeader title='Carousel' />

          <DocSection title='Standard #1'>
            <CodeExample>
              <div className='uncontainer'>
                <div className='container-fluid'>
                  <Carousel
                    className='row'
                    showCount={responsive(1, 2, 4)}
                    controls={responsive(false, false, true)}
                    variableWidth
                    loop
                    peek
                  >
                    {items.map(item =>
                      <div key={item.id} className='col-auto' style={{ width: 280 }}>
                        <Tile>
                          <TileImage imageUrl={item.thumbnail} />
                          <TileOverlay />
                          <TileCaption>
                            <h6 className='mc-text-h6'>
                              {item.instructor}
                            </h6>
                            <p className='mc-text-small mc-opacity--muted'>
                              {item.teaches}
                            </p>
                          </TileCaption>
                        </Tile>
                      </div>,
                    )}
                    {items.map(item =>
                      <div key={item.id} className='col-auto' style={{ width: 280 }}>
                        <Tile>
                          <TileImage imageUrl={item.thumbnail} />
                          <TileOverlay />
                          <TileCaption>
                            <h6 className='mc-text-h6'>
                              {item.instructor}
                            </h6>
                            <p className='mc-text-small mc-opacity--muted'>
                              {item.teaches}
                            </p>
                          </TileCaption>
                        </Tile>
                      </div>,
                    )}
                  </Carousel>
                </div>
              </div>
            </CodeExample>
          </DocSection>

          <DocSection title='Standard #2'>
            <CodeExample>
              <Carousel
                className='row'
                showCount={responsive(3, 3, 4, 6)}
                controls={responsive(false, false, false, true)}
                loop
                dots
              >
                {items.map(item =>
                  <div key={item.id} className='col-auto'>
                    <Tile aspectRatio='2x3'>
                      <TileImage imageUrl={item.thumbnail} />
                      <TileOverlay />
                      <TileCaption>
                        <h6 className='mc-text-h6'>
                          {item.instructor}
                        </h6>
                        <p className='mc-text-small mc-opacity--muted'>
                          {item.teaches}
                        </p>
                      </TileCaption>
                    </Tile>
                  </div>,
                )}
              </Carousel>
            </CodeExample>
          </DocSection>

          <DocSection title='Standard #2 (light theme)'>
            <p className='mc-mb-5'>
              {'Note: This behavior requires nesting the '}
              <span className='mc-code'>
                mc-theme-light
              </span>
              {' and '}
              <span className='mc-code'>
                mc-theme-dark
              </span>
              {' helper classes.'}
            </p>
            <CodeExample>
              <div style={{ background: '#fff' }} className='mc-p-8'>
                <Carousel
                  className='row mc-theme-light'
                  showCount={responsive(3, 3, 4, 6)}
                  controls={responsive(false, false, false, true)}
                  loop
                  dots
                >
                  {items.map(item =>
                    <div key={item.id} className='col-auto'>
                      <Tile aspectRatio='2x3' className='mc-theme-dark'>
                        <TileImage imageUrl={item.thumbnail} />
                        <TileOverlay />
                        <TileCaption>
                          <h6 className='mc-text-h6'>
                            {item.instructor}
                          </h6>
                          <p className='mc-text-small mc-opacity--muted'>
                            {item.teaches}
                          </p>
                        </TileCaption>
                      </Tile>
                    </div>,
                  )}
                </Carousel>
              </div>
            </CodeExample>
          </DocSection>

          <DocSection title='Standard #3'>
            <CodeExample>
              <Carousel
                className='row'
                showCount={1}
                controls={responsive(false, false, false, true)}
                adaptiveHeight
                loop
                fade
                dots
              >
                {items.map(item =>
                  <div key={item.id} className='col-auto'>
                    <div className='row no-gutters'>
                      <div className='col-lg-5 d-flex order-1 order-lg-0'>
                        <Background color='medium' className='flex-grow-1'>
                          <div className='d-flex flex-column justify-content-center mc-p-10' style={{ height: '100%' }}>
                            <div>
                              <h6 className='mc-text-h7 mc-opacity--hinted mc-mb-2'>
                                {item.instructor}
                              </h6>
                              <h2 className='mc-text-h2 mc-mb-1'>
                                {item.instructor}
                              </h2>
                              <p className='mc-text-large mc-opacity--muted mc-mb-6'>
                                {item.teaches}
                              </p>

                              <Button kind='tertiary'>
                                Details
                              </Button>
                            </div>
                          </div>
                        </Background>
                      </div>

                      <div className='col-lg-7 order-0 order-lg-1'>
                        <Tile aspectRatio='4x3'>
                          <TileImage imageUrl={item.thumbnail} />
                        </Tile>
                      </div>
                    </div>
                  </div>,
                )}
              </Carousel>
            </CodeExample>
          </DocSection>
        </div>
      }
    </ResponsiveHandler>,
  ))

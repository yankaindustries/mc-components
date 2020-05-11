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
  .add('Carousel', withAddons({
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
                    variableWidth
                    loop
                    controls
                    peek
                  >
                    {items.map(item =>
                      <div key={item.id} className='col-auto' style={{ width: 320 }}>
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
                      <div key={item.id} className='col-auto' style={{ width: 320 }}>
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
                controls
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

          <DocSection title='Standard #3'>
            <CodeExample>
              <Carousel
                className='row'
                showCount={1}
                controls
                loop
                fade
                dots
              >
                {items.map(item =>
                  <div key={item.id} className='col-auto'>
                    <Tile>
                      <TileImage imageUrl={item.thumbnail} />
                      <TileOverlay type='gradient-left' />
                      <TileCaption position='left center' padding={10}>
                        <h4 className='mc-text-h4'>
                          {item.instructor}
                        </h4>
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
        </div>
      }
    </ResponsiveHandler>,
  ))

/* eslint react/display-name:0, react/prop-types:0 */

import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'
import Placeholder from '../../utils/Placeholder'

import Accordion from '../Accordion'
import ResponsiveHandler from '../ResponsiveHandler'

import { responsiveValues } from '../helpers'


storiesOf('Components|Accordion', module)
  .add('Summary', withAddons({
    path: 'components/Accordion/index.stories.js',
    component: Accordion,
  })(() => (
    <ResponsiveHandler>
      {media =>
        <div className='container'>
          <DocHeader
            title='Accordion'
            description={`
              Excellent for when you need to take a deeper dive when using
              short form content like a Tile.
            `}
            experimental
          />

          <DocSection title='Demo'>
            <Accordion
              className='mc-mb-10'
              aspectRatio={responsiveValues(media, '21x9', '16x9', '4x3')}
              showCount={responsiveValues(media, 4, 3, 2)}
              on='intent'
            >
              {[1, 2, 3]
                .slice(0, responsiveValues(media, 4, 3, 2))
                .map(key =>
                  ({ itemActive }) =>
                    <Placeholder className='mc-text--center'>
                      <h3 className='mc-text-h3'>
                        {key}
                      </h3>

                      <p>
                        {itemActive ? 'Active' : 'Inactive'}
                      </p>
                    </Placeholder>,
                )
              }
            </Accordion>
          </DocSection>

          <DocSection title='Props'>
            <PropExample
              name='showCount'
              type='Number'
              description={`
                Set the number of items to render.  If there are more, crop the
                list.  If there are less, fill with empty panes.
              `}
            >
              <Accordion
                className='mc-mb-10'
                aspectRatio={responsiveValues(media, '21x9', '16x9', '4x3')}
                showCount={responsiveValues(media, 6, 5, 4)}
              >
                {[1, 2, 3, 4]
                  .slice(0, responsiveValues(media, 4, 3, 2))
                  .map(key =>
                    ({ itemActive }) =>
                      <Placeholder className='mc-text--center'>
                        <h3 className='mc-text-h3'>
                          {key}
                        </h3>

                        <p>
                          {itemActive ? 'Active' : 'Inactive'}
                        </p>
                      </Placeholder>,
                  )
                }
              </Accordion>

              <Accordion
                className='mc-mb-10'
                aspectRatio={responsiveValues(media, '21x9', '16x9', '4x3')}
                showCount={responsiveValues(media, 3, 2, 1)}
              >
                {[1, 2, 3, 4]
                  .slice(0, responsiveValues(media, 4, 3, 2))
                  .map(key =>
                    ({ itemActive }) =>
                      <Placeholder className='mc-text--center'>
                        <h3 className='mc-text-h3'>
                          {key}
                        </h3>

                        <p>
                          {itemActive ? 'Active' : 'Inactive'}
                        </p>
                      </Placeholder>,
                  )
                }
              </Accordion>
            </PropExample>


            <PropExample
              name='aspectRatio'
              type='String'
              description={`
                auto, 1x1, 2x3, 3x4, 4x3, 9x16, 16x9
              `}
            >
              <Accordion
                className='mc-mb-10'
                aspectRatio={responsiveValues(media, '1x1', '16x9', '16x9')}
              >
                {[1, 2, 3, 4]
                  .slice(0, responsiveValues(media, 4, 3, 2))
                  .map(key =>
                    ({ itemActive }) =>
                      <Placeholder className='mc-text--center'>
                        <h3 className='mc-text-h3'>
                          {key}
                        </h3>

                        <p>
                          {itemActive ? 'Active' : 'Inactive'}
                        </p>
                      </Placeholder>,
                  )
                }
              </Accordion>
            </PropExample>
          </DocSection>
        </div>
      }
    </ResponsiveHandler>
  )))

/* eslint react/display-name:0, react/prop-types:0 */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import Placeholder from '../../utils/Placeholder'

import Accordion from '../Accordion'
import ResponsiveHandler from '../ResponsiveHandler'


const responsiveValues = ({ gteLG, gteMD }, lg, md, sm) => {
  if (gteLG) {
    return lg
  }

  if (gteMD) {
    return md
  }

  return sm
}


storiesOf('Components|Accordion', module)
  .add('Summary', withProps(Accordion)(() => (
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
          </DocSection>
        </div>
      }
    </ResponsiveHandler>
  )))

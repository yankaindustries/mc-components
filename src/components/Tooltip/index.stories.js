import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import CodeExample from '../../utils/CodeExample'
import InvertedMirror from '../../utils/InvertedMirror'

import Tooltip from '../Tooltip'
import TooltipToggle from '../TooltipToggle'
import TooltipContent from '../TooltipContent'
import Button from '../Button'


const placements = [
  [undefined, 'top-start', 'top', 'top-end', undefined],
  ['left-start', undefined, undefined, undefined, 'right-start'],
  ['left', undefined, 'auto', undefined, 'right'],
  ['left-end', undefined, undefined, undefined, 'right-end'],
  [undefined, 'bottom-start', 'bottom', 'bottom-end', undefined],
]


storiesOf('Components|Tooltip', module)
  .add('Summary', withAddons({
    path: 'components/Tooltip/index.stories.js',
    component: Tooltip,
  })(() => (
    <div>
      <div className='container'>
        <DocHeader
          title='Tooltip'
          description='Nudge the user in the right direction with a hint.'
        />

        <DocSection title='Demo'>
          <InvertedMirror>
            <CodeExample>
              {placements.map((row, i) =>
                <div className='row justify-content-center' key={i}>
                  {row.map((placement, j) =>
                    <div className='col-auto' key={j}>
                      {placement &&
                        <Tooltip placement={placement}>
                          <TooltipToggle>
                            <Button symmetrical />
                          </TooltipToggle>

                          <TooltipContent className='mc-text-small'>
                            <h6 className='mc-text-h6'>
                              {placement}
                            </h6>
                            <p>
                              Lorem ipsum dolor sit amet,
                              <br />
                              consectetur adipiscing elit.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      }

                      {!placement &&
                        <Button kind='link' symmetrical />
                      }
                    </div>,
                  )}
                </div>,
              )}
            </CodeExample>
          </InvertedMirror>
        </DocSection>
      </div>
    </div>
  )))

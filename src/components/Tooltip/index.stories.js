import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import CodeExample from '../../utils/CodeExample'
import InvertedMirror from '../../utils/InvertedMirror'

import Tooltip from '../Tooltip'
import TooltipToggle from '../TooltipToggle'
import TooltipBody from '../TooltipBody'
import Button from '../Button'


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
              <div className='row'>
                <div className='col-auto'>
                  <Tooltip>
                    <TooltipToggle>
                      <Button>Hover Me</Button>
                    </TooltipToggle>

                    <TooltipBody className='mc-text-small'>
                      <p>But I have nothing to say...</p>
                    </TooltipBody>
                  </Tooltip>
                </div>
              </div>
            </CodeExample>
          </InvertedMirror>
        </DocSection>
      </div>
    </div>
  )))

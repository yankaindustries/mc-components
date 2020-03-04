import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'

import HoverHandler from './index'
import Button from '../Button'


storiesOf('Utilities|HoverHandler', module)
  .add('default', withAddons({
    path: 'components/HoverHandler/index.stories.js',
    component: HoverHandler,
  })(() => (
    <div className='container'>
      <div className='example__heading'>
        <h1 className='mc-text-h1'>HoverHandler</h1>
        <p className='mc-opacity--muted'>
          Get access to hover as a property
        </p>
      </div>

      <DocSection>
        <PropExample>
          <HoverHandler>
            {({ hovering, intent }) =>
              <Button>
                {hovering ? 'Hovering' : 'Normal'}
                {intent ? ' w/ Intent' : ''}
              </Button>
            }
          </HoverHandler>
        </PropExample>
      </DocSection>
    </div>
  )))

import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'

import HoverHandler from './index'
import Button from '../Button'


storiesOf('utilities|HoverHandler', module)
  .add('default', withProps(HoverHandler)(() => (
    <div className='container'>
      <h2>HoverHandler</h2>

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

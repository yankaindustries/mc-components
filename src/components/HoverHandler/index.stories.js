import React from 'react'
import { storiesOf } from '@storybook/react'

import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'

import HoverHandler from './index'
import Button from '../Button'


storiesOf('utilities|HoverHandler', module)
  .add('default', () => (
    <div className='container'>
      <h2>HoverHandler</h2>

      <DocSection title='Variations'>
        <PropExample
          name='children'
          type='RenderProp'
        >
          <HoverHandler>
            {({ hovering }) =>
              <Button primary>
                {hovering ? 'Hovering' : 'Normal'}
              </Button>
            }
          </HoverHandler>
        </PropExample>
      </DocSection>
    </div>
  ))

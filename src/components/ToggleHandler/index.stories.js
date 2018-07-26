import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'

import ToggleHandler from './index'
import Button from '../Button'


storiesOf('utilities|ToggleHandler', module)
  .add('default', withProps(ToggleHandler)(() => (
    <div className='container'>
      <h2>ToggleHandler</h2>

      <DocSection title='Variations'>
        <PropExample
          name='children'
          type='RenderProp'
        >
          <ToggleHandler>
            {({ hovering }) =>
              <Button primary>
                {hovering ? 'Hovering' : 'Normal'}
              </Button>
            }
          </ToggleHandler>
        </PropExample>
      </DocSection>
    </div>
  )))

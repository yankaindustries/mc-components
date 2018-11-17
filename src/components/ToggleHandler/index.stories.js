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
      <div className='example__heading'>
        <h1 className='mc-text-h1'>ToggleHandler</h1>
        <p className='mc-text--muted'>
          Simplified way of tracking a toggle state
        </p>
      </div>

      <DocSection title='Variations'>
        <PropExample
          name='children'
          type='RenderProp'
        >
          <ToggleHandler>
            {({ toggled, onClick }) =>
              <Button
                onClick={onClick}
                primary={toggled}
                secondary={!toggled}
              >
                {toggled ? 'On' : 'Off'}
              </Button>
            }
          </ToggleHandler>
        </PropExample>
      </DocSection>
    </div>
  )))

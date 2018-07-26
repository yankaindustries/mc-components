import React from 'react'
import { storiesOf } from '@storybook/react'

import ToggleHandler from './index'
import Button from '../Button'


storiesOf('utilities|ToggleHandler', module)
  .add('default', () =>
    <ToggleHandler>
      {({ toggled, onClick }) =>
        <Button
          primary={toggled}
          tertiary={!toggled}
          onClick={onClick}
        >
          {toggled ? 'On' : 'Off'}
        </Button>
      }
    </ToggleHandler>,
  )

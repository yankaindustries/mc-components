import React from 'react'
import { storiesOf } from '@storybook/react'

import ToggleHandler from './index'
import Button from '../Button'


storiesOf('components|Utilities/ToggleHandler', module)
  .add('default', () =>
    <ToggleHandler>
      {({ toggled }) =>
        <Button
          primary={toggled}
          tertiary={!toggled}
        >
          {toggled ? 'On' : 'Off'}
        </Button>
      }
    </ToggleHandler>,
  )

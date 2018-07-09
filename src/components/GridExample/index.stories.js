import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import GridExample from '../GridExample'

storiesOf('foundation|GridExample', module)
  .add(
    'default',
    withInfo()(() =>
      <GridExample />,
    ),
  )

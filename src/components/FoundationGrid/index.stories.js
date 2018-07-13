import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import FoundationGrid from '../FoundationGrid'

storiesOf('foundation|Grid', module)
  .add(
    'default',
    withInfo()(() =>
      <FoundationGrid />,
    ),
  )

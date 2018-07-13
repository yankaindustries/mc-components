import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Badge from '../Badge'


storiesOf('components|Badge', module)
  .add(
    'default',
    withInfo()(() =>
      <Badge count={2} />,
    ),
  )

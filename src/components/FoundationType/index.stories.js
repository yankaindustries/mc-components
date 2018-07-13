import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import FoundationType from '../FoundationType'

storiesOf('foundation|Type', module)
  .add(
    'default',
    withInfo()(() =>
      <FoundationType />,
    ),
  )

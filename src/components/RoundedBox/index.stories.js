import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { RoundedBox } from '../index'


storiesOf('components|RoundedBox', module)
  .add('default',
    withInfo()(() =>
      <RoundedBox>
        <p>Content</p>
      </RoundedBox>,
    ),
  )
  .add('with header',
    withInfo()(() =>
      <RoundedBox
        header='Header'
        subheader='Sub header'
      >
        <p>Content</p>
      </RoundedBox>,
    ),
  )

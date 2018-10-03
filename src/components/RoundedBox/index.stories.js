import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import RoundedBox from '../RoundedBox'


storiesOf('components|RoundedBox', module)
  .add('default', withProps(RoundedBox)(() => (
    <RoundedBox>
      <p>Content</p>
    </RoundedBox>
  )))
  .add('with header', withProps(RoundedBox)(() => (
    <RoundedBox
      header='Header'
      subheader='Sub header'
    >

      <p>Content</p>
    </RoundedBox>
  )))

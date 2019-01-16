import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import Badge from '../Badge'


storiesOf('Components|Badge', module)
  .add('default', withProps(Badge)(() =>
    <Badge count={2} />,
  ))

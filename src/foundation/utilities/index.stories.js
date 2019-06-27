import React from 'react'
import { storiesOf } from '@storybook/react'

import Display from './display.stories'
import Opacity from './opacity.stories'

storiesOf('Foundation|Utilities', module)
  .add('Display', () => <Display />)
  .add('Opacity', () => <Opacity />)

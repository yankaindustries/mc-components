import React from 'react'
import { storiesOf } from '@storybook/react'

import Display from './display.stories'
import Opacity from './opacity.stories'
import Theme from './theme.stories'

storiesOf('Foundation|Utilities', module)
  .add('Display', () => <Display />)
  .add('Opacity', () => <Opacity />)
  .add('Theme', () => <Theme />)

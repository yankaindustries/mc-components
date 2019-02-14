import React from 'react'
import { storiesOf } from '@storybook/react'

import Summary from './summary.stories'
import Sizes from './sizes.stories'
import Modifiers from './modifiers.stories'

storiesOf('Foundation|Typography', module)
  .add('Summary', () => <Summary />)
  .add('Sizes', () => <Sizes />)
  .add('Modifiers', () => <Modifiers />)

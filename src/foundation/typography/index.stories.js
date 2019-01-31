import React from 'react'
import { storiesOf } from '@storybook/react'

import Summary from './summary.stories'
import Modifiers from './modifiers.stories'
import Alignment from './alignment.stories'
import Flourishes from './flourishes.stories'

storiesOf('Foundation|Typography', module)
  .add('Summary', () => <Summary />)
  .add('Modifiers', () => <Modifiers />)
  .add('Alignment', () => <Alignment />)
  .add('Flourishes', () => <Flourishes />)

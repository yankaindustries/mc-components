import React from 'react'
import { storiesOf } from '@storybook/react'

import GettingStarted from './getting-started.stories'
import Scale from './scale.stories'


storiesOf('Introduction', module)
  .add('Getting Started', () => <GettingStarted />)
  .add('Scale', () => <Scale />)

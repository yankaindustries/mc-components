import React from 'react'
import { storiesOf } from '@storybook/react'

import GettingStarted from './getting-started.stories'
import Scale from './scale.stories'
import Typography from './typography.stories'
import Icons from './icons.stories'


storiesOf('Introduction', module)
  .add('Getting Started', () => <GettingStarted />)
  .add('Scale', () => <Scale />)
  .add('Typography', () => <Typography />)
  .add('Icons', () => <Icons />)

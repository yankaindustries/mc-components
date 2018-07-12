import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Footer from '../Footer'


storiesOf('components|Structure/Footer', module)
  .add('default',
    withInfo()(() =>
      <Footer />,
    ),
  )

  .add('minimal',
    withInfo()(() =>
      <Footer isMinimal />,
    ),
  )

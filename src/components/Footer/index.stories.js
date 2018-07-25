import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import Footer from '../Footer'


storiesOf('components|Structure/Footer', module)
  .add('default',
    withProps(Footer)(() =>
      <Footer />,
    ),
  )

  .add('minimal',
    withProps(Footer)(() =>
      <Footer isMinimal />,
    ),
  )

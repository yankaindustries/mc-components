import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Footer from '../Footer'

const infoProps = {
  inline: true,
  header: false,
}

storiesOf('react|Footer', module)
  .add('default',
    withInfo({ ...infoProps })(() =>
      <Footer />,
    ),
  )

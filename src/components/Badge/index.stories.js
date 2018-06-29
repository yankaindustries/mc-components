import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Badge from '../Badge'

const infoProps = {
  inline: true,
  header: false,
}

storiesOf('react|Badge', module)
  .add(
    'default',
    withInfo({ ...infoProps })(() =>
      <Badge count={2} />,
    ),
  )

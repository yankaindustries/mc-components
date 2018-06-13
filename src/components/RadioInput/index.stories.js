import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import RadioInput from '../RadioInput'

const infoProps = {
  inline: true,
  header: false,
}

storiesOf('RadioInput', module)
  .add('default',
    withInfo({ ...infoProps })(() =>
      <RadioInput
        label='My radio input'
      />,
    ),
  )
  .add('checked',
    withInfo({ ...infoProps })(() =>
      <RadioInput
        label='My radio input'
        checked
      />,
    ),
  )

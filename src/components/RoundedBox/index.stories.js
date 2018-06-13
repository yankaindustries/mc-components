import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { RoundedBox } from '../index'

const infoProps = {
  inline: true,
  header: false,
}

storiesOf('RoundedBox', module)
  .add('default',
    withInfo({ ...infoProps })(() =>
      <RoundedBox>
        <p>Content</p>
      </RoundedBox>,
    ),
  )
  .add('with header',
    withInfo({ ...infoProps })(() =>
      <RoundedBox
        header='Header'
        subheader='Sub header'
      >
        <p>Content</p>
      </RoundedBox>,
    ),
  )

import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import HeaderLoggedOut from '../HeaderLoggedOut'

const infoProps = {
  inline: true,
  header: false,
}

storiesOf('components|Structure/HeaderLoggedOut', module)
  .add(
    'default',
    withInfo({ ...infoProps })(() => <HeaderLoggedOut />),
  )

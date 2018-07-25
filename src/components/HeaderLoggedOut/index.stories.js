import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import HeaderLoggedOut from '../HeaderLoggedOut'


storiesOf('components|Structure/Header/LoggedOut', module)
  .add('default', withProps(HeaderLoggedOut)(() =>
    <HeaderLoggedOut />,
  ))

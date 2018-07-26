import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withProps } from '../../utils/addon-props'

import HeaderLoggedIn from '../HeaderLoggedIn'


const menuLinks = [
  { label: 'My Classes', href: '/', helperText: '3 Classes' },
  { label: 'Notifications', href: '/notifications' },
  { label: 'The hub', href: '/' },
  { label: 'Sign out', href: '/sign_out' },
]

storiesOf('components|Structure/Header/LoggedIn', module)
  .add('default', withProps(HeaderLoggedIn)(() =>
    <HeaderLoggedIn menuLinks={menuLinks} />,
  ))
  .add('minimal', withProps(HeaderLoggedIn)(() =>
    <HeaderLoggedIn isMinimal />,
  ))
  .add('with avatar', withProps(HeaderLoggedIn)(() => (
    <HeaderLoggedIn
      menuLinks={menuLinks}
      avatar='https://graph.facebook.com/10156122473642900/picture?height=300&width=300'
    />
  )))
  .add('with badges', withProps(HeaderLoggedIn)(() => (
    <HeaderLoggedIn
      menuLinks={[
        ...menuLinks,
        { label: 'Profile', href: '/profile', badgeCount: 1 },
        { label: 'Sign out', href: '/sign_out' },
      ]}
    />
  )))
  .add('with backButton', withProps(HeaderLoggedIn)(() => (
    <HeaderLoggedIn
      menuLinks={menuLinks}
      left={{
        action: action('clicked'),
        label: 'Back',
        type: 'back',
      }}
    />
  )))

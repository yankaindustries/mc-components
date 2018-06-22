import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import HeaderLoggedIn from '../HeaderLoggedIn'

const infoProps = {
  inline: true,
  header: false,
}

const menuLinks = [
  { label: 'My Classes', href: '/', helperText: '3 Classes' },
  { label: 'Notifications', href: '/notifications' },
  { label: 'The hub', href: '/' },
  { label: 'Sign out', href: '/sign_out' },
]

storiesOf('HeaderLoggedIn', module)
  .add(
    'default',
    withInfo({ ...infoProps })(() => <HeaderLoggedIn menuLinks={menuLinks} />),
  )
  .add(
    'with avatar',
    withInfo({ ...infoProps })(() => (
      <HeaderLoggedIn
        menuLinks={menuLinks}
        avatar='https://graph.facebook.com/10156122473642900/picture?height=300&width=300'
      />
    )),
  )
  .add(
    'with badges',
    withInfo({ ...infoProps })(() => (
      <HeaderLoggedIn
        menuLinks={[
          ...menuLinks,
          { label: 'Profile', href: '/profile', badgeCount: 1 },
          { label: 'Sign out', href: '/sign_out' },
        ]}
      />
    )),
  )

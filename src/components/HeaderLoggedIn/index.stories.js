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
    <div>
      <HeaderLoggedIn menuLinks={menuLinks} />
      <div style={
        {
          paddingBottom: '2000px',
          background: '#ccc',
        }
      }>
      </div>
    </div>,
  ))
  .add('minimal', withProps(HeaderLoggedIn)(() =>
    <div>
      <HeaderLoggedIn isMinimal />
      <div style={
        {
          paddingBottom: '2000px',
          background: '#ccc',
        }
      }>
      </div>
    </div>,
  ))
  .add('with avatar', withProps(HeaderLoggedIn)(() => (
    <div>
      <HeaderLoggedIn
        menuLinks={menuLinks}
        avatar='https://graph.facebook.com/10156122473642900/picture?height=300&width=300'
      />
      <div style={
        {
          paddingBottom: '2000px',
          background: '#ccc',
        }
      }>
      </div>
    </div>
  )))
  .add('with badges', withProps(HeaderLoggedIn)(() => (
    <div>
      <HeaderLoggedIn
        menuLinks={[
          ...menuLinks,
          { label: 'Profile', href: '/profile', badgeCount: 1 },
          { label: 'Sign out', href: '/sign_out' },
        ]}
      />
      <div style={
        {
          paddingBottom: '2000px',
          background: '#ccc',
        }
      }>
      </div>
    </div>
  )))
  .add('with backButton', withProps(HeaderLoggedIn)(() => (
    <div>
      <HeaderLoggedIn
        menuLinks={menuLinks}
        left={{
          action: action('clicked'),
          label: 'Back',
          type: 'back',
        }}
      />
      <div style={
        {
          paddingBottom: '2000px',
          background: '#ccc',
        }
      }>
      </div>
    </div>
  )))

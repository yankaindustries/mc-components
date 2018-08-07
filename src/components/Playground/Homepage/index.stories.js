import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('playground|Homepage', module)
  .add('default', () =>
    <div className='container'>
      <h1 className='mc-heading-1'>Welcome to the new homepage</h1>
    </div>,
  )

import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'

import Badge from '../Badge'


storiesOf('Components|Badge', module)
  .add('default', withProps(Badge)(() =>
    <div className='container'>
      <DocHeader
        title='Badges'
        description='
          Helpful little badges.
        '
      />

      <DocSection title='Default'>
        <Badge>
          Default Badge
        </Badge>
      </DocSection>

      <DocSection title='Secondary'>
        <Badge kind='secondary'>
          Secondary Example
        </Badge>
      </DocSection>
    </div>,
  ))

import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'
import DocHeader from '../../utils/DocHeader'
import InvertedMirror from '../../utils/InvertedMirror'

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

      <InvertedMirror>
        <div className='row mc-text--center'>
          <div className='col-12 col-sm-4'>
            <Badge>
              Default Badge
            </Badge>
          </div>

          <div className='col-12 col-sm-4'>
            <Badge kind='secondary'>
              Secondary Example
            </Badge>
          </div>

          <div className='col-12 col-sm-4'>
            <Badge kind='tertiary'>
              Just an outline
            </Badge>
          </div>
        </div>
      </InvertedMirror>
    </div>,
  ))

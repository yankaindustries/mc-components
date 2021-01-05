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
        <div className='row justify-content-center'>
          <div className='col-auto'>
            <Badge>
              Default
            </Badge>
          </div>

          <div className='col-auto'>
            <Badge kind='dim'>
              Dim
            </Badge>
          </div>

          <div className='col-auto'>
            <Badge kind='transparent'>
              Transparent
            </Badge>
          </div>

          <div className='col-auto'>
            <Badge kind='primary'>
              Primary
            </Badge>
          </div>
        </div>
      </InvertedMirror>
    </div>,
  ))

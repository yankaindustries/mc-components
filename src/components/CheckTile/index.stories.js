import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import DocSection from '../../utils/DocSection'
import PropsTable from '../../utils/PropsTable'

import CheckTile from '../CheckTile'
import shondaRhimesThumbnail from '../../assets/shonda-rhimes-video.png'


storiesOf('components|Tiles/CheckTile', module)
  .add('default', () =>
    <div className='container'>
      <h2>CheckTile</h2>
      <DocSection title='Example'>
        <CheckTile
          imageUrl={shondaRhimesThumbnail}
          onChange={action('onChange')}
        />
      </DocSection>

      <DocSection title='Properties'>
        <div className='row'>
          <div className='col-lg-6 col-md-9'>
            <PropsTable component={CheckTile} />
          </div>
        </div>
      </DocSection>
    </div>,
  )

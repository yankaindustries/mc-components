import React from 'react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'


const Opacity = () =>
  <div className='container'>
    <DocHeader
      title='Utilities - Opacity'
      description='The opacity utility can modify the opacity of any dom element.'
    />

    <DocSection title='Opacities'>
      <div className='row'>
        <div className='col-md-4'>
          <PropExample name='.mc-opacity--hinted'>
            <h6 className='mc-text-h5 mc-opacity--hinted'>
              The quick brown fox jumped over the lazy dog (80%).
            </h6>
          </PropExample>
        </div>

        <div className='col-md-4'>
          <PropExample name='.mc-opacity--muted'>
            <h6 className='mc-text-h5 mc-opacity--muted'>
              The quick brown fox jumped over the lazy dog (60%).
            </h6>
          </PropExample>
        </div>

        <div className='col-md-4'>
          <PropExample name='.mc-opacity--silenced'>
            <h6 className='mc-text-h5 mc-opacity--silenced'>
              The quick brown fox jumped over the lazy dog (30%).
            </h6>
          </PropExample>
        </div>
      </div>
    </DocSection>
  </div>


export default withAddons({
  path: 'foundation/utilities/opacity.stories.js',
})(() => <Opacity />)

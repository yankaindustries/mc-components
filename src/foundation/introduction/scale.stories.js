import React from 'react'
import Highlight from 'react-highlight'

import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'


const Scale = () =>
  <div className='container'>
    <DocHeader
      title='Scale'
      description='Programmatically determined values for size and space.'
    />

    <DocSection title='Function'>
      <p className='mcb-space-2'>
        MC-UI uses a 4px decaying step scale to provide a collection of values
        used to space and size components. These step values are the result
        of a relatively basic function.
      </p>

      <Highlight>
        floor((step * 4) - (max(step - 4, 0) * decay))
      </Highlight>
    </DocSection>
  </div>


export default Scale

import React from 'react'

import CodeExample from '../../utils/CodeExample'


const Alignment = () =>
  <div className='container'>
    <div className='example__heading'>
      <h2 className='mc-text-h1'>Alignment</h2>
      <p className='mc-text--muted'>Modifier classes to aid you in text alignment.</p>
    </div>

    <div className='example__section'>
      <div className='row'>
        <div className='col-md-4'>
          <p className='mc-text--muted mc-text--monospace'>.mc-text--left</p>
          <CodeExample>
            <p className='mc-text--left'>The quick brown</p>
          </CodeExample>
        </div>

        <div className='col-md-4'>
          <p className='mc-text--muted mc-text--monospace'>.mc-text--center</p>
          <CodeExample>
            <p className='mc-text--center'>fox jumped over</p>
          </CodeExample>
        </div>

        <div className='col-md-4'>
          <p className='mc-text--muted mc-text--monospace'>.mc-text--right</p>
          <CodeExample>
            <p className='mc-text--right'>the lazy dog.</p>
          </CodeExample>
        </div>

        <div className='col-12'>
          <p className='mc-text--muted mc-text--monospace'>.mc-text--center.mc-text-md--left</p>
          <CodeExample>
            <p className='mc-text--center mc-text-md--left'>The quick brown fox jumped over the lazy dog.</p>
          </CodeExample>
        </div>
      </div>
    </div>
  </div>


export default Alignment

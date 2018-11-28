import React from 'react'

import CodeExample from '../../utils/CodeExample'


const Modifiers = () =>
  <div className='container'>
    <div className='example__heading'>
      <h1 className='mc-text-h1'>Modifiers</h1>
      <p className='mc-text--muted'>All available text modifier classes.</p>
    </div>

    <div className='align-items-center example__section'>
      <p className='mc-text--muted mc-text--monospace'>.mc-text--uppercase</p>
      <CodeExample>
        <h6 className='mc-text-h5 mc-text--uppercase'>
          The quick brown fox jumped over the lazy dog.
        </h6>
      </CodeExample>
    </div>

    <div className='align-items-center example__section'>
      <p className='mc-text--muted mc-text--monospace'>.mc-text--airy</p>
      <CodeExample>
        <h6 className='mc-text-h5 mc-text--airy'>
          The quick brown fox jumped over the lazy dog.
        </h6>
      </CodeExample>
    </div>

    <div className='align-items-center example__section'>
      <p className='mc-text--muted mc-text--monospace'>.mc-text--muted</p>
      <CodeExample>
        <h6 className='mc-text-h5 mc-text--muted'>
          The quick brown fox jumped over the lazy dog.
        </h6>
      </CodeExample>
    </div>

    <div className='align-items-center example__section'>
      <p className='mc-text--muted mc-text--monospace'>.mc-text--silenced</p>
      <CodeExample>
        <h6 className='mc-text-h5 mc-text--silenced'>
          The quick brown fox jumped over the lazy dog.
        </h6>
      </CodeExample>
    </div>

    <div className='align-items-center example__section'>
      <p className='mc-text--muted mc-text--monospace'>.mc-text--bold</p>
      <CodeExample>
        <p className='mc-text-large mc-text--bold'>
          The quick brown fox jumped over the lazy dog.
        </p>
      </CodeExample>
    </div>

    <div className='align-items-center example__section'>
      <p className='mc-text--muted mc-text--monospace'>.mc-text--normal</p>
      <CodeExample>
        <p className='mc-text-large mc-text--normal'>
          The quick brown fox jumped over the lazy dog.
        </p>
      </CodeExample>
    </div>
  </div>


export default Modifiers

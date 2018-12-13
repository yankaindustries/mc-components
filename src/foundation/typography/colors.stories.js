import React from 'react'


const Colors = () =>
  <div className='container'>
    <div className='example__section'>
      <h2 className='mc-text-h1'>Colors</h2>
      <p className='mc-text--muted'>
        For specific branding guideline requirements.
      </p>
    </div>

    <div className='example__section'>
      <div className='row'>
        <div className='col-sm-4'>
          <p className='mc-text--muted mc-text--monospace'>.mc-text-link</p>
          <h4 className='mc-text-h4 mc-text-link'>Link</h4>
        </div>

        <div className='col-sm-4'>
          <p className='mc-text--muted mc-text--monospace'>.mc-text--facebook</p>
          <h4 className='mc-text-h4 mc-text--facebook'>Facebook</h4>
        </div>

        <div className='col-sm-4'>
          <p className='mc-text--muted mc-text--monospace'>.mc-text--twitter</p>
          <h4 className='mc-text-h4 mc-text--twitter'>Twitter</h4>
        </div>
      </div>
    </div>
  </div>


export default Colors

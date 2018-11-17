import React from 'react'

import CodeExample from '../../utils/CodeExample'


const Flourishes = () =>
  <div className='container'>
    <div className='example__heading'>
      <h2 className='mc-text-h1'>Flourishes</h2>
      <p className='mc-text--muted'>
        Fancy treatments for your typography. <br />
        If the containing element is too narrow to accomodate the flourish,
        it will gracefully disappear.
      </p>
    </div>

    <div className='example__section'>
      <p className='mc-text--muted mc-text--monospace'>.mc-text-hr</p>
      <CodeExample>
        <div className='row'>
          <div className='col-sm-4'>
            <p className='mc-text-hr mc-text--uppercase'>
            <span>The</span>
            </p>
          </div>

          <div className='col-sm-4'>
            <p className='mc-text-hr mc-text--uppercase'>
              <span>Text</span>
            </p>
          </div>

          <div className='col-sm-4'>
            <p className='mc-text-hr mc-text--uppercase'>
              <span>Can be any length</span>
            </p>
          </div>

          <div className='col-12'>
            <p className='mc-text-hr mc-text--uppercase'>
              <span>That you would like to use</span>
            </p>
          </div>
        </div>
      </CodeExample>
    </div>

    <div className='example__section'>
      <p className='mc-text--muted mc-text--monospace'>.mc-text-hr</p>
      <CodeExample>
        <div className='rounded-box mc-invert'>
          <div className='row'>
            <div className='col-sm-4'>
              <p className='mc-text-hr'>
                <span>This can</span>
              </p>
            </div>
            <div className='col-sm-4'>
              <p className='mc-text-hr mc-text--uppercase'>
                <span>also be used</span>
              </p>
            </div>
            <div className='col-sm-4'>
              <p className='mc-text-hr'>
                <span>on a white background</span>
              </p>
            </div>
          </div>
        </div>
      </CodeExample>
    </div>
  </div>


export default Flourishes

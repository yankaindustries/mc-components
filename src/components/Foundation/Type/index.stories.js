import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

storiesOf('foundation|Type', module)
  .add(
    'default',
    withInfo()(() =>
      <div className='example-mc-type'>
        <div className='container example--section'>
          <h2 className='mc-text-display1'>Typography</h2>
          <p className='mc-text-p'>A showcase of the available type styles in mc-components.</p>
        </div>
        <div className='container'>
          <div className='row align-items-center example--section'>
            <div className='col-md-2 mc-type__description'>
              <p>Display 1</p>
            </div>

            <div className='col-md'>
              <h1 className='mc-text-display1'>Malcolm Gladwell</h1>
            </div>
          </div>

          <div className='row align-items-center example--section'>
            <div className='col-md-2 mc-type__description'>
              <p>Display 2</p>
            </div>

            <div className='col-md'>
              <h1 className='mc-text-display2'>Teaches Writing</h1>
            </div>
          </div>

          <div className='row align-items-center example--section'>
            <div className='col-md-2 mc-type__description'>
              <p>H1</p>
            </div>

            <div className='col-md'>
              <h1 className='mc-text-h1'>Unlock Every Class with the All‑Access Pass</h1>
            </div>
          </div>

          <div className='row align-items-center example--section'>
            <div className='col-md-2 mc-type__description'>
              <p>H2</p>
            </div>

            <div className='col-md'>
              <h2 className='mc-text-h2'>All-Access Pass</h2>
            </div>
          </div>

          <div className='row align-items-center example--section'>
            <div className='col-md-2 mc-type__description'>
              <p>H3</p>
            </div>

            <div className='col-md'>
              <h3 className='mc-text-h3'>Now Available</h3>
            </div>
          </div>

          <div className='row align-items-center example--section'>
            <div className='col-md-2 mc-type__description'>
              <p>H4</p>
            </div>

            <div className='col-md'>
              <h4 className='mc-text-h4'>Diane Von Furstenburg</h4>
            </div>
          </div>

          <div className='row align-items-center example--section'>
            <div className='col-md-2 mc-type__description'>
              <p>H5</p>
            </div>

            <div className='col-md'>
              <h5 className='mc-text-h5'>Teaches Fashion</h5>
            </div>
          </div>

          <div className='row align-items-center example--section'>
            <div className='col-md-2 mc-type__description'>
              <p>Body 1</p>
            </div>

            <div className='col-md'>
              <p className='mc-text-p'>Online classes taught by the world&#39;s
              greatest minds. Now get unlimited access to all classes.
              </p>
            </div>
          </div>

          <div className='row align-items-center example--section'>
            <div className='col-md-2 mc-type__description'>
              <p>Body 2</p>
            </div>

            <div className='col-md'>
              <p className='mc-text-p2'>Online classes taught by the world&#39;s greatest minds. Now get unlimited access to all classes.
              </p>
            </div>
          </div>

          <div className='row align-items-center example--section'>
            <div className='col-md-2 mc-type__description'>
              <p>Legal</p>
            </div>

            <div className='col-md'>
              <p className='mc-text-legal'>Copyright 2018 MasterClass</p>
            </div>
          </div>
        </div>

        <div className='container example--section'>
          <div className='row align-items-center example--section'>
            <div className='col-md-2 mc-type__description'>
              <p>Helper --bold</p>
            </div>

            <div className='col-md'>
              <p className='mc-text-p mc-text--bold'>The quick brown fox jumped over the lazy dog.</p>
            </div>
          </div>

          <div className='row align-items-center example--section'>
            <div className='col-md-2 mc-type__description'>
              <p>Helper --uppercase</p>
            </div>

            <div className='col-md'>
              <p className='mc-text-p mc-text--uppercase'>The quick brown fox jumped over the lazy dog.</p>
            </div>
          </div>

          <div className='row align-items-center example--section'>
            <div className='col-md-2 mc-type__description'>
              <p>Helper --muted</p>
            </div>

            <div className='col-md'>
              <p className='mc-text-p mc-text--muted'>The quick brown fox jumped over the lazy dog.</p>
            </div>
          </div>

          <div className='row align-items-center example--section'>
            <div className='col-md-2 mc-type__description'>
              <p>Combined</p>
            </div>

            <div className='col-md'>
              <p className='mc-text-p mc-text--muted mc-text--uppercase mc-text --bold'>The quick brown fox jumped over the lazy dog.</p>
            </div>
          </div>
        </div>
      </div>,
    ),
  )

import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

storiesOf('foundation|Type', module)
  .add(
    'default',
    withInfo()(() =>
      <div className='example-mc-type'>
        <div className='container example--section'>
          <h2 className='mc-text-d1'>Typography</h2>
          <p className='mc-text-p'>A showcase of the available type styles in mc-components.</p>
        </div>
        <div className='container'>
          <div className='align-items-center example--section'>
            <h5 className='mc-text-h5'>Display 1</h5>
            <h1 className='mc-text-d1'>Malcolm Gladwell</h1>
            <p className='mc-text--muted mc-text--monospace'>.mc-text-d1</p>
          </div>

          <div className='align-items-center example--section'>
            <h5 className='mc-text-h5'>Display 2</h5>
            <h1 className='mc-text-d2'>Teaches Writing</h1>
            <p className='mc-text--muted mc-text--monospace'>.mc-text-d2</p>
          </div>

          <div className='align-items-center example--section'>
            <h5 className='mc-text-h5'>H1</h5>
            <h1 className='mc-text-h1'>Unlock Every Class with the All‑Access Pass</h1>
            <p className='mc-text--muted mc-text--monospace'>.mc-text-h1</p>
          </div>

          <div className='align-items-center example--section'>
            <h5 className='mc-text-h5'>H2</h5>
            <h2 className='mc-text-h2'>All-Access Pass</h2>
            <p className='mc-text--muted mc-text--monospace'>.mc-text-h2</p>
          </div>

          <div className='align-items-center example--section'>
            <h5 className='mc-text-h5'>H3</h5>
            <h3 className='mc-text-h3'>Now Available</h3>
            <p className='mc-text--muted mc-text--monospace'>.mc-text-h3</p>
          </div>

          <div className='align-items-center example--section'>
            <h5 className='mc-text-h5'>H4</h5>
            <h4 className='mc-text-h4'>Diane Von Furstenburg</h4>
            <p className='mc-text--muted mc-text--monospace'>.mc-text-h4</p>
          </div>

          <div className='align-items-center example--section'>
            <h5 className='mc-text-h5'>H5</h5>
            <h5 className='mc-text-h5'>Teaches Fashion</h5>
            <p className='mc-text--muted mc-text--monospace'>.mc-text-h5</p>
          </div>

          <div className='align-items-center example--section'>
            <h5 className='mc-text-h5'>Body</h5>
            <p>Online classes taught by the world&#39;s greatest minds. Now get
             unlimited access to all classes.
            </p>
            <p className='mc-text--muted mc-text--monospace'>Default body text</p>
          </div>

          <div className='align-items-center example--section'>
            <h5 className='mc-text-h5'>Intro</h5>
            <p className='mc-text-intro'>Online classes taught by the world&#39;s greatest minds. Now get
             unlimited access to all classes.
            </p>
            <p className='mc-text--muted mc-text--monospace'>.mc-text-intro</p>
          </div>

          <div className='align-items-center example--section'>
            <h5 className='mc-text-h5'>Legal</h5>
            <p className='mc-text-legal'>Copyright 2018 MasterClass</p>
            <p className='mc-text--muted mc-text--monospace'>.mc-text-legal</p>
          </div>
        </div>

        <div className='container example--section'>
          <div className='align-items-center example--section'>
            <h5 className='mc-text-h5'>Bold</h5>
            <p className='mc-text--bold'>The quick brown fox jumped over the lazy dog.</p>
            <p className='mc-text--muted mc-text--monospace'>.mc-text--bold</p>
          </div>

          <div className='align-items-center example--section'>
            <h5 className='mc-text-h5'>Uppercase</h5>
            <p className='mc-text--uppercase'>The quick brown fox jumped over the lazy dog.</p>
            <p className='mc-text--muted mc-text--monospace'>.mc-text--uppercase</p>
          </div>

          <div className='align-items-center example--section'>
            <h5 className='mc-text-h5'>Muted</h5>
            <p className='mc-text--muted'>The quick brown fox jumped over the lazy dog.</p>
            <p className='mc-text--muted mc-text--monospace'>.mc-text--muted</p>
          </div>

          <div className='align-items-center example--section'>
            <h5 className='mc-text-h5'>Combined Example</h5>
            <p className='mc-text--muted mc-text--uppercase mc-text --bold'>The quick brown fox jumped over the lazy dog.</p>
            <p className='mc-text--muted mc-text--monospace'>.mc-text--muted.mc-text--uppercase.mc-text--bold</p>
          </div>

          <div className='align-items-center example--section'>
            <h5 className='mc-text-h5'>Code</h5>
            <p className='mc-text--monospace'>The quick brown fox jumped over the lazy dog.</p>
            <p className='mc-text--muted mc-text--monospace'>.mc-text--monospace.mc-text--uppercase.mc-text--bold</p>
          </div>
        </div>
      </div>,
    ),
  )

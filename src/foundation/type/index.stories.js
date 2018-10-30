import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('foundation|Type', module)
  .add('default', () =>
    <div className='example-mc-type'>
      <div className='container example--section'>
        <h2 className='mc-text-d1'>Typography</h2>
        <p>A showcase of the available type styles in mc-components.</p>
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
          <h5 className='mc-text-h5'>Display 3</h5>
          <h1 className='mc-text-d3'>Now Available</h1>
          <p className='mc-text--muted mc-text--monospace'>.mc-text-d3</p>
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
          <h5 className='mc-text-h5'>Default body text</h5>
          <p>Online classes taught by the world&#39;s greatest minds. Now get
           unlimited access to all classes.
          </p>
          <p className='mc-text--muted mc-text--monospace'>&lt;p&gt; - No class needed</p>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Intro</h5>
          <p className='mc-text-intro'>Online classes taught by the world&#39;s greatest minds. Now get
           unlimited access to all classes.
          </p>
          <p className='mc-text--muted mc-text--monospace'>.mc-text-intro</p>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Readable</h5>
          <p className='mc-text-intro'>Online classes taught by the world&#39;s greatest minds. Now get
           unlimited access to all classes.
          </p>
          <p className='mc-text--muted mc-text--monospace'>.mc-text-readable</p>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Legal</h5>
          <p className='mc-text-legal'>Copyright 2018 MasterClass</p>
          <p className='mc-text--muted mc-text--monospace'>.mc-text-legal</p>
        </div>
      </div>
    </div>,
  )
  .add('Modifiers', () =>
    <div className='example-mc-type'>
      <div className='container example--section'>
        <h2 className='mc-text-d1'>Modifiers</h2>
        <p className='mc-text-p'>All available text modifier classes.</p>
      </div>

      <div className='container'>
        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Uppercase</h5>
          <p className='mc-text--uppercase'>The quick brown fox jumped over the lazy dog.</p>
          <p className='mc-text--muted mc-text--monospace'>.mc-text--uppercase</p>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Lowercase</h5>
          <p className='mc-text--lowercase'>The quick brown fox jumped over the lazy dog.</p>
          <p className='mc-text--muted mc-text--monospace'>.mc-text--lowercase</p>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Capitalize</h5>
          <p className='mc-text--capitalize'>The quick brown fox jumped over the lazy dog.</p>
          <p className='mc-text--muted mc-text--monospace'>.mc-text--capitalize</p>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Font weight - Bold</h5>
          <p className='mc-text--bold'>The quick brown fox jumped over the lazy dog.</p>
          <p className='mc-text--muted mc-text--monospace'>.mc-text--bold</p>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Font weight - Normal</h5>
          <h1 className='mc-text--normal'>The quick brown fox jumped over the lazy dog.</h1>
          <p className='mc-text--muted mc-text--monospace'>.mc-text--normal</p>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Font weight - Extra Light</h5>
          <h1 className='mc-text--x-light'>The quick brown fox jumped over the lazy dog.</h1>
          <p className='mc-text--muted mc-text--monospace'>.mc-text--x-light</p>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Muted</h5>
          <p className='mc-text--muted'>The quick brown fox jumped over the lazy dog.</p>
          <p className='mc-text--muted mc-text--monospace'>.mc-text--muted</p>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Airy</h5>
          <p className='mc-text--airy'>The quick brown fox jumped over the lazy dog.</p>
          <p className='mc-text--muted mc-text--monospace'>.mc-text--airy</p>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Invert</h5>
          <div className='rounded-box'>
            <p className='mc-text--invert'>The quick brown fox jumped over the lazy dog.</p>
          </div>
          <p className='mc-text--muted mc-text--monospace'>.mc-text--invert</p>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Monospace</h5>
          <p className='mc-text--monospace'>The quick brown fox jumped over the lazy dog.</p>
          <p className='mc-text--muted mc-text--monospace'>.mc-text--monospace.mc-text--uppercase.mc-text--bold</p>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Chaining modifiers</h5>
          <p className='mc-text--uppercase mc-text--airy mc-text--bold'>The quick brown fox jumped over the lazy dog.</p>
          <p className='mc-text--muted mc-text--monospace'>.mc-text--uppercase.mc-text--airy.mc-text--bold</p>
        </div>
      </div>
    </div>,
  )
  .add('Alignment', () =>
    <div className='example-mc-type'>
      <div className='container example--section'>
        <h2 className='mc-text-d1'>Alignment</h2>
        <p className='mc-text-p'>Modifier classes to aid you in text alignment.</p>
      </div>

      <div className='container example--section'>
        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Align left</h5>
          <p className='mc-text--left'>The quick brown fox jumped over the lazy dog.</p>
          <p className='mc-text--muted mc-text--monospace'>.mc-text--left</p>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Align Center</h5>
          <p className='mc-text--center'>The quick brown fox jumped over the lazy dog.</p>
          <p className='mc-text--muted mc-text--monospace'>.mc-text--center</p>
        </div>

        <div className='align-items-right example--section'>
          <h5 className='mc-text-h5'>Align right</h5>
          <p className='mc-text--right'>The quick brown fox jumped over the lazy dog.</p>
          <p className='mc-text--muted mc-text--monospace'>.mc-text--right</p>
        </div>

        <div className='align-items-right example--section'>
          <h5 className='mc-text-h5'>Responsive alignment</h5>
          <p className='mc-text--right mc-text-md--center'>The quick brown fox jumped over the lazy dog.</p>
          <p className='mc-text--muted mc-text--monospace'>.mc-text--right mc-text-md--center</p>
        </div>
      </div>
    </div>,
  )
  .add('Flourishes', () =>
    <div className='example-mc-type'>
      <div className='container example--section'>
        <h2 className='mc-text-d1'>Flourishes</h2>
        <p>
          Fancy treatments for your typography.  If the containing
          element is too narrow to accomodate the flourish, it will
          gracefully disappear.</p>
      </div>
      <div className='container'>
        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Variable length text separator line</h5>
          <div className='row'>
            <div className='col-sm-4'>
              <p className='mc-text-hr mc-text--uppercase'><span>The</span></p>
            </div>
            <div className='col-sm-4'>
              <p className='mc-text-hr mc-text--uppercase'><span>Text</span></p>
            </div>
            <div className='col-sm-4'>
              <p className='mc-text-hr mc-text--uppercase'><span>Can be any length</span></p>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12'>
              <p className='mc-text-hr mc-text--uppercase'><span>That you would like to use</span></p>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12'>
              <p className='mc-text-hr'><span>Cool.</span></p>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-2 offset-sm-10'>
              <p className='mc-text-hr'><span>Yeah!</span></p>
            </div>
          </div>
          <p className='mc-text--muted mc-text--monospace'>.mc-text-hr</p>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>On a white background</h5>
          <div className='rounded-box'>
            <div className='row'>
              <div className='col-sm-4'>
                <p className='mc-text-hr mc-text--invert'><span>This can</span></p>
              </div>
              <div className='col-sm-4'>
                <p className='mc-text-hr mc-text--invert mc-text--uppercase'><span>also be used</span></p>
              </div>
              <div className='col-sm-4'>
                <p className='mc-text-hr mc-text--invert'><span>on a white background</span></p>
              </div>
            </div>
          </div>
          <p className='mc-text--muted mc-text--monospace'>.mc-text-hr</p>
        </div>
      </div>
    </div>,
  )
  .add('Colors', () =>
    <div className='example-mc-type'>
      <div className='container example--section'>
        <h2 className='mc-text-d1'>Color Treatments</h2>
        <p className='mc-text-p'>For specific branding guideline requirements.</p>
      </div>

      <div className='container example--section'>
        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Align left</h5>
          <p className='mc-text--facebook'>Facebook brand color</p>
          <p className='mc-text--muted mc-text--monospace'>.mc-text-facebook</p>
        </div>
      </div>

      <div className='container example--section'>
        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Align left</h5>
          <p className='mc-text--twitter'>Twitter brand color</p>
          <p className='mc-text--muted mc-text--monospace'>.mc-text-twitter</p>
        </div>
      </div>
    </div>,
  )

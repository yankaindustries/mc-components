import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('foundation|Variables', module)
  .add('All', () =>
    <div className='example-mc-variables'>
      <div className='container example--section'>
        <h2 className='mc-text-d1'>Variables</h2>
        <p>Colors, breakpoints, and mixins, oh my!</p>
      </div>
      <div className='container'>
        <div className='align-items-top example--section'>
          <h1 className='mc-text-h1'>Colors</h1>
          <ul className='example-mc-swatches'>
            <li className='example-mc-swatch'>
              <span className='example-mc-swatch__color example-mc-swatch__color--mc-color-light'></span>
              <p className='mc-text-h5 mc-text--muted mc-text--monospace'>$mc-color-light</p>
            </li>
            <li className='example-mc-swatch'>
              <span className='example-mc-swatch__color example-mc-swatch__color--mc-color-dark'></span>
              <p className='mc-text-h5 mc-text--muted mc-text--monospace'>$mc-color-dark</p>
            </li>
          </ul>

          <ul className='example-mc-swatches'>
            <li className='example-mc-swatch'>
              <span className='example-mc-swatch__color example-mc-swatch__color--mc-color-primary'></span>
              <p className='mc-text-h5 mc-text--muted mc-text--monospace'>$mc-color-primary</p>
            </li>
            <li className='example-mc-swatch'>
              <span className='example-mc-swatch__color example-mc-swatch__color--mc-color-primary-hover'></span>
              <p className='mc-text-h5 mc-text--muted mc-text--monospace'>$mc-color-primary-hover</p>
            </li>
            <li className='example-mc-swatch'>
              <span className='example-mc-swatch__color example-mc-swatch__color--mc-color-primary-active'></span>
              <p className='mc-text-h5 mc-text--muted mc-text--monospace'>$mc-color-primary-active</p>
            </li>
          </ul>

          <ul className='example-mc-swatches'>
            <li className='example-mc-swatch'>
              <span className='example-mc-swatch__color example-mc-swatch__color--mc-color-secondary'></span>
              <p className='mc-text-h5 mc-text--muted mc-text--monospace'>$mc-color-secondary</p>
            </li>
            <li className='example-mc-swatch'>
              <span className='example-mc-swatch__color example-mc-swatch__color--mc-color-secondary-hover'></span>
              <p className='mc-text-h5 mc-text--muted mc-text--monospace'>$mc-color-secondary-hover</p>
            </li>
            <li className='example-mc-swatch'>
              <span className='example-mc-swatch__color example-mc-swatch__color--mc-color-secondary-active'></span>
              <p className='mc-text-h5 mc-text--muted mc-text--monospace'>$mc-color-secondary-active</p>
            </li>
          </ul>

          <ul className='example-mc-swatches'>
            <li className='example-mc-swatch'>
              <span className='example-mc-swatch__color example-mc-swatch__color--mc-color-tertiary'></span>
              <p className='mc-text-h5 mc-text--muted mc-text--monospace'>$mc-color-tertiary</p>
            </li>
            <li className='example-mc-swatch'>
              <span className='example-mc-swatch__color example-mc-swatch__color--mc-color-tertiary-hover'></span>
              <p className='mc-text-h5 mc-text--muted mc-text--monospace'>$mc-color-tertiary-hover</p>
            </li>
          </ul>

          <ul className='example-mc-swatches'>
            <li className='example-mc-swatch'>
              <span className='example-mc-swatch__color example-mc-swatch__color--mc-color-background'></span>
              <p className='mc-text-h5 mc-text--muted mc-text--monospace'>$mc-color-background</p>
            </li>
            <li className='example-mc-swatch'>
              <span className='example-mc-swatch__color example-mc-swatch__color--mc-color-background-invert'></span>
              <p className='mc-text-h5 mc-text--muted mc-text--monospace'>$mc-color-background-invert</p>
            </li>
            <li className='example-mc-swatch'>
              <span className='example-mc-swatch__color example-mc-swatch__color--mc-color-text'></span>
              <p className='mc-text-h5 mc-text--muted mc-text--monospace'>$mc-color-text</p>
            </li>
            <li className='example-mc-swatch'>
              <span className='example-mc-swatch__color example-mc-swatch__color--mc-color-text-invert'></span>
              <p className='mc-text-h5 mc-text--muted mc-text--monospace'>$mc-color-text-invert</p>
            </li>
          </ul>

          <ul className='example-mc-swatches'>
            <li className='example-mc-swatch'>
              <span className='example-mc-swatch__color example-mc-swatch__color--mc-gray-100'></span>
              <p className='mc-text-h5 mc-text--muted mc-text--monospace'>$mc-color-gray-100</p>
            </li>
            <li className='example-mc-swatch'>
              <span className='example-mc-swatch__color example-mc-swatch__color--mc-gray-200'></span>
              <p className='mc-text-h5 mc-text--muted mc-text--monospace'>$mc-color-gray-200</p>
            </li>
            <li className='example-mc-swatch'>
              <span className='example-mc-swatch__color example-mc-swatch__color--mc-gray-300'></span>
              <p className='mc-text-h5 mc-text--muted mc-text--monospace'>$mc-color-gray-300</p>
            </li>
            <li className='example-mc-swatch'>
              <span className='example-mc-swatch__color example-mc-swatch__color--mc-gray-400'></span>
              <p className='mc-text-h5 mc-text--muted mc-text--monospace'>$mc-color-gray-400</p>
            </li>
            <li className='example-mc-swatch'>
              <span className='example-mc-swatch__color example-mc-swatch__color--mc-gray-500'></span>
              <p className='mc-text-h5 mc-text--muted mc-text--monospace'>$mc-color-gray-500</p>
            </li>
            <li className='example-mc-swatch'>
              <span className='example-mc-swatch__color example-mc-swatch__color--mc-gray-600'></span>
              <p className='mc-text-h5 mc-text--muted mc-text--monospace'>$mc-color-gray-600</p>
            </li>
          </ul>

          <ul className='example-mc-swatches'>
            <li className='example-mc-swatch'>
              <span className='example-mc-swatch__color example-mc-swatch__color--mc-color-error'></span>
              <p className='mc-text-h5 mc-text--muted mc-text--monospace'>$mc-color-error</p>
            </li>
            <li className='example-mc-swatch'>
              <span className='example-mc-swatch__color example-mc-swatch__color--mc-color-warning'></span>
              <p className='mc-text-h5 mc-text--muted mc-text--monospace'>$mc-color-warning</p>
            </li>
          </ul>
        </div>

        <div className='align-items-center example--section'>
          <h1 className='mc-text-h1'>Breakpoints</h1>
          <ul className='mc-example-breakpoints'>
            <li className='mc-example-breakpoint'>
              <p className='mc-text--monospace'>
                <span className='mc-text--muted'>$grid-gutter-width:</span>
                <span className='mc-text--bold'>16px</span>
              </p>
            </li>
            <li className='mc-example-breakpoint'>
              <p className='mc-text--monospace'>
                <span className='mc-text--muted'>$grid-gutter-xl-width:</span>
                <span className='mc-text--bold'>32px</span>
              </p>
            </li>
            <li className='mc-example-breakpoint'>
              <p className='mc-text--monospace'>
                <span className='mc-text--muted'>$mc-bp-xs:</span>
                <span className='mc-text--bold'>0</span>
              </p>
            </li>
            <li className='mc-example-breakpoint'>
              <p className='mc-text--monospace'>
                <span className='mc-text--muted'>$mc-bp-sm:</span>
                <span className='mc-text--bold'>576px</span>
              </p>
            </li>
            <li className='mc-example-breakpoint'>
              <p className='mc-text--monospace'>
                <span className='mc-text--muted'>$mc-bp-md:</span>
                <span className='mc-text--bold'>768px</span>
              </p>
            </li>
            <li className='mc-example-breakpoint'>
              <p className='mc-text--monospace'>
                <span className='mc-text--muted'>$mc-bp-lg:</span>
                <span className='mc-text--bold'>992px</span>
              </p>
            </li>
            <li className='mc-example-breakpoint'>
              <p className='mc-text--monospace'>
                <span className='mc-text--muted'>$mc-bp-xl:</span>
                <span className='mc-text--bold'>1200px</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>,
  )

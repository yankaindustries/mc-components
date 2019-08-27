import React from 'react'
import { storiesOf } from '@storybook/react'
import withAddons from '../../utils/withAddons'

storiesOf('Foundation|Variables', module)
  .add('All', withAddons({
    path: 'foundation/variables/index.stories.js',
  })(() =>
    <div className='container'>
      <div className='example__heading'>
        <h2 className='mc-text-h1'>Variables</h2>
        <p className='mc-opacity--muted'>Colors, breakpoints, and mixins, oh my!</p>
      </div>

      <div className='example__section'>
        <div className='row'>
          <div className='col-md-6 col-lg-4'>
            <h2 className='mc-text-h4 mc-mb-4'>Base</h2>

            <div className='example-mc-swatch example-mc-swatch--mc-color-dark mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-dark</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>

            <div className='example-mc-swatch example-mc-swatch--mc-color-light mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-light</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>

            <div className='example-mc-swatch example-mc-swatch--mc-color-background mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-background</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>

            <div className='example-mc-swatch example-mc-swatch--mc-color-background-invert mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-background-invert</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>

            <div className='example-mc-swatch example-mc-swatch--mc-color-text mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-text</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>

            <div className='example-mc-swatch example-mc-swatch--mc-color-text-invert mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-text-invert</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>
          </div>

          <div className='col-md-6 col-lg-4'>
            <h2 className='mc-text-h4 mc-mb-4'>Grays</h2>

            <div className='example-mc-swatch example-mc-swatch--mc-color-gray-100 mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-gray-100</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>

            <div className='example-mc-swatch example-mc-swatch--mc-color-gray-200 mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-gray-200</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>

            <div className='example-mc-swatch example-mc-swatch--mc-color-gray-300 mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-gray-300</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>

            <div className='example-mc-swatch example-mc-swatch--mc-color-gray-400 mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-gray-400</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>

            <div className='example-mc-swatch example-mc-swatch--mc-color-gray-500 mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-gray-500</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>

            <div className='example-mc-swatch example-mc-swatch--mc-color-gray-600 mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-gray-600</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>

            <div className='example-mc-swatch example-mc-swatch--mc-color-gray-700 mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-gray-700</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>

            <div className='example-mc-swatch example-mc-swatch--mc-color-gray-800 mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-gray-800</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>
          </div>

          <div className='col-md-6 col-lg-4'>
            <h2 className='mc-text-h4 mc-mb-4'>Primary</h2>

            <div className='example-mc-swatch example-mc-swatch--mc-color-primary mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-primary</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>

            <div className='example-mc-swatch example-mc-swatch--mc-color-primary-hover mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-primary-hover</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>

            <div className='example-mc-swatch example-mc-swatch--mc-color-primary-active mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-primary-active</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>
          </div>

          <div className='col-md-6 col-lg-4'>
            <h2 className='mc-text-h4 mc-mb-4'>Secondary</h2>

            <div className='example-mc-swatch example-mc-swatch--mc-color-secondary mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-secondary</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>

            <div className='example-mc-swatch example-mc-swatch--mc-color-secondary-hover mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-secondary-hover</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>

            <div className='example-mc-swatch example-mc-swatch--mc-color-secondary-active mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-secondary-active</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>
          </div>

          <div className='col-md-6 col-lg-4'>
            <h2 className='mc-text-h4 mc-mb-4'>Tertiary</h2>

            <div className='example-mc-swatch example-mc-swatch--mc-color-tertiary mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-tertiary</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>

            <div className='example-mc-swatch example-mc-swatch--mc-color-tertiary-hover mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-tertiary-hover</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>
          </div>

          <div className='col-md-6 col-lg-4'>
            <h2 className='mc-text-h4 mc-mb-4'>States</h2>

            <div className='example-mc-swatch example-mc-swatch--mc-color-error mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-error</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>
            <div className='example-mc-swatch example-mc-swatch--mc-color-success mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-success</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>
            <div className='example-mc-swatch example-mc-swatch--mc-color-highlight mc-mb-4'>
              <span className='example-mc-swatch__color'></span>
              <div>
                <p className='mc-text-h6 mc-text--monospace'>$mc-color-highlight</p>
                <p className='example-mc-swatch__hex mc-text-h6 mc-opacity--muted mc-text--monospace'></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='example__section'>
        <h4 className='mc-text-h4 mc-mb-4'>Breakpoints</h4>

        <div className='row'>
          <div className='col-md-6 col-lg-4'>
            <table className='example__table'>
              <tbody>
                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-opacity--muted'>$grid-gutter-width</td>
                  <td className='mc-text--right mc-text--bold mc-gutter-value' />
                </tr>
                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-opacity--muted'>$grid-gutter-width-xl</td>
                  <td className='mc-text--right mc-text--bold mc-gutter-value--xl' />
                </tr>
                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-opacity--muted'>$mc-bp-xs</td>
                  <td className='mc-text--right mc-text--bold mc-bp-value--xs' />
                </tr>
                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-opacity--muted'>$mc-bp-sm</td>
                  <td className='mc-text--right mc-text--bold mc-bp-value--sm' />
                </tr>
                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-opacity--muted'>$mc-bp-md</td>
                  <td className='mc-text--right mc-text--bold mc-bp-value--md' />
                </tr>
                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-opacity--muted'>$mc-bp-lg</td>
                  <td className='mc-text--right mc-text--bold mc-bp-value--lg' />
                </tr>
                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-opacity--muted'>$mc-bp-xl</td>
                  <td className='mc-text--right mc-text--bold mc-bp-value--xl' />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>,
  ))

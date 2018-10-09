import React from 'react'
import { storiesOf } from '@storybook/react'

import CodeExample from '../../utils/CodeExample'
import Placeholder from '../../utils/Placeholder'
import './_styles.css'

storiesOf('foundation|Grid', module)
  .add('default', () => (
    <div className='container'>
      <div className='example--section'>
        <h2 className='mc-text-d1'>Grid System</h2>
        <p>A demo of the grid system in mc-components.</p>
      </div>

      <div className='example--section'>
        <h2 className='mc-text-h2'>Default Grid</h2>
        <CodeExample>
          <div className='row'>
            <div className='col-6'>
              <Placeholder className='example-grid-block'>.col-6</Placeholder>
            </div>
            <div className='col-6'>
              <Placeholder className='example-grid-block'>.col-6</Placeholder>
            </div>

            <div className='col-sm-12 col-md-4'>
              <Placeholder className='example-grid-block'>.col-sm-12.col-md-4</Placeholder>
            </div>
            <div className='col-sm-12 col-md-4'>
              <Placeholder className='example-grid-block'>.col-sm-12.col-md-4</Placeholder>
            </div>
            <div className='col-sm-12 col-md-4'>
              <Placeholder className='example-grid-block'>.col-sm-12.col-md-4</Placeholder>
            </div>

            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
          </div>
        </CodeExample>
      </div>

      <div className='example--section'>
        <h2 className='mc-text-h2'>Grid (no-gutters)</h2>
        <p className='mc-text--muted mc-text--monospace'>.row.no-gutters</p>
        <CodeExample>
          <div className='row no-gutters'>
            <div className='col-6'>
              <Placeholder className='example-grid-block'>.col-6</Placeholder>
            </div>
            <div className='col-6'>
              <Placeholder className='example-grid-block'>.col-6</Placeholder>
            </div>

            <div className='col-sm-12 col-md-4'>
              <Placeholder className='example-grid-block'>.col-sm-12.col-md-4</Placeholder>
            </div>
            <div className='col-sm-12 col-md-4'>
              <Placeholder className='example-grid-block'>.col-sm-12.col-md-4</Placeholder>
            </div>
            <div className='col-sm-12 col-md-4'>
              <Placeholder className='example-grid-block'>.col-sm-12.col-md-4</Placeholder>
            </div>

            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
          </div>
        </CodeExample>
      </div>

      <div className='example--section'>
        <h2 className='mc-text-h2'>Grid (no-gutters-vertical)</h2>
        <p className='mc-text--muted mc-text--monospace'>.row.no-gutters-vertical</p>
        <CodeExample>
          <div className='row no-gutters-vertical'>
            <div className='col-6'>
              <Placeholder className='example-grid-block'>.col-6</Placeholder>
            </div>
            <div className='col-6'>
              <Placeholder className='example-grid-block'>.col-6</Placeholder>
            </div>
          </div>

          <div className='row no-gutters-vertical'>
            <div className='col-sm-12 col-md-4'>
              <Placeholder className='example-grid-block'>.col-sm-12.col-md-4</Placeholder>
            </div>
            <div className='col-sm-12 col-md-4'>
              <Placeholder className='example-grid-block'>.col-sm-12.col-md-4</Placeholder>
            </div>
            <div className='col-sm-12 col-md-4'>
              <Placeholder className='example-grid-block'>.col-sm-12.col-md-4</Placeholder>
            </div>
          </div>

          <div className='row no-gutters-vertical'>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
            <div className='col-md'>
              <Placeholder className='example-grid-block'>.col-md</Placeholder>
            </div>
          </div>
        </CodeExample>
      </div>
    </div>
  ))

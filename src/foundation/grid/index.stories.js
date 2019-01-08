import React from 'react'
import { storiesOf } from '@storybook/react'

import CodeExample from '../../utils/CodeExample'
import Placeholder from '../../utils/Placeholder'
import './_styles.css'

storiesOf('foundation|Grid', module)
  .add('default', () => (
    <div className='container'>
      <div className='example__heading'>
        <h1 className='mc-text-h1'>Grid System</h1>
        <p className='mc-text--muted'>A demo of the grid system in mc-components.</p>
      </div>

      <div className='example__section'>
        <p className='mc-text--muted mc-text--monospace'>.row</p>

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

      <div className='uncontainer'>
        <div className='rounded-box'>
          <h2 className='mc-text-h2'>
            Pro tip!
          </h2>
          <p className=''>
            You can use the <span className='mc-text--monospace'>.uncontainer</span>
            class name to break any div out from the inside of a container div.
          </p>

          <p>
            The <span className='mc-text--monospace'>.uncontainer</span>
            class pulls your content out of the wrapping
            <span className='mc-text--monospace'>.container</span> class
            so your content lines up just as if it were inside a regular
            container!
          </p>
        </div>
      </div>

      <div className='example__section'>
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

      <div className='example__section'>
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

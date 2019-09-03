import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import PropExample from '../../utils/PropExample'
import Placeholder from '../../utils/Placeholder'


storiesOf('Foundation|Grid', module)
  .add('Summary', withAddons({
    path: 'foundation/grid/index.stories.js',
  })(() => (
    <div className='container'>
      <DocHeader
        title='Grid'
        description='A demo of the grid system in mc-components.'
      />

      <p>
        mc-components uses Bootstrap, a grid system based on a 12 column grid.
      </p>

      <p>Their full documentation on the grid is <a
          href='https://getbootstrap.com/docs/4.0/layout/grid'
          className='mc-text--link'
          target='_blank'
          rel='noopener noreferrer'
        >
          available here
        </a> but the basics are distilled below.
      </p>

      <h4 className='mc-text-h4 mc-mt-7'>
        Display
      </h4>

      <p>
        In addition to the basic grid, we also use a number of bootstrap
        utilities.  The display helpers can set a number of different states for
        DOM elements or combintations based on responsive breakpoints.
      </p>

      <ul className='mc-my-3'>
        <li>
          <span className='mc-code'>.d-none</span>
        </li>
        <li>
          <span className='mc-code'>.d-block</span>
        </li>
        <li>
          <span className='mc-code'>.d-flex</span>
        </li>
        <li>
          <span className='mc-code'>.d-inline-flex</span>
        </li>
      </ul>

      <p>
        You can also combine these classes with the responsive helpers to
        show or hide elements based on screen size:
      </p>
      <p>
        <span className='mc-code'>.d-none.d-sm-block</span>
      </p>

      <p className='mc-mt-3'>For more, please <a
        href='https://getbootstrap.com/docs/4.0/utilities/display'
        target='_blank'
        rel='noopener noreferrer'
        className='mc-text--link'
        >view the full documentation.</a>
      </p>

      <h4 className='mc-text-h4 mc-mt-6'>
        Flex
      </h4>

      <p>
        Flex helpers also exist to make layouts easier when the grid is not
        <i>flexible</i> (lol) enough.  You can use helpers like the following:
      </p>

      <ul className='mc-my-3'>
        <li>
          <span className='mc-code'>.justify-content-center</span>
        </li>
        <li>
          <span className='mc-code'>.justify-content-between</span>
        </li>
        <li>
          <span className='mc-code'>.align-items-center</span>
        </li>
        <li>
          <span className='mc-code'>.align-self-stretch</span>
        </li>
      </ul>

      <p className='mc-mb-8'>For more, please <a
        href='https://getbootstrap.com/docs/4.0/utilities/flex'
        target='_blank'
        rel='noopener noreferrer'
        className='mc-text--link'
        >view the full documentation.</a>
      </p>

      <PropExample name='.row / .col-$breakpoint-$size'>
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
      </PropExample>

      <PropExample name='.row.no-gutters'>
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
      </PropExample>

      <PropExample name='.row.no-gutters-vertical'>
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
      </PropExample>

      <PropExample name='.container / .container-fluid / .uncontainer'>
        <div className='uncontainer'>
          <div className='container mc-mb-4'>
            <h5 className='mc-text-h5'>Contained Content</h5>
            <p className='mc-opacity--muted'>
              Containers will keep the edge of your content lined up, as well
              as adding a barrier between the content and edge of screen.  The
              width maxes out at 1200px, and padding depends on screen size.
            </p>
          </div>

          <div className='container-fluid mc-mb-4'>
            <h5 className='mc-text-h5'>Fluidly Contained Content</h5>
            <p className='mc-opacity--muted'>
              Identical to a normal container, but the width does not max out.
            </p>
          </div>

          <h5 className='mc-text-h5'>Uncontained Content</h5>
          <p className='mc-opacity--muted'>
            You can use uncontainers to break any div out from
            the inside of a container.
          </p>
          <p className='mc-opacity--muted'>
            The class pulls your content out of the wrapping container so
            your content lines up just as if it were inside a regular container!
          </p>
        </div>
      </PropExample>
    </div>
  )))

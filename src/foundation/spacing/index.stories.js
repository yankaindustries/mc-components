import React from 'react'
import { storiesOf } from '@storybook/react'

import Highlight from 'react-highlight'

import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'

storiesOf('Foundation|Spacing', module)
  .add('default', () => (
    <div className='container'>
      <DocHeader
        title='Spacing helpers'
        description='Margin and padding helpers in mc-components.'
      />

      <DocSection title='Theory'>
        <p className='mc-text--hinted mc-mb-2'>
          mc-components uses a 4px decaying step scale to space
          and size components.  The scale is a a mix of
          linear and exponential steps, which helps acheive a
          visual progression that is appealing and programmatic.
        </p>

        <p className='mc-text--hinted mc-mb-5'>
          Due to the decay, the computed values of each step are different
          for the three main breakpoints (LG, MD, SM). The decay does not
          apply to the smaller steps (4 and below).
        </p>
      </DocSection>


      <DocSection title='Notation'>
        <p className='mc-text--hinted mc-mb-2'>
          Values shown in curly brackets are optional. The
          default is
          <span className='mc-text--monospace'>mc-m-*</span>, where * is
          a number on the mc-components scale,
          applied to all sides.
        </p>

        <Highlight className='language-jsx mc-mb-6'>
          {'<Element className=\'mc-{property}{sides}-{scale}\' />'}
        </Highlight>

        <h5 className='mc-text-h5'>
          Property
        </h5>
        <table className='example__table mc-mt-3 mc-mb-6'>
          <tbody>
            <tr>
              <th>m</th>
              <td className='mc-text--muted'>
                Spaced using margins
              </td>
            </tr>

            <tr>
              <th>p</th>
              <td className='mc-text--muted'>
                Spaced using padding
              </td>
            </tr>
          </tbody>
        </table>

        <h5 className='mc-text-h5'>
          Sides
        </h5>
        <table className='example__table mc-mt-3 mc-mb-6'>
          <tbody>
            <tr>
              <th>x</th>
              <td className='mc-text--muted'>
                Spaced on x axis (left and right)
              </td>
            </tr>

            <tr>
              <th>y</th>
              <td className='mc-text--muted'>
                Spaced on y-axis (top and bottom)
              </td>
            </tr>

            <tr>
              <th>t</th>
              <td className='mc-text--muted'>
                Spaced only on top (margin-top)
              </td>
            </tr>

            <tr>
              <th>r</th>
              <td className='mc-text--muted'>
                Spaced only on right (margin-right)
              </td>
            </tr>

            <tr>
              <th>b</th>
              <td className='mc-text--muted'>
                Spaced only on bottom (margin-bottom)
              </td>
            </tr>

            <tr>
              <th>l</th>
              <td className='mc-text--muted'>
                Spaced only on left (margin-left)
              </td>
            </tr>
          </tbody>
        </table>

        <h5 className='mc-text-h5'>
          Scale
        </h5>
        <p>Any value on the mc-components scale shown
          under &ldquo;Introduction &gt; Scale&rdquo; are valid.</p>
      </DocSection>

      <DocSection title='Examples'>
        <p className='mc-text--hinted mc-mb-5'>
          All examples shown use the margin option and
          a use case of scale(4) for consistency.
        </p>

        <p className='mc-text--hinted mc-mb-2'>
          For margins with scale(4) on all sides:
        </p>

        <Highlight className='language-jsx mc-mb-8'>
          {'<Element className=\'mc-m-4\' />'}
        </Highlight>

        <p className='mc-text--hinted mc-mb-2'>
          Margins with scale(4) on x-axis only:
        </p>

        <Highlight className='language-jsx mc-mb-8'>
          {'<Element className=\'mc-mx-4\' />'}
        </Highlight>

        <p className='mc-text--hinted mc-mb-2'>
          Margins with scale(4) on y-axis only:
        </p>

        <Highlight className='language-jsx mc-mb-8'>
          {'<Element className=\'mc-my-4\' />'}
        </Highlight>

        <p className='mc-text--hinted mc-mb-2'>
          Margins with scale(4) on top only:
        </p>

        <Highlight className='language-jsx mc-mb-8'>
          {'<Element className=\'mc-mt-4\' />'}
        </Highlight>
      </DocSection>
    </div>
  ))

import React from 'react'
import { storiesOf } from '@storybook/react'
import Highlight from 'react-highlight'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'

storiesOf('Foundation|Spacing', module)
  .add('Summary', withAddons({
    path: 'foundation/spacing/index.stories.js',
  })(() => (
    <div className='container'>
      <DocHeader
        title='Spacing'
        description='Margin and padding helpers in mc-components.'
      />

      <DocSection title='Theory'>
        <p className='mc-opacity--hinted mc-mb-2'>
          mc-components uses a 4px decaying step scale to space
          and size components.  The scale is a a mix of
          linear and exponential steps, which helps acheive a
          visual progression that is appealing and programmatic.
        </p>

        <p className='mc-opacity--hinted mc-mb-2'>
          The scale implementation logic and rules can be veiwed under
          the &ldquo;Introduction &gt; Scale&rdquo; section.
        </p>

        <p className='mc-opacity--hinted'>
          Due to the decay, the computed values of each step are different
          for the three main breakpoints (LG, MD, SM). The decay does not
          apply to the smaller steps (4 and below).
        </p>
      </DocSection>


      <DocSection title='Notation'>
        <p className='mc-opacity--hinted mc-mb-2'>
          The helper margin and padding class is structured
          using this format:
        </p>

        <Highlight className='language-jsx mc-mb-6'>
          {'<Element className=\'mc-{property}{side}-{scale}\' />'}
        </Highlight>

        <h6 className='mc-text-h6'>
          Properties
        </h6>
        <table className='example__table example__table--fixed mc-mt-3 mc-mb-6'>
          <tbody>
            <tr>
              <th className='example__table--shrink'>
                <span className='mc-code'>m</span>
              </th>
              <td className='mc-opacity--muted'>
                Spaced using margins
              </td>
            </tr>

            <tr>
              <th className='example__table--shrink'>
                <span className='mc-code'>p</span>
              </th>
              <td className='mc-opacity--muted'>
                Spaced using padding
              </td>
            </tr>
          </tbody>
        </table>

        <h6 className='mc-text-h6'>
          Sides
        </h6>
        <table className='example__table example__table--fixed mc-mt-3 mc-mb-6'>
          <tbody>
            <tr>
              <th className='example__table--shrink'>
                <span className='mc-code'>x</span>
              </th>
              <td className='mc-opacity--muted'>
                Spaced on x axis (left and right)
              </td>
            </tr>

            <tr>
              <th className='example__table--shrink'>
                <span className='mc-code'>y</span>
              </th>
              <td className='mc-opacity--muted'>
                Spaced on y-axis (top and bottom)
              </td>
            </tr>

            <tr>
              <th className='example__table--shrink'>
                <span className='mc-code'>t</span>
              </th>
              <td className='mc-opacity--muted'>
                Spaced only on top (margin-top)
              </td>
            </tr>

            <tr>
              <th className='example__table--shrink'>
                <span className='mc-code'>r</span>
              </th>
              <td className='mc-opacity--muted'>
                Spaced only on right (margin-right)
              </td>
            </tr>

            <tr>
              <th>
                <span className='mc-code'>b</span>
              </th>
              <td className='mc-opacity--muted'>
                Spaced only on bottom (margin-bottom)
              </td>
            </tr>

            <tr>
              <th>
                <span className='mc-code'>l</span>
              </th>
              <td className='mc-opacity--muted'>
                Spaced only on left (margin-left)
              </td>
            </tr>
          </tbody>
        </table>

        <h6 className='mc-text-h6'>
          Scale
        </h6>
        <table className='example__table example__table--fixed mc-mt-3 mc-mb-6'>
          <tbody>
            <tr>
              <th className='example__table--shrink'>
                <span className='mc-code'>#</span>
              </th>

              <td className='mc-opacity--muted'>
                Any one of the values on the mc-components scale shown
                under &ldquo;Introduction &gt; Scale&rdquo; is valid.
              </td>
            </tr>
          </tbody>
        </table>
      </DocSection>

      <DocSection title='Examples'>
        <p className='mc-opacity--hinted mc-mb-5'>
          All examples shown use the margin option and
          a use case of scale(4) for consistency.
        </p>

        <p className='mc-opacity--hinted mc-mb-2'>
          For margins with scale(4) on all sides:
        </p>

        <Highlight className='language-jsx mc-mb-8'>
          {'<Element className=\'mc-m-4\' />'}
        </Highlight>

        <p className='mc-opacity--hinted mc-mb-2'>
          Margins with scale(4) on x-axis only:
        </p>

        <Highlight className='language-jsx mc-mb-8'>
          {'<Element className=\'mc-mx-4\' />'}
        </Highlight>

        <p className='mc-opacity--hinted mc-mb-2'>
          Margins with scale(4) on y-axis only:
        </p>

        <Highlight className='language-jsx mc-mb-8'>
          {'<Element className=\'mc-my-4\' />'}
        </Highlight>

        <p className='mc-opacity--hinted mc-mb-2'>
          Margins with scale(4) on top only:
        </p>

        <Highlight className='language-jsx mc-mb-8'>
          {'<Element className=\'mc-mt-4\' />'}
        </Highlight>
      </DocSection>
    </div>
  )))

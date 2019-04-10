import React from 'react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'


const Display = () =>
  <div className='container'>
    <DocHeader
      title='Utilities - Display'
      description='The display utilities can show / hide content at various breakpoints'
    />

    <p>For additional documentation, please reference the <a href='https://getbootstrap.com/docs/4.3/utilities/display' className='mc-text--link'>Bootstrap documentation</a>.</p>

    <DocSection title='Hiding Elements'>
      <table className='example__table'>
        <thead>
          <tr>
            <th className='mc-text-h5'>
              Screen Size
            </th>
            <th className='mc-text-h5 mc-text--right'>
              Class
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hidden on all</td>
            <td className='mc-text--right mc-text--monospace'>
              .d-none
            </td>
          </tr>
          <tr>
            <td>Hidden only on xs</td>
            <td className='mc-text--right mc-text--monospace'>
              .d-none.d-sm-block
            </td>
          </tr>
          <tr>
            <td>Hidden only on sm</td>
            <td className='mc-text--right mc-text--monospace'>
              .d-sm-none.d-md-block
            </td>
          </tr>
          <tr>
            <td>Hidden only on md</td>
            <td className='mc-text--right mc-text--monospace'>
              .d-md-none.d-lg-block
            </td>
          </tr>
          <tr>
            <td>Hidden only on lg</td>
            <td className='mc-text--right mc-text--monospace'>
              .d-lg-none.d-xl-block
            </td>
          </tr>
          <tr>
            <td>Hidden only on xl</td>
            <td className='mc-text--right mc-text--monospace'>
              .d-xl-none
            </td>
          </tr>
        </tbody>
      </table>
    </DocSection>

    <DocSection title='Showing Elements'>
      <table className='example__table'>
        <thead>
          <tr>
            <th className='mc-text-h5'>
              Screen Size
            </th>
            <th className='mc-text-h5 mc-text--right'>
              Class
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Visible on all</td>
            <td className='mc-text--right mc-text--monospace'>
              .d-block
            </td>
          </tr>
          <tr>
            <td>Visible only on xs</td>
            <td className='mc-text--right mc-text--monospace'>
              .d-block.d-sm-none
            </td>
          </tr>
          <tr>
            <td>Visible only on sm</td>
            <td className='mc-text--right mc-text--monospace'>
              .d-none.d-sm-block.d-md-none
            </td>
          </tr>
          <tr>
            <td>Visible only on md</td>
            <td className='mc-text--right mc-text--monospace'>
              .d-none.d-md-block.d-lg-none
            </td>
          </tr>
          <tr>
            <td>Visible only on lg</td>
            <td className='mc-text--right mc-text--monospace'>
              .d-none.d-lg-block.d-xl-none
            </td>
          </tr>
          <tr>
            <td>Visible only on xl</td>
            <td className='mc-text--right mc-text--monospace'>
              .d-none.d-xl-block
            </td>
          </tr>
        </tbody>
      </table>
    </DocSection>
  </div>


export default withAddons({
  path: 'foundation/utilities/display.stories.js',
})(() => <Display />)

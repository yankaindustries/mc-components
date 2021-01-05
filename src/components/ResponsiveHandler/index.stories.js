import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'

import ResponsiveHandler from './index'
import Tile from '../Tile'
import TileImage from '../TileImage'

import shondaRhimesThumbnail from '../../utils/shonda-rhimes.png'


storiesOf('Utilities|ResponsiveHandler', module)
  .add('default', withAddons({
    path: 'components/ResponsiveHandler/index.stories.js',
    component: ResponsiveHandler,
  })(() => (
    <div className='container'>
      <div className='example__heading'>
        <h1 className='mc-text-h1'>ResponsiveHandler</h1>
        <p className='mc-opacity--muted'>
          Get access to screen size as a prop
        </p>
      </div>

      <DocSection title='Demo'>
        <PropExample>
          <ResponsiveHandler>
            {({ responsive }) =>
              <div className='row row--vertcal-space'>
                <div className='col-12'>
                  <Tile aspectRatio={responsive('1x1', '21x9', '21x9', '21x9')}>
                    <TileImage imageUrl={shondaRhimesThumbnail} />
                  </Tile>
                </div>

                <div className='col-sm-4'>
                  <Tile aspectRatio={responsive('1x1', '16x9', '16x9', '16x9')}>
                    <TileImage imageUrl={shondaRhimesThumbnail} />
                  </Tile>
                </div>

                <div className='col-sm-4'>
                  <Tile aspectRatio={responsive('1x1', '16x9', '16x9', '16x9')}>
                    <TileImage imageUrl={shondaRhimesThumbnail} />
                  </Tile>
                </div>

                <div className='col-sm-4'>
                  <Tile aspectRatio={responsive('1x1', '16x9', '16x9', '16x9')}>
                    <TileImage imageUrl={shondaRhimesThumbnail} />
                  </Tile>
                </div>
              </div>
            }
          </ResponsiveHandler>
        </PropExample>
      </DocSection>

      <div className='row'>
        <div className='col-md-6 col-lg-4'>
          <DocSection title='Breakpoints'>
            <table className='example__table'>
              <tbody>
                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-text--bold'>XS</td>
                  <td className='mc-text--right mc-opacity--muted mc-bp-value--xs' />
                </tr>

                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-text--bold'>SM</td>
                  <td className='mc-text--right mc-opacity--muted mc-bp-value--sm' />
                </tr>

                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-text--bold'>MD</td>
                  <td className='mc-text--right mc-opacity--muted mc-bp-value--md' />
                </tr>

                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-text--bold'>LG</td>
                  <td className='mc-text--right mc-opacity--muted mc-bp-value--lg' />
                </tr>

                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-text--bold'>XL</td>
                  <td className='mc-text--right mc-opacity--muted mc-bp-value--xl' />
                </tr>
              </tbody>
            </table>
          </DocSection>
        </div>

        <div className='col-lg-8'>
          <DocSection title='Sizes'>
            <table className='example__table'>
              <tbody>
                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-text--bold'>isXS</td>
                  <td className='mc-text--right mc-opacity--muted'>width {'<'} BP.SM</td>
                </tr>

                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-text--bold'>gteXS</td>
                  <td className='mc-text--right mc-opacity--muted'>width {'>='} BP.XS</td>
                </tr>

                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-text--bold'>isSM</td>
                  <td className='mc-text--right mc-opacity--muted'>width {'>='} BP.SM && width {'<'} BP.MD</td>
                </tr>

                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-text--bold'>ltSM</td>
                  <td className='mc-text--right mc-opacity--muted'>width {'<'} BP.SM</td>
                </tr>

                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-text--bold'>gteSM</td>
                  <td className='mc-text--right mc-opacity--muted'>width {'>='} BP.SM</td>
                </tr>

                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-text--bold'>isMD</td>
                  <td className='mc-text--right mc-opacity--muted'>width {'>='} BP.MD && width {'<'} BP.LG</td>
                </tr>

                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-text--bold'>ltMD</td>
                  <td className='mc-text--right mc-opacity--muted'>width {'<'} BP.MD</td>
                </tr>

                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-text--bold'>gteMD</td>
                  <td className='mc-text--right mc-opacity--muted'>width {'>='} BP.MD</td>
                </tr>

                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-text--bold'>isLG</td>
                  <td className='mc-text--right mc-opacity--muted'>width {'>='} BP.LG && width {'<'} BP.XL</td>
                </tr>

                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-text--bold'>ltLG</td>
                  <td className='mc-text--right mc-opacity--muted'>width {'<'} BP.LG</td>
                </tr>

                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-text--bold'>gteLG</td>
                  <td className='mc-text--right mc-opacity--muted'>width {'>='} BP.LG</td>
                </tr>

                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-text--bold'>isXL</td>
                  <td className='mc-text--right mc-opacity--muted'>width {'>='} BP.XL</td>
                </tr>

                <tr className='mc-example-breakpoint mc-text--monospace'>
                  <td className='mc-text--bold'>ltXL</td>
                  <td className='mc-text--right mc-opacity--muted'>width {'<'} BP.XL</td>
                </tr>
              </tbody>
            </table>
          </DocSection>
        </div>
      </div>
    </div>
  )))

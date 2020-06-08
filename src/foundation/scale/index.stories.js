import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { times } from 'lodash'
import Highlight from 'react-highlight'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'

import Button from '../../components/Button'


const UNIT_PX = 'px'
const UNIT_EM = 'em'
const UNIT_REM = 'rem'


const renderSteps = render =>
  times(12).map(i => render(i + 1))


class Scale extends PureComponent {
  state = {
    unit: UNIT_PX,
  }

  render () {
    const {
      unit,
    } = this.state

    return (
      <div className='container'>
        <DocHeader
          title='Scale'
          description='Programmatically determined values for size and space.'
        />

        <DocSection title='Theory'>
          <p className='mc-opacity--hinted mc-mb-2'>
            mc-components uses a 4px decaying step scale to provide a
            collection of values used to space and size components.
            These step values are the result of a somewhat interesting
            function. The scale is not linear, nor exponential. Rather,
            a combonation of both in order to acheive a visual progression
            that is appealing as well as programmatic.
          </p>

          <p className='mc-opacity--hinted mc-mb-5'>
            Due to the decay, the computed values of each step are different
            for the three main breakpoints (LG, MD, SM). The decay does not
            apply to the smaller steps (4 and below).
          </p>

          <div className='row justify-content-center'>
            <div className='col-12'>
              <table className='example__table mc-text--center'>
                <thead>
                  <tr>
                    <th></th>
                    {renderSteps(i =>
                      <td>
                        <div className={`
                          example-mc-step__box
                          example-mc-step__box-${i}
                        `} />
                      </td>,
                    )}
                  </tr>

                  <tr className='mc-opacity--muted'>
                    <th>Step</th>

                    {renderSteps(i =>
                      <th>{i}</th>,
                    )}
                  </tr>

                  <tr className='mc-opacity--silenced'>
                    <th>Func</th>
                    <th>N</th>
                    <th>2N</th>
                    <th>3N</th>
                    <th>4N</th>
                    <th>5N</th>
                    <th>6N</th>
                    <th>7N</th>
                    <th>2N x N</th>
                    <th>3N x N</th>
                    <th>4N x N</th>
                    <th>5N x N</th>
                    <th>6N x N</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className='mc-text-large'>
                    <th>LG</th>

                    {renderSteps(i =>
                      <td>
                        <span className={`
                          example-mc-step__label
                          example-mc-step__label-${i}-lg-${unit}
                        `}/>
                        {unit}
                      </td>,
                    )}
                  </tr>

                  <tr className='mc-text-x-small mc-opacity--silenced'>
                    <th>MD</th>

                    {renderSteps(i =>
                      <td>
                        <span className={`
                          example-mc-step__label
                          example-mc-step__label-${i}-md-${unit}
                        `}/>
                        {unit}
                      </td>,
                    )}
                  </tr>

                  <tr className='mc-text-x-small mc-opacity--silenced'>
                    <th>SM</th>

                    {renderSteps(i =>
                      <td>
                        <span className={`
                          example-mc-step__label
                          example-mc-step__label-${i}-sm-${unit}
                        `}/>
                        {unit}
                      </td>,
                    )}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='col-auto'>
              <Button
                onClick={() => this.setState({ unit: UNIT_PX })}
                secondary={unit !== UNIT_PX}
              >
                px
              </Button>
            </div>

            <div className='col-auto'>
              <Button
                onClick={() => this.setState({ unit: UNIT_EM })}
                secondary={unit !== UNIT_EM}
              >
                em
              </Button>
            </div>

            <div className='col-auto'>
              <Button
                onClick={() => this.setState({ unit: UNIT_REM })}
                secondary={unit !== UNIT_REM}
              >
                rem
              </Button>
            </div>
          </div>
        </DocSection>

        <DocSection title='Usage'>
          <p className='mc-opacity--hinted mc-mb-2'>
            There are many ways this scale is used, and that will probably
            continue to grow.  From type sizing to content spacing, the values
            genearted by this scale are littered throughout the library.
            Anytime you think you might need a value that could scale
            responsively relative to the rest of the design system, consider
            using the scale.
          </p>

          <p className='mc-opacity--hinted mc-mb-8'>
            There is a SCSS function and mixin provided by mc-components to
            make use of the scale efficiently. Most likely you&apos;ll only
            need to employ the mixin, as it was intended to do most of the
            heavy lifting.
          </p>

          <Highlight className='language-scss mc-mb-8'>
{`.some-container {
  padding: var(--mc-scale-5);
}`}
          </Highlight>

          <p className='mc-opacity--hinted mc-mb-2'>
            This will apply a padding with an initial value of 20px, scaling
            down to 19px on MD (tablet) screens, and 18px on SM (phone).
          </p>
        </DocSection>
      </div>
    )
  }
}


storiesOf('Foundation|Scale', module)
  .add('Summary', withAddons({
    path: 'foundation/scale/index.stories.js',
  })(() => <Scale />))

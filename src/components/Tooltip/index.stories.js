import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import CodeExample from '../../utils/CodeExample'
import InvertedMirror from '../../utils/InvertedMirror'

import Tooltip, { PLACEMENTS } from '../Tooltip'
import TooltipToggle from '../TooltipToggle'
import TooltipContent from '../TooltipContent'
import TooltipContentControlled from '../TooltipContentControlled'
import Button from '../Button'
import Select from '../Select'


const placementOptions = PLACEMENTS.map(placement => ({
  label: placement,
  value: placement,
}))


class TooltipStory extends PureComponent {
  state = {
    placement: undefined,
  }

  setPlacement = placement =>
    this.setState({ placement })

  render () {
    const {
      placement,
    } = this.state

    return (
      <div>
        <div className='container'>
          <DocHeader
            title='Tooltip'
            description='Nudge the user in the right direction with a hint.'
          />

          <DocSection title='Demo'>
            <div className='row'>
              <div className='col-sm-4 col-md-3'>
                <Select
                  placeholder='Select placement...'
                  options={placementOptions}
                  value={placement}
                  onChange={this.setPlacement}
                />
              </div>
            </div>

            <br />
            <br />

            <InvertedMirror>
              <CodeExample>
                <br />
                <br />
                <br />
                <br />
                <div className='row justify-content-center'>
                  <div className='col-auto'>
                    <Tooltip placement={placement}>
                      <TooltipToggle>
                        <Button>hi</Button>
                      </TooltipToggle>

                      <TooltipContentControlled
                        className='mc-text-small'
                        show
                      >
                        <h6 className='mc-text-h6'>
                          {placement}
                        </h6>
                        <p>
                          Lorem ipsum dolor sit amet,
                          <br />
                          consectetur adipiscing elit.
                        </p>
                      </TooltipContentControlled>
                    </Tooltip>
                  </div>
                </div>
                <br />
                <br />
                <br />
                <br />
              </CodeExample>
            </InvertedMirror>
          </DocSection>
        </div>
      </div>
    )
  }
}


storiesOf('Components|Tooltip', module)
  .add('Summary', withAddons({
    path: 'components/Tooltip/index.stories.js',
    component: Tooltip,
  })(() => <TooltipStory />))

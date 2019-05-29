import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import Highlight from 'react-highlight'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import CodeExample from '../../utils/CodeExample'
import InvertedMirror from '../../utils/InvertedMirror'
import PropExample from '../../utils/PropExample'

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
    placement: 'top',
    show: false,
  }

  setPlacement = placement =>
    this.setState({ placement })

  toggleShow = () =>
    this.setState(prevState => ({ show: !prevState.show }))

  render () {
    const {
      placement,
      show,
    } = this.state

    return (
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

            <div className='col-sm-3'>
              <Button
                kind='secondary'
                onClick={this.toggleShow}
              >
                {show ? 'Hide' : 'Show'}
              </Button>
            </div>
          </div>

          <InvertedMirror>
            <CodeExample>
              <br />
              <br />
              <br />
              <br />
              <div className='row justify-content-center mc-text-center'>
                <div className='col-auto'>
                  <Tooltip placement={placement}>
                    <TooltipToggle>
                      <Button>Automatic</Button>
                    </TooltipToggle>

                    <TooltipContent
                      className='mc-text-small'
                    >
                      <h6 className='mc-text-h6'>
                        {placement}
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet,
                        <br />
                        consectetur adipiscing elit.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>

                <div className='col-auto'>
                  <Tooltip placement={placement}>
                    <TooltipToggle>
                      <Button>Controlled</Button>
                    </TooltipToggle>

                    <TooltipContentControlled
                      className='mc-text-small'
                      show={show}
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

        <DocSection title='Usage'>
          <div className='row'>
            <div className='col-lg-7'>
              <p className='mc-mb-4'>
                The Tooltip is actually comprised of four different components.
              </p>

              <Highlight className='language-html mc-mb-4'>
                {`
// Wrapper, creates context for showing/hiding,
// positioning, and refs
<Tooltip />

// Wraps toggle element/component, passing ref to Tooltip
<TooltipToggle />

// Wraps tooltip content, automatically controlling
// visibility and passing ref to Tooltip
<TooltipContent />

// Wraps tooltip content, manually controls visibility
// and passing ref to Tooltip
<TooltipContentControlled />
                `.trim()}
              </Highlight>

              <p className='mc-mb-4'>
                You will only ever need to use three at a time, as one of them
                is an automatic implementation (showing the tooltip when
                hovering over the toggle) and the other is a controlled
                implementation (showing when the a prop is passed).
              </p>

              <p>
                We estimate that a majority of cases will just need the
                automatic implementation, as it is the simplest to set up.  But
                the moment you need anything more than just showing a tooltip
                on hover (e.g. show the tooltip on initial page render) you will
                need to use the controlled implementation.
              </p>
            </div>

            <div className='col-lg-5'>
              <h6 className='mc-text-h6 mc-mb-4'>
                Automatic
              </h6>

              <Highlight className='language-html mc-mb-4'>
                {`
<Tooltip>
  <TooltipToggle>
    <Button>Hover Over Me</Button>
  </ToolTipToggle>

  <TooltipContent>
    Hello, I am a tooltip!
  </TooltipContent>
</Tooltip>
                `.trim()}
              </Highlight>

              <h6 className='mc-text-h6 mc-mb-4'>
                Controlled
              </h6>

              <Highlight className='language-html mc-mb-4'>
                {`
<Tooltip>
  <TooltipToggle>
    <Button>I am just the positioning reference</Button>
  </ToolTipToggle>

  <TooltipContentControlled show={true}>
    Hello, I am a tooltip!
  </TooltipContentControlled>
</Tooltip>
                `.trim()}
              </Highlight>
            </div>
          </div>
        </DocSection>

        <DocSection title='Props'>
          <PropExample
            name='placement'
            type='string'
            description={`
              bottom,
              bottom-end,
              bottom-start,
              left,
              left-end,
              left-start,
              right,
              right-end,
              right-start,
              top,
              top-end,
              top-start,
            `}
          >
            <div className='row'>
              <div className='col-auto'>
                <Tooltip placement='bottom-start'>
                  <TooltipToggle>
                    <Button>bottom-start</Button>
                  </TooltipToggle>

                  <TooltipContent
                    className='mc-text-small'
                  >
                    <h6 className='mc-text-h6'>
                      Lorem ipsum
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet,
                      <br />
                      consectetur adipiscing elit.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>

              <div className='col-auto'>
                <Tooltip placement='right'>
                  <TooltipToggle>
                    <Button>right</Button>
                  </TooltipToggle>

                  <TooltipContent
                    className='mc-text-small'
                  >
                    <h6 className='mc-text-h6'>
                      Lorem ipsum
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet,
                      <br />
                      consectetur adipiscing elit.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>

              <div className='col-auto'>
                <Tooltip placement='top-end'>
                  <TooltipToggle>
                    <Button>top-end</Button>
                  </TooltipToggle>

                  <TooltipContent
                    className='mc-text-small'
                  >
                    <h6 className='mc-text-h6'>
                      Lorem ipsum
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </PropExample>
        </DocSection>
      </div>
    )
  }
}


storiesOf('Components|Tooltip', module)
  .add('Summary', withAddons({
    path: 'components/Tooltip/index.stories.js',
    component: Tooltip,
  })(() => <TooltipStory />))

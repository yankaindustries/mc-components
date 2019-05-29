import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import Highlight from 'react-highlight'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import CodeExample from '../../utils/CodeExample'
import InvertedMirror from '../../utils/InvertedMirror'

import Dropdown from '../Dropdown'
import DropdownToggle from '../DropdownToggle'
import DropdownContent from '../DropdownContent'
import DropdownContentControlled from '../DropdownContentControlled'
import DropdownHeader from '../DropdownHeader'
import DropdownBody from '../DropdownBody'
import DropdownItem from '../DropdownItem'
import DropdownFooter from '../DropdownFooter'

import Button from '../Button'
import Icon from '../Icons'

import shondaRhimesThumbnail from '../../utils/shonda-rhimes.png'


const CATEGORIES = [
  'Writing',
  'Music & Entertainment',
  'Sports & Games',
  'Design, Photography & Fashion',
  'Politics & Society',
  'Science & Technology',
  'Telekenesis',
]


class DropdownStory extends PureComponent {
  state = {
    show: false,
  }

  toggleShow = () =>
    this.setState(prevState => ({ show: !prevState.show }))

  render () {
    const { show } = this.state

    return (
      <div className='container'>
        <DocHeader
          title='Dropdown'
          description='Toggle, fullscreen, and mobile supported!'
        />

        <DocSection title='Demo'>
          <div className='row'>
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
              <div className='row justify-content-center'>
                <div className='col-auto'>
                  <Dropdown placement='bottom-start'>
                    <DropdownToggle>
                      <Button>Basic</Button>
                    </DropdownToggle>

                    <DropdownContent>
                      {CATEGORIES.map((category, key) =>
                        <DropdownItem
                          key={key}
                          className='mc-py-3 mc-px-5 mc-text-small'
                        >
                          {category}
                        </DropdownItem>,
                      )}
                    </DropdownContent>
                  </Dropdown>
                </div>

                <div className='col-auto'>
                  <Dropdown placement='bottom'>
                    <DropdownToggle>
                      <Button>Scroll</Button>
                    </DropdownToggle>

                    <DropdownContent>
                      {CATEGORIES.concat(CATEGORIES).map((category, key) =>
                        <DropdownItem key={key}
                          className='mc-py-3 mc-px-5 mc-text-small'
                          onClick={console.log}
                        >
                          <div className='row align-items-center'>
                            <div className='col-4'>
                              <img
                                src={shondaRhimesThumbnail}
                                className='mc-img-responsive'
                              />
                            </div>

                            <div className='col-8'>
                              <h5 className='mc-text-h6'>
                                {category}
                              </h5>
                              <p className={`
                                mc-text-sm
                                mc-text--muted
                                mc-text--3-lines
                              `}>
                                Pellentesque auctor nibh eu justo condimentum,
                                in iaculis ligula ultricies. Aenean
                                enim metus, feugiat a risus non, vulputate
                                venenatis justo. Nullam malesuada ut
                                tortor porttitor congue.
                              </p>
                            </div>
                          </div>
                        </DropdownItem>,
                      )}
                    </DropdownContent>
                  </Dropdown>
                </div>

                <div className='col-auto'>
                  <Dropdown placement='bottom-end'>
                    <DropdownToggle>
                      <Button>Actions</Button>
                    </DropdownToggle>

                    <DropdownContent>
                      <DropdownHeader className={`
                          mc-p-5
                          mc-text-h8
                          mc-text--uppercase
                          mc-text--muted
                          mc-text-center
                      `}>
                        Categories
                      </DropdownHeader>

                      <DropdownBody>
                        {CATEGORIES.concat(CATEGORIES).map((category, key) =>
                          <DropdownItem key={key}
                            className='mc-py-3 mc-px-5 mc-text-small'
                            onClick={console.log}
                          >
                            <div className={`
                              row
                              align-items-center
                              justify-content-between
                              flex-nowrap
                            `}>
                              <div className='col-9'>
                                {category}
                              </div>

                              <div className='col-auto'>
                                <Icon kind='chevron-right' />
                              </div>
                            </div>
                          </DropdownItem>,
                        )}
                      </DropdownBody>

                      <DropdownFooter className='mc-text--center'>
                        <Button kind='link'>
                          View All
                        </Button>
                      </DropdownFooter>
                    </DropdownContent>
                  </Dropdown>
                </div>

                <div className='col-auto'>
                  <Dropdown placement='bottom-end'>
                    <DropdownToggle>
                      <Button>Controlled</Button>
                    </DropdownToggle>

                    <DropdownContentControlled show={show}>
                      {CATEGORIES.map((category, key) =>
                        <DropdownItem
                          key={key}
                          className='mc-py-3 mc-px-5 mc-text-small'
                        >
                          {category}
                        </DropdownItem>,
                      )}
                    </DropdownContentControlled>
                  </Dropdown>
                </div>
              </div>
            </CodeExample>
          </InvertedMirror>
        </DocSection>

        <DocSection title='Usage'>
          <div className='row'>
            <div className='col-lg-7'>
              <p className='mc-mb-4'>
                Dropdown is made up of a collection of components that all work
                together.
              </p>

              <Highlight className='language-html mc-mb-4'>
                {`
// Wrapper, creates context for showing/hiding,
// positioning, and refs
<Dropdown />

// Wraps toggle element/component, passing ref to Tooltip
<DropdownToggle />

// Wraps tooltip content, automatically controlling
// visibility and passing ref to Dropdown
<DropdownContent />

// Wraps tooltip content, manually controls visibility
// and passing ref to Dropdown
<DropdownContentControlled />

// Wraps actionable items within the DropdownContent
// (and sometimes DropdownBody)
<DropdownItem />

// Wraps content within the DropdownContent that needs
// to stay fixed to the head or foot of the dropdown
<DropdownHeader />
<DropdownFooter />

// Wraps scrollable content between DropdownHeader
// and DropdownFooter within DropdownContent
<DropdownBody />
                `.trim()}
              </Highlight>

              <p className='mc-mb-4'>
                Similar to the Tooltip, you will not need to use the automatic
                and controlled components at the same time.
                DropdownContent is an automatic implementation (showing the
                tooltip when clickingthe toggle) and
                DropdownContentControlled is a controlled implementation
                (showing when the a prop is passed).
              </p>

              <p>
                We estimate that a majority of cases will just need the
                automatic implementation, as it is the simplest to set up.  But
                the moment you need anything more than just showing a dropdown
                on click (e.g. open the dropdown on when a page event occurs)
                you will need to use the controlled implementation.
              </p>
            </div>

            <div className='col-lg-5'>
              <h6 className='mc-text-h6 mc-mb-4'>
                Automatic
              </h6>

              <Highlight className='language-html mc-mb-4'>
                {`
<Dropdown>
  <DropdownToggle>
    <Button>Click Me</Button>
  </ToolTipToggle>

  <DropdownContent>
    <DropdownItem>
      Hello, I am a dropdown item!
    </DropdownItem>
  </DropdownContent>
</Dropdown>
                `.trim()}
              </Highlight>

              <h6 className='mc-text-h6 mc-mb-4'>
                Controlled
              </h6>

              <Highlight className='language-html mc-mb-4'>
                {`
<Dropdown>
  <DropdownToggle>
    <Button>I am just the positioning reference</Button>
  </ToolTipToggle>

  <DropdownContentControlled show={true}>
    <DropdownItem>
      Hello, I am a dropdown item!
    </DropdownItem>
  </DropdownContentControlled>
</Dropdown>
                `.trim()}
              </Highlight>
            </div>
          </div>
        </DocSection>
      </div>
    )
  }
}


storiesOf('Components|Dropdown', module)
  .add('Summary', withAddons({
    path: 'components/Dropdown/index.stories.js',
    component: Dropdown,
  })(() => <DropdownStory />))

import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import CodeExample from '../../utils/CodeExample'
import InvertedMirror from '../../utils/InvertedMirror'

import Dropdown from '../Dropdown'
import DropdownToggle from '../DropdownToggle'
import DropdownBody from '../DropdownBody'
import DropdownHeader from '../DropdownHeader'
import DropdownContent from '../DropdownContent'
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


storiesOf('Components|Dropdown', module)
  .add('Summary', withAddons({
    path: 'components/Dropdown/index.stories.js',
    component: Dropdown,
  })(() => (
    <div>
      <div className='container'>
        <DocHeader
          title='Dropdown'
          description='Toggle, fullscreen, and mobile supported!'
        />

        <DocSection title='Demo'>
          <InvertedMirror>
            <CodeExample>
              <div className='row'>
                <div className='col-auto'>
                  <Dropdown>
                    <DropdownToggle>
                      <Button>I am Cool</Button>
                    </DropdownToggle>

                    <DropdownBody>
                      <DropdownContent>
                        {CATEGORIES.concat(CATEGORIES).map((category, key) =>
                          <DropdownItem key={key}
                            className='mc-py-3 mc-px-5 mc-text-small'
                            onClick={console.log}
                          >
                            <div className='row align-items-center'>
                              <div className='col-4'>
                                <img
                                qsrc={shondaRhimesThumbnail}
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
                    </DropdownBody>
                  </Dropdown>
                </div>

                <div className='col-auto'>
                  <Dropdown>
                    <DropdownToggle>
                      <Button>Click Me</Button>
                    </DropdownToggle>

                    <DropdownBody>
                      <DropdownHeader className={`
                          mc-p-5
                          mc-text-h8
                          mc-text--uppercase
                          mc-text--muted
                          mc-text-center
                      `}>
                        Categories
                      </DropdownHeader>

                      <DropdownContent>
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
                      </DropdownContent>

                      <DropdownFooter className='mc-text--center'>
                        <Button kind='link'>
                          View All
                        </Button>
                      </DropdownFooter>
                    </DropdownBody>
                  </Dropdown>
                </div>

                <div className='col-auto'>
                  <Dropdown>
                    <DropdownToggle>
                      <Button>Or Me</Button>
                    </DropdownToggle>

                    <DropdownBody>
                      {CATEGORIES.map((category, key) =>
                        <DropdownItem key={key}
                          className='mc-py-3 mc-px-5 mc-text-small'
                          onClick={console.log}
                        >
                          {category}
                        </DropdownItem>,
                      )}
                    </DropdownBody>
                  </Dropdown>
                </div>
              </div>
            </CodeExample>
          </InvertedMirror>
        </DocSection>
      </div>
    </div>
  )))

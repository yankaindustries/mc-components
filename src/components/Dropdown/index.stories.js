import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import CodeExample from '../../utils/CodeExample'

import Dropdown from '../Dropdown'
import DropdownToggle from '../DropdownToggle'
import DropdownContent from '../DropdownContent'
import DropdownItem from '../DropdownItem'

import Button from '../Button'
import Icon from '../Icons'


const CATEGORIES = [
  'Writing',
  'Music & Entertainment',
  'Sports & Games',
  'Design, Photography &',
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
          description='you know, when you have shit you need to hide'
        />

        <DocSection title='Demo'>
          <CodeExample>
            <Dropdown>
              <DropdownToggle>
                <Button>Click me...</Button>
              </DropdownToggle>

              <DropdownContent>
                {CATEGORIES.map(category =>
                  <DropdownItem key={category}
                    className='mc-py-3 mc-px-5 mc-text-small'
                    onClick={console.log}
                  >
                    <div className='row align-items-center justify-content-between flex-nowrap'>
                      <div className='col-auto mc-text--nowrap'>
                        {category}
                      </div>

                      <div className='col-auto'>
                        <Icon kind='chevron-right' />
                      </div>
                    </div>
                  </DropdownItem>,
                )}
              </DropdownContent>
            </Dropdown>
          </CodeExample>
        </DocSection>
      </div>
    </div>
  )))

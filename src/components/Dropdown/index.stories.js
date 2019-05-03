import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import CodeExample from '../../utils/CodeExample'
import PropExample from '../../utils/PropExample'

import Dropdown from '../Dropdown'
import DropdownToggle from '../DropdownToggle'
import DropdownContent from '../DropdownContent'
import DropdownItem from '../DropdownItem'

import Button from '../Button'


storiesOf('Components|Dropdown', module)
  .add('Summary', withAddons({
    path: 'components/Dropdown/index.stories.js',
    component: Dropdown,
  })(() => (
    <div>
      <div className='container'>
        <DocHeader
          title='Dropdown'
          description={`you know, when you have shit you need to hide`}
        />

        <DocSection title='Demo'>
          <CodeExample>
            <Dropdown>
              <DropdownToggle>
                <Button>Click me...</Button>
              </DropdownToggle>

              <DropdownContent>
                {[1, 2, 3].map(i =>
                  <DropdownItem
                    className='mc-py-3 mc-px-5'
                    onClick={console.log}
                  >
                    Test
                  </DropdownItem>
                )}
              </DropdownContent>
            </Dropdown>
          </CodeExample>
        </DocSection>
      </div>
    </div>
  )))

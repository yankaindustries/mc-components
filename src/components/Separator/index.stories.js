import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import CodeExample from '../../utils/CodeExample'
import InvertedMirror from '../../utils/InvertedMirror'
import Separator from '../Separator'


storiesOf('Components|Separator', module)
  .add('Summary', withProps(Separator)(() => (
    <div className='container'>
      <DocHeader
        title='Separator'
        description='
          Use a separator to define a change in the content
        '
      />

      <DocSection>
        <InvertedMirror>
          <CodeExample>
            <div>
              <p>Content 1</p>
              <Separator />
              <p>Content 2</p>
            </div>
          </CodeExample>
        </InvertedMirror>
      </DocSection>
    </div>
  )))

import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'
import DocSection from '../../utils/DocSection'
import PropExample from '../../utils/PropExample'
import Select from '../Select'

const options = [
  {
    value: 1,
    label: 'Option A',
  },
  {
    value: 2,
    label: 'Option B',
  },
  {
    value: 3,
    label: 'Option C',
  },
  {
    value: 4,
    label: 'Option D',
  },
  {
    value: 5,
    label: 'Option Z',
  },
]

storiesOf('components|Forms/Select', module).add('Select', withProps(Select)(() => (
  <div className='container'>
    <h2 className='mc-text-h2'>Select</h2>

    <DocSection title='Variations'>
      <PropExample
        name='default'
      >
        <div className='row'>
          <div className='col-4'>
            <Select
              options={options}
              defaultValue={{
                value: null,
                label: 'Select Story',
              }}
            />
          </div>
        </div>
      </PropExample>
    </DocSection>
  </div>
)))

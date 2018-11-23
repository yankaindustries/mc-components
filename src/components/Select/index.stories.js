import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'
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

storiesOf('components|Select', module).add('Select', withProps(Select)(() => (
  <Select
    options={options}
    defaultValue={{
      value: null,
      label: 'Select Story',
    }}
  />
)))

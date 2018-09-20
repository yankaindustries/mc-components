import React from 'react'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import Radio from '../Radio'

storiesOf('components|Forms/Radio', module)
  .add('Radio', withProps(Radio)(() => (
    <div className='example-mc-type'>
      <div className='container'>
        <div className='example--section'>
          <h2 className='mc-text-d1'>Radio</h2>
          <p>And their various states</p>
        </div>

        <div className='example--section'>
          <h5 className='mc-text-h5'>Default</h5>
          <div className='rounded-box'>
            <Radio
              name='colors'
              label='Red'
              onChange={console.log}
              value='red'
              checked
            />

            <Radio
              name='colors'
              label='Green'
              onChange={console.log}
              value='green'
            />

            <Radio
              name='colors'
              label='Blue'
              onChange={console.log}
              value='blue'
            />
          </div>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Inverted</h5>
          <Radio
            name='colors'
            label='Red'
            onChange={console.log}
            value='red'
            checked
            inverted
          />

          <Radio
            name='colors'
            label='Green'
            onChange={console.log}
            value='green'
            inverted
          />

          <Radio
            name='colors'
            label='Blue'
            onChange={console.log}
            value='blue'
            inverted
          />
        </div>
      </div>
    </div>
  )))

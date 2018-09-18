import React from 'react'
import { storiesOf } from '@storybook/react'

import Radio from '../Radio'

storiesOf('components|Forms/Radio', module)
  .add('Radio', () => (
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
              onChange={console.log}
              value='red'
              checked
            >
              Red
            </Radio>

            <Radio
              name='colors'
              onChange={console.log}
              value='green'
            >
              Green
            </Radio>

            <Radio
              name='colors'
              onChange={console.log}
              value='blue'
            >
              Blue
            </Radio>
          </div>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Inverted</h5>
          <Radio
            name='colors'
            onChange={console.log}
            value='red'
            checked
            inverted
          >
            Red
          </Radio>

          <Radio
            name='colors'
            onChange={console.log}
            value='green'
            inverted
          >
            Green
          </Radio>

          <Radio
            name='colors'
            onChange={console.log}
            value='blue'
            inverted
          >
            Blue
          </Radio>
        </div>
      </div>
    </div>
  ))

import React from 'react'
import { storiesOf } from '@storybook/react'

import Checkbox from '../Checkbox'


storiesOf('components|Forms/Checkbox', module)
  .add('default', () => (
    <div className='example-mc-type'>
      <div className='container example--section'>
        <h2 className='mc-text-d1'>Checkboxes</h2>
        <p>And their various states</p>
      </div>
      <div className='container'>
        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Default</h5>

          <div className='rounded-box'>
            <Checkbox
              onChange={console.log}
              checked={true}
            >
              I agree to the terms
            </Checkbox>
            <Checkbox
              onChange={console.log}
            >
              I like checking things twice
            </Checkbox>
            <Checkbox
              onChange={console.log}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
              dui nibh. Morbi facilisis efficitur orci, in facilisis leo. Donec
              libero libero, egestas non lacus in, ullamcorper suscipit nisi.
              Aenean nisi erat, ultricies nec metus id, sagittis fringilla
              tortor. Suspendisse rutrum placerat lectus, sit amet faucibus
              augue elementum at. Aliquam congue non erat eu pellentesque.
            </Checkbox>
          </div>
        </div>

        <div className='align-items-center example--section'>
          <h5 className='mc-text-h5'>Inverted</h5>
            <Checkbox
              onChange={console.log}
              checked
              inverted
            >
              I agree to the terms
            </Checkbox>
            <Checkbox
              onChange={console.log}
              inverted
            >
              I like checking things twice
            </Checkbox>
        </div>
      </div>
    </div>
  ))

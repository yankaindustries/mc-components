import React from 'react'
import { storiesOf } from '@storybook/react'

import TextArea from '../TextArea'


storiesOf('components|Forms/TextArea', module)
  .add('TextArea', () =>
    <div className='container'>
      <div className='example--section'>
        <h2 className='mc-text-d1'>TextArea</h2>
        <p>Some various textareas...</p>
      </div>

      <div className='example--section'>
        <div className='mc-form'>
          <div className='row'>
            <div className='col-sm-6'>
              <h5 className='mc-text-h5'>Default</h5>

              <div className='rounded-box'>
                <div className='mc-form-group'>
                  <TextArea
                    name='demo'
                    label='Some Label'
                    value=''
                  />
                </div>

                <div className='mc-form-group'>
                  <TextArea
                    name='value'
                    label='Tell us more about yourself'
                    value='I like turtles...'
                  />
                </div>

                <div className='mc-form-group'>
                  <TextArea
                    name='error'
                    label='What have we here?'
                    value='Looks like a problem.'
                    error
                  />
                </div>

                <div className='mc-form-group'>
                  <TextArea
                    name='disabled'
                    label={'Can\'t touch this'}
                    value=''
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className='col-sm-6'>
              <h5 className='mc-text-h5'>Inverted</h5>

              <div className='mc-form-group'>
                <TextArea
                  name='inverted-demo'
                  label='Some Label'
                  inverted
                />
              </div>

              <div className='mc-form-group'>
                <TextArea
                  name='inverted-value'
                  label='Tell us more about yourself'
                  value='I like turtles...'
                  inverted
                />
              </div>

              <div className='mc-form-group'>
                <TextArea
                  name='inverted-error'
                  label='What have we here?'
                  value='Looks like a problem.'
                  error
                  inverted
                />
              </div>

              <div className='mc-form-group'>
                <TextArea
                  name='inverted-disabled'
                  label={'Can\'t touch this'}
                  value=''
                  disabled
                  inverted
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
  )

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withProps } from '../../utils/addon-props'

import Input from '../Input'
import Lock from '../Icons/Lock'
import MagnifyingGlass from '../Icons/MagnifyingGlass'
import Close from '../Icons/Close'


storiesOf('components|Forms/Input', module)
  .add('Input', withProps(Input)(() =>
    <div className='container'>
      <div className='example--section'>
        <h2 className='mc-text-d1'>Input</h2>
        <p>Some various text inputs...</p>
      </div>

      <div className='example--section'>
        <div className='mc-form'>
          <div className='row'>
            <div className='col-sm-6'>
              <h5 className='mc-text-h5'>Default</h5>

              <div className='rounded-box'>
                <div className='mc-form-group'>
                  <Input
                    name='color'
                    label='What is your favorite color?'
                    placeholder='Red, orange, yellow, green, blue, violet, or something else?'
                    onChange={action('onChange')}
                  />
                </div>

                <div className='mc-form-group'>
                  <Input
                    name='test'
                    label='Who sang it best?'
                    placeholder='Madonna or Britney?'
                    value='Madona, obvi'
                    onChange={action('onChange')}
                  />
                </div>

                <div className='mc-form-group'>
                  <Input
                    name='prepend'
                    placeholder='Search'
                    prepend={<MagnifyingGlass />}
                    onChange={action('onChange')}
                  />
                </div>

                <div className='mc-form-group'>
                  <Input
                    name='prepend-password'
                    type='password'
                    placeholder='Password'
                    help='You have a secret'
                    prepend={<Lock />}
                    onChange={action('onChange')}
                  />
                </div>

                <div className='mc-form-group'>
                  <Input
                    name='append'
                    label='Field with appended icon'
                    placeholder='Hint: It is a close icon!'
                    append={<Close />}
                    onChange={action('onChange')}
                  />
                </div>

                <hr />

                <div className='mc-form-group'>
                  <Input
                    name='error'
                    label='Error example'
                    placeholder='Try to fix it?'
                    onChange={action('onChange')}
                    error
                  />
                </div>

                <div className='mc-form-group'>
                  <Input
                    name='fix-it'
                    label='There might be a problem...'
                    placeholder='Try to fix it?'
                    value='...with the values of this field.'
                    onChange={action('onChange')}
                    error
                  />
                </div>

                <div className='mc-form-group'>
                  <Input
                    name='password-error'
                    type='password'
                    label='Incorrect Password'
                    placeholder='Password'
                    value='this is incorrect'
                    prepend={<Lock />}
                    onChange={action('onChange')}
                    error
                  />
                </div>

                <hr />

                <div className='mc-form-group'>
                  <Input
                    name='disabled'
                    label='Disabled field'
                    placeholder='Not clickable!'
                    onChange={action('onChange')}
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className='col-sm-6'>
              <h5 className='mc-text-h5'>Inverted</h5>

              <div className='mc-form-group'>
                <Input
                  name='inverted-color'
                  label='What is your favorite color?'
                  placeholder='Red, orange, yellow, green, blue, violet, or something else?'
                  onChange={action('onChange')}
                  inverted
                />
              </div>

              <div className='mc-form-group'>
                <Input
                  name='inverted-test'
                  label='Who sang it best?'
                  placeholder='Madonna or Britney?'
                  value='Madona, obvi'
                  onChange={action('onChange')}
                  inverted
                />
              </div>

              <div className='mc-form-group'>
                <Input
                  name='inverted-prepend'
                  placeholder='Search'
                  onChange={action('onChange')}
                  prepend={<MagnifyingGlass />}
                  inverted
                />
              </div>

              <div className='mc-form-group'>
                <Input
                  name='inverted-prepend-password'
                  type='password'
                  placeholder='Password'
                  help='You have a secret'
                  prepend={<Lock />}
                  onChange={action('onChange')}
                  inverted
                />
              </div>

              <div className='mc-form-group'>
                <Input
                  name='inverted-append'
                  label='Field with appended icon'
                  placeholder='Hint: It is a close icon!'
                  append={<Close />}
                  onChange={action('onChange')}
                  inverted
                />
              </div>

              <hr />

              <div className='mc-form-group'>
                <Input
                  name='inverted-error'
                  label='Error example'
                  placeholder='Try to fix it?'
                  onChange={action('onChange')}
                  inverted
                  error
                />
              </div>

              <div className='mc-form-group'>
                <Input
                  name='inverted-fix-it'
                  label='There might be a problem...'
                  placeholder='Try to fix it?'
                  value='...with the values of this field.'
                  onChange={action('onChange')}
                  inverted
                  error
                />
              </div>

              <div className='mc-form-group'>
                <Input
                  name='inverted-password-error'
                  type='password'
                  label='Incorrect Password'
                  placeholder='Password'
                  value='this is incorrect'
                  prepend={<Lock />}
                  onChange={action('onChange')}
                  inverted
                  error
                />
              </div>

              <hr />

              <div className='mc-form-group'>
                <Input
                  name='inverted-disabled'
                  label='Disabled field'
                  placeholder='Not clickable!'
                  onChange={action('onChange')}
                  inverted
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
  ))

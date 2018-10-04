import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer, reduxForm } from 'redux-form'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import InputField from '../InputField'
import CheckboxField from '../CheckboxField'
import RadioField from '../RadioField'
import Button from '../Button'
import Lock from '../Icons/Lock'


const reducer = combineReducers({ form: formReducer })
const store = createStore(reducer)
const Form = reduxForm({
  form: 'summary',
})(
  () =>
    <div className='example-mc-type'>
      <div className='container'>
        <div className='example--section'>
          <h2 className='mc-text-d1'>Forms</h2>
        </div>

        <div className='example--section'>
          <div className='row'>
            <div className='col-sm-6'>
              <h5 className='mc-text-h5'>Default</h5>

              <div className='rounded-box'>
                <div className='mc-form-group'>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <InputField
                        name='firstName'
                        label='First name'
                        placeholder='John'
                      />
                    </div>

                    <div className='col-sm-6'>
                      <InputField
                        name='lastName'
                        label='Last name'
                        placeholder='Doe'
                      />
                    </div>
                  </div>
                </div>

                <div className='mc-form-group'>
                  <InputField
                    name='email'
                    label='Email'
                    type='email'
                    placeholder='john@google.com'
                  />
                </div>

                <div className='mc-form-group'>
                  <RadioField
                    name='billing'
                    option='yearly'
                    label='Bill me yearly ($180)'
                  />

                  <RadioField
                    name='billing'
                    option='monthly'
                    label='Bill me monthly ($20)'
                  />
                </div>

                <div className='mc-form-group'>
                  <InputField
                    name='password'
                    type='password'
                    placeholder='Password'
                    help='Must be at least 8 characters'
                    prepend={<Lock />}
                  />
                </div>

                <div className='mc-form-group'>
                  <InputField
                    name='confirm-password'
                    type='password'
                    placeholder='Confirm Password'
                    prepend={<Lock />}
                  />
                </div>

                <div className='mc-form-group'>
                  <CheckboxField
                    name='terms'
                    label='I agree to the terms'
                  />
                </div>

                <Button fullWidth>
                  Register
                </Button>
              </div>
            </div>

            <div className='col-sm-6'>
              <h5 className='mc-text-h5'>Inverted</h5>

              <div className='mc-form-group'>
                <div className='row'>
                  <div className='col-sm-6'>
                    <InputField
                      name='firstName'
                      label='First name'
                      placeholder='John'
                      inverted
                    />
                  </div>

                  <div className='col-sm-6'>
                    <InputField
                      name='lastName'
                      label='Last name'
                      placeholder='Doe'
                      inverted
                    />
                  </div>
                </div>
              </div>

              <div className='mc-form-group'>
                <InputField
                  name='email'
                  label='Email'
                  type='email'
                  placeholder='john@google.com'
                  inverted
                />
              </div>

              <div className='mc-form-group'>
                <RadioField
                  name='billing'
                  option='yearly'
                  label='Bill me yearly ($180)'
                  inverted
                />

                <RadioField
                  name='billing'
                  option='monthly'
                  label='Bill me monthly ($20)'
                  inverted
                />
              </div>

              <div className='mc-form-group'>
                <InputField
                  name='password'
                  type='password'
                  placeholder='Password'
                  help='Must be at least 8 characters'
                  prepend={<Lock />}
                  inverted
                />
              </div>

              <div className='mc-form-group'>
                <InputField
                  name='confirm-password'
                  type='password'
                  placeholder='Confirm Password'
                  prepend={<Lock />}
                  inverted
                />
              </div>

              <div className='mc-form-group'>
                <CheckboxField
                  name='terms'
                  label='I agree to the terms'
                  inverted
                />
              </div>

              <Button fullWidth>
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>,
)


storiesOf('components|Forms', module)
  .add('Summary', withProps(InputField)(() => (
    <Provider store={store}>
      <Form />
    </Provider>
  )))

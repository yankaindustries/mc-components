import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import {
  reducer as formReducer,
  reduxForm,
  Field,
} from 'redux-form'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import InputField from '../InputField'

import Lock from '../Icons/Lock'
import MagnifyingGlass from '../Icons/MagnifyingGlass'
import Close from '../Icons/Close'


const reducer = combineReducers({ form: formReducer })
const store = createStore(reducer)


const Form = reduxForm({
  form: 'input',
  initialValues: {
    best: 'Madonna, obvi',
  },
})(
  () =>
    <div className='example-mc-type'>
      <div className='container'>
        <div className='example__heading'>
          <h1 className='mc-text-h1'>InputField</h1>
        </div>

        <div className='example__section'>
          <div className='row'>
            <div className='col-sm-6'>
              <h5 className='mc-text-h5'>Default</h5>
              <div className='mc-form-group'>
                <Field
                  component={InputField}
                  name='color'
                  label='What is your favorite color?'
                  placeholder='Red, orange, yellow, green, blue, violet, or something else?'
                />
              </div>

              <div className='mc-form-group'>
                <Field
                  component={InputField}
                  name='best'
                  label='Who sang it best?'
                  placeholder='Madonna or Britney?'
                />
              </div>

              <div className='mc-form-group'>
                <Field
                  component={InputField}
                  name='prepend'
                  placeholder='Search'
                  prepend={<MagnifyingGlass />}
                />
              </div>

              <div className='mc-form-group'>
                <Field
                  component={InputField}
                  name='prepend-password'
                  type='password'
                  placeholder='Password'
                  help='You have a secret'
                  prepend={<Lock />}
                />
              </div>

              <div className='mc-form-group'>
                <Field
                  component={InputField}
                  name='append'
                  label='Field with appended icon'
                  placeholder='Hint: It is a close icon!'
                  append={<Close />}
                />
              </div>

              <hr />

              <div className='mc-form-group'>
                <Field
                  component={InputField}
                  name='username'
                  label='Username'
                  placeholder='john@doe.com'
                  error='Incorrect Username'
                />
              </div>

              <div className='mc-form-group'>
                <Field
                  component={InputField}
                  name='password'
                  type='password'
                  label='Password'
                  placeholder='12345'
                  prepend={<Lock />}
                  error='Incorrect Password'
                />
              </div>

              <hr />

              <div className='mc-form-group'>
                <Field
                  component={InputField}
                  name='disabled'
                  label='Disabled field'
                  placeholder='Not clickable!'
                  disabled
                />
              </div>
            </div>

            <div className='col-sm-6'>
              <h5 className='mc-text-h5'>Inverted</h5>
              <div className='rounded-box mc-invert'>
                <div className='mc-form-group'>
                  <Field
                    component={InputField}
                    name='color'
                    label='What is your favorite color?'
                    placeholder='Red, orange, yellow, green, blue, violet, or something else?'
                  />
                </div>

                <div className='mc-form-group'>
                  <Field
                    component={InputField}
                    name='best'
                    label='Who sang it best?'
                    placeholder='Madonna or Britney?'
                  />
                </div>

                <div className='mc-form-group'>
                  <Field
                    component={InputField}
                    name='prepend'
                    placeholder='Search'
                    prepend={<MagnifyingGlass />}
                  />
                </div>

                <div className='mc-form-group'>
                  <Field
                    component={InputField}
                    name='prepend-password'
                    type='password'
                    placeholder='Password'
                    help='You have a secret'
                    prepend={<Lock />}
                  />
                </div>

                <div className='mc-form-group'>
                  <Field
                    component={InputField}
                    name='append'
                    label='Field with appended icon'
                    placeholder='Hint: It is a close icon!'
                    append={<Close />}
                  />
                </div>

                <hr />

                <div className='mc-form-group'>
                  <Field
                    component={InputField}
                    name='username'
                    label='Username'
                    placeholder='john@doe.com'
                    error='Incorrect Username'
                  />
                </div>

                <div className='mc-form-group'>
                  <Field
                    component={InputField}
                    name='password'
                    type='password'
                    label='Password'
                    placeholder='12345'
                    prepend={<Lock />}
                    error='Incorrect Password'
                  />
                </div>

                <hr />

                <div className='mc-form-group'>
                  <Field
                    component={InputField}
                    name='disabled'
                    label='Disabled field'
                    placeholder='Not clickable!'
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
)


storiesOf('components|Forms/InputField', module)
  .add('InputField', withProps(InputField)(() => (
    <Provider store={store}>
      <Form />
    </Provider>
  )))

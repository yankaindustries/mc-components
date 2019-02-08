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
import InvertedMirror from '../../utils/InvertedMirror'

import InputField from '../InputField'
import SelectField from '../SelectField'
import CheckboxField from '../CheckboxField'
import RadioField from '../RadioField'
import TextareaField from '../TextareaField'
import Button from '../Button'
import Lock from '../Icons/Lock'


const membershipOptions = [
  {
    label: 'Silver',
    value: '1',
  },
  {
    label: 'Gold',
    value: '2',
  },
  {
    label: 'Platinum',
    value: '3',
  },
]

const reducer = combineReducers({ form: formReducer })
const store = createStore(reducer)
const Form = reduxForm({
  form: 'summary',
})(
  () =>
    <div className='example-mc-type'>
      <div className='container'>
        <div className='example__heading'>
          <h2 className='mc-text-h1'>Forms</h2>
        </div>

        <div className='example__section'>
          <InvertedMirror>
            <div className='row'>
              <div className='col-sm-6'>
                <Field
                  component={InputField}
                  name='firstName'
                  label='First name'
                  placeholder='John'
                  required
                />
              </div>

              <div className='col-sm-6'>
                <Field
                  component={InputField}
                  name='lastName'
                  label='Last name'
                  placeholder='Doe'
                  required
                />
              </div>
            </div>

            <Field
              component={InputField}
              name='email'
              label='Email'
              type='email'
              placeholder='john@google.com'
              required
            />

            <Field
              component={SelectField}
              name='membership'
              label='Membership Level'
              options={membershipOptions}
              required
            />

            <Field
              component={TextareaField}
              name='bio'
              label='Tell us about yourself'
              placeholder='This is the story of a girl...'
            />

            <Field
              component={RadioField}
              name='billing'
              option='yearly'
              label='Bill me yearly ($180)'
            />

            <Field
              className='mc-mb-6'
              component={RadioField}
              name='billing'
              option='monthly'
              label='Bill me monthly ($20)'
            />

            <Field
              component={InputField}
              name='password'
              type='password'
              label='Password'
              placeholder='••••••••'
              help='Must be at least 8 characters'
              prepend={<Lock />}
              error='Password is required'
              required
            />

            <Field
              component={InputField}
              name='confirm-password'
              type='password'
              label='Confirm Password'
              placeholder='••••••••'
              help='Must be the same as password above'
              prepend={<Lock />}
              error='Confirmation does not match'
              required
            />

            <Field
              className='mc-mb-6'
              component={CheckboxField}
              name='terms'
              label='I agree to the terms'
            />

            <Button
              type='submit'
              fullWidth
            >
              Register
            </Button>
          </InvertedMirror>
        </div>
      </div>
    </div>,
)


storiesOf('Components|Forms', module)
  .add('Summary', withProps(InputField)(() => (
    <Provider store={store}>
      <Form />
    </Provider>
  )))

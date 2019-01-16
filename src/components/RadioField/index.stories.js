import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import {
  reducer as formReducer,
  reduxForm,
  Field,
} from 'redux-form'
import { storiesOf } from '@storybook/react'

import RadioField from '../RadioField'


const reducer = combineReducers({ form: formReducer })
const store = createStore(reducer)


const Form = reduxForm({
  form: 'radio',
  initialValues: {
    color: 'green',
  },
})(
  () => (
    <div className='example-mc-type'>
      <div className='container'>
        <div className='example__heading'>
          <h1 className='mc-text-h1'>RadioField</h1>
        </div>

        <div className='row'>
          <div className='col-sm-6'>
            <h5 className='mc-text-h5'>Default</h5>

            <Field
              component={RadioField}
              name='color'
              label='Red'
              option='red'
            />

            <Field
              component={RadioField}
              name='color'
              label='Green'
              option='green'
            />

            <Field
              component={RadioField}
              name='color'
              label='Blue'
              option='blue'
            />
          </div>

          <div className='col-sm-6'>
            <h5 className='mc-text-h5'>Inverted</h5>

            <div className='rounded-box mc-invert'>
              <Field
                component={RadioField}
                name='color'
                label='Red'
                option='red'
              />

              <Field
                component={RadioField}
                name='color'
                label='Green'
                option='green'
              />

              <Field
                component={RadioField}
                name='color'
                label='Blue'
                option='blue'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
)


storiesOf('Components|Forms/RadioField', module)
  .add('RadioField', () => (
    <Provider store={store}>
      <Form />
    </Provider>
  ))

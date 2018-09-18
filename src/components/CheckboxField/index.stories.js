import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer, reduxForm } from 'redux-form'
import { storiesOf } from '@storybook/react'

import CheckboxField from '../CheckboxField'

const reducer = combineReducers({ form: formReducer })
const store = createStore(reducer)


const Form = reduxForm({
  form: 'radio',
  initialValues: {
    red: true,
  },
})(
  () =>
    <div className='example-mc-type'>
      <div className='container'>
        <div className='example--section'>
          <h2 className='mc-text-d1'>CheckboxField</h2>
        </div>

        <div className='example--section'>
          <h5 className='mc-text-h5'>Default</h5>
          <div className='rounded-box'>
            <CheckboxField
              name='red'
              label='Red'
            />

            <CheckboxField
              name='green'
              label='Green'
            />

            <CheckboxField
              name='blue'
              label='Blue'
            />
          </div>
        </div>
      </div>
    </div>,
)


storiesOf('components|Forms/CheckboxField', module)
  .add('CheckboxField', () => (
    <Provider store={store}>
      <Form />
    </Provider>
  ))

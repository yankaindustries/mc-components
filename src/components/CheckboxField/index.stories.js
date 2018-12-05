import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import {
  reducer as formReducer,
  reduxForm,
  Field,
} from 'redux-form'
import { storiesOf } from '@storybook/react'

import CheckboxField from '../CheckboxField'


const reducer = combineReducers({ form: formReducer })
const store = createStore(reducer)


const Form = reduxForm({
  form: 'checkbox',
  initialValues: {
    terms: true,
  },
})(
  () =>
    <div className='example-mc-type'>
      <div className='container'>
        <div className='example--section'>
          <h2 className='mc-text-d1'>CheckboxField</h2>
        </div>

        <div className='row'>
          <div className='col-sm-6'>
            <h5 className='mc-text-h5'>Default</h5>

            <div className='form-group'>
              <Field
                component={CheckboxField}
                name='terms'
                label='I agree to the terms'
              />

              <Field
                component={CheckboxField}
                name='twice'
                label='I like checking things twice'
              />

              <Field
                component={CheckboxField}
                name='lipsum'
                label='
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
                  dui nibh. Morbi facilisis efficitur orci, in facilisis leo.
                  Donec libero libero, egestas non lacus in, ullamcorper suscipit
                  nisi. Aenean nisi erat, ultricies nec metus id, sagittis tortor.
                  Suspendisse rutrum placerat lectus, sit amet faucibus augue
                  elementum at. Aliquam congue non erat eu pellentesque.
                '
              />
            </div>
          </div>

          <div className='col-sm-6'>
            <h5 className='mc-text-h5'>Inverted</h5>
            <div className='rounded-box'>
              <div className='form-group'>
                <Field
                  component={CheckboxField}
                  name='terms'
                  label='I agree to the terms'
                />

                <Field
                  component={CheckboxField}
                  name='twice'
                  label='I like checking things twice'
                />

                <Field
                  component={CheckboxField}
                  name='lipsum'
                  label='
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
                    dui nibh. Morbi facilisis efficitur orci, in facilisis leo.
                    Donec libero libero, egestas non lacus in, ullamcorper suscipit
                    nisi. Aenean nisi erat, ultricies nec metus id, sagittis tortor.
                    Suspendisse rutrum placerat lectus, sit amet faucibus augue
                    elementum at. Aliquam congue non erat eu pellentesque.
                  '
                />
              </div>
            </div>
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

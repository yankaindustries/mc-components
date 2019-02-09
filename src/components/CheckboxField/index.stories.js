import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import {
  reducer as formReducer,
  reduxForm,
  Field,
} from 'redux-form'
import { storiesOf } from '@storybook/react'

import InvertedMirror from '../../utils/InvertedMirror'
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
        <div className='example__heading'>
          <h2 className='mc-text-h1'>CheckboxField</h2>
        </div>

        <InvertedMirror>
          <div className='row'>
            <div className='col-12'>
              <h5 className='mc-text-h5'>Default</h5>
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

              <Field
                component={CheckboxField}
                name='disabled'
                disabled
                label='
                  This checkbox is disabled
                '
              />

              <Field
                component={CheckboxField}
                name='disabledChecked'
                disabled
                checked
                label='
                  This checkbox is disabled but checked
                '
              />
            </div>
          </div>
        </InvertedMirror>
      </div>
    </div>,
)


storiesOf('Components|Forms/CheckboxField', module)
  .add('CheckboxField', () => (
    <Provider store={store}>
      <Form />
    </Provider>
  ))

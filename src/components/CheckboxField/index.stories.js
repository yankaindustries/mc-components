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
                name='salt'
                label='Sale'
                checked
              />

              <Field
                component={CheckboxField}
                name='pepper'
                label='Freshly ground black pepper'
              />

              <Field
                component={CheckboxField}
                name='longer'
                checked
                label='
                  1 heaping cup cooked lobster meat, shells removed
                  and reserved for sauce (this amount is equal to
                  claw, knuckle and leg meat from two 11⁄2 lb lobsters
                  OR all meat including tail from one 11⁄2 lb
                  lobster)
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

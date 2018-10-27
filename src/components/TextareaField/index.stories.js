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

import TextareaField from '../TextareaField'


const reducer = combineReducers({ form: formReducer })
const store = createStore(reducer)


const Form = reduxForm({
  form: 'textarea',
  initialValues: {
    demo: 'Some Value',
    'inverted-demo': 'Some Value',
    error: 'Looks like a problem.',
    'inverted-error': 'Looks like a problem.',
  },
})(
  () =>
    <div className='container'>
      <div className='example--section'>
        <h2 className='mc-text-d1'>Textarea</h2>
        <p>Some various textareas...</p>
      </div>

      <div className='example--section'>
        <div className='mc-form'>
          <div className='row'>
            <div className='col-sm-6'>
              <h5 className='mc-text-h5'>Default</h5>

              <div className='rounded-box'>
                <div className='mc-form-group'>
                  <Field
                    component={TextareaField}
                    name='demo'
                    label='Some Label'
                    value=''
                  />
                </div>

                <div className='mc-form-group'>
                  <Field
                    component={TextareaField}
                    name='value'
                    label='Tell us more about yourself'
                    value='I like turtles...'
                  />
                </div>

                <div className='mc-form-group'>
                  <Field
                    component={TextareaField}
                    name='error'
                    label='What have we here?'
                    error
                  />
                </div>

                <div className='mc-form-group'>
                  <Field
                    component={TextareaField}
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
                <Field
                  component={TextareaField}
                  name='inverted-demo'
                  label='Some Label'
                  inverted
                />
              </div>

              <div className='mc-form-group'>
                <Field
                  component={TextareaField}
                  name='inverted-value'
                  label='Tell us more about yourself'
                  value='I like turtles...'
                  inverted
                />
              </div>

              <div className='mc-form-group'>
                <Field
                  component={TextareaField}
                  name='inverted-error'
                  label='What have we here?'
                  value='Looks like a problem.'
                  error
                  inverted
                />
              </div>

              <div className='mc-form-group'>
                <Field
                  component={TextareaField}
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


storiesOf('components|Forms/TextareaField', module)
  .add('TextareaField', withProps(TextareaField)(() => (
    <Provider store={store}>
      <Form />
    </Provider>
  )))

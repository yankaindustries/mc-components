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
    bio: 'I am me, of course.',
  },
})(
  () =>
    <div className='container'>
      <div className='example__section'>
        <h1 className='mc-text-h1'>Textarea</h1>
        <p className='mc-text--muted'>Some various textareas...</p>
      </div>

      <div className='example__section'>
        <div className='mc-form'>
          <div className='row'>
            <div className='col-sm-6'>
              <h5 className='mc-text-h5'>Default</h5>

              <div className='mc-form-group'>
                <Field
                  component={TextareaField}
                  name='demo'
                  label='Some Label'
                />
              </div>

              <div className='mc-form-group'>
                <Field
                  component={TextareaField}
                  name='bio'
                  label='Tell us more about yourself'
                />
              </div>

              <div className='mc-form-group'>
                <Field
                  component={TextareaField}
                  name='error'
                  label='What have we here?'
                  placeholder='I dont know, dont ask me!'
                  error='Something is wrong'
                />
              </div>

              <div className='mc-form-group'>
                <Field
                  component={TextareaField}
                  name='disabled'
                  label={'Can\'t touch this'}
                  disabled
                />
              </div>
            </div>

            <div className='col-sm-6'>
              <h5 className='mc-text-h5'>Inverted</h5>

              <div className='rounded-box mc-invert'>
                <div className='mc-form-group'>
                  <Field
                    component={TextareaField}
                    name='demo'
                    label='Some Label'
                  />
                </div>

                <div className='mc-form-group'>
                  <Field
                    component={TextareaField}
                    name='bio'
                    label='Tell us more about yourself'
                  />
                </div>

                <div className='mc-form-group'>
                  <Field
                    component={TextareaField}
                    name='error'
                    label='What have we here?'
                    placeholder='I dont know, dont ask me!'
                    error='Something is wrong'
                  />
                </div>

                <div className='mc-form-group'>
                  <Field
                    component={TextareaField}
                    name='disabled'
                    label={'Can\'t touch this'}
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


storiesOf('Components|Forms/TextareaField', module)
  .add('TextareaField', withProps(TextareaField)(() => (
    <Provider store={store}>
      <Form />
    </Provider>
  )))

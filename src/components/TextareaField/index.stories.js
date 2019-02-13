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
import InvertedMirror from '../../utils/InvertedMirror'


const reducer = combineReducers({ form: formReducer })
const store = createStore(reducer)


const Form = reduxForm({
  form: 'textarea',
  initialValues: {
    value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
pretium consectetur risus eget feugiat. Ut faucibus id nunc vel tempor.`,
  },
})(
  () =>
    <div className='container'>
      <div className='example__section'>
        <h1 className='mc-text-h1'>Textarea</h1>
        <p className='mc-text--muted'>Some various textareas...</p>
      </div>

      <div className='example__section'>
        <InvertedMirror>
          <Field
            component={TextareaField}
            name='demo'
            label='Label'
            placeholder='Placeholder'
          />

          <hr />

          <Field
            component={TextareaField}
            name='value'
            label='Value'
            required
          />

          <Field
            component={TextareaField}
            name='error'
            label='Error'
            error='Error explanation'
            required
            touched
          />

          <Field
            component={TextareaField}
            name='disabled'
            label='Disabled'
            required
            disabled
          />
        </InvertedMirror>
      </div>
    </div>,
)


storiesOf('Components|Forms/TextareaField', module)
  .add('TextareaField', withProps(TextareaField)(() => (
    <Provider store={store}>
      <Form />
    </Provider>
  )))

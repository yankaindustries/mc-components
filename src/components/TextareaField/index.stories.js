import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import {
  reducer as formReducer,
  reduxForm,
  Field,
} from 'redux-form'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import InvertedMirror from '../../utils/InvertedMirror'

import TextareaField from '../TextareaField'


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
      <DocHeader
        title='TextareaField'
        description='For use with FinalForm. Some various textareas...'
      />

      <div className='example__section'>
        <InvertedMirror>
          <Field
            className='mc-mb-4'
            component={TextareaField}
            name='demo'
            label='Label'
            placeholder='Placeholder'
          />

          <hr />

          <Field
            className='mc-mb-4'
            component={TextareaField}
            name='value'
            label='Value'
            required
          />

          <Field
            className='mc-mb-4'
            component={TextareaField}
            name='error'
            label='Error'
            error='Error explanation'
            required
            touched
          />

          <Field
            className='mc-mb-4'
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


storiesOf('Components|Forms/Textarea', module)
  .add('TextareaField', withAddons({
    path: 'components/TextareaField/index.stories.js',
    component: TextareaField,
  })(() => (
    <Provider store={store}>
      <Form />
    </Provider>
  )))

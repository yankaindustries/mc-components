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

import InputField from '../InputField'
import MagnifyingGlass from '../Icons/MagnifyingGlass'
import Close from '../Icons/Close'


const reducer = combineReducers({ form: formReducer })
const store = createStore(reducer)


const Form = reduxForm({
  form: 'input',
  initialValues: {
    errors: 'Value',
  },
})(
  () =>
    <div className='example-mc-type'>
      <div className='container'>
        <DocHeader
          title='InputField'
          description='For use with FinalForm. The most basic of form elements.'
        />

        <div className='example__section'>
          <InvertedMirror>
            <Field
              className='mc-mb-4'
              component={InputField}
              name='default'
              label='Label'
              placeholder='Placeholder'
            />

            <hr />

            <Field
              className='mc-mb-4'
              component={InputField}
              name='helper-text'
              label='Helper Text'
              placeholder='Placeholder'
              help='Helper text'
            />

            <Field
              className='mc-mb-4'
              component={InputField}
              name='optional'
              label='Optional'
              placeholder='Placeholder'
              optional
            />

            <Field
              className='mc-mb-4'
              component={InputField}
              name='prepend'
              label='Prepended Icon'
              placeholder='Placeholder'
              prepend={<MagnifyingGlass />}
            />

            <Field
              className='mc-mb-4'
              component={InputField}
              name='append'
              label='Appended Icon'
              placeholder='Placeholder'
              append={<Close />}
            />

            <Field
              className='mc-mb-4'
              component={InputField}
              name='errors'
              label='Error'
              placeholder='Placeholder'
              error='Error explanation'
              touched
            />

            <Field
              className='mc-mb-4'
              component={InputField}
              name='disabled'
              label='Disabled'
              placeholder='Not clickable!'
              disabled
            />
          </InvertedMirror>
        </div>
      </div>
    </div>,
)


storiesOf('Components|Forms/Input', module)
  .add('InputField', withAddons({
    path: 'components/InputField/index.stories.js',
    component: InputField,
  })(() => (
    <Provider store={store}>
      <Form />
    </Provider>
  )))

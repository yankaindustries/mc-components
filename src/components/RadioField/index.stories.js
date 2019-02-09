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
import DocHeader from '../../utils/DocHeader'
import InvertedMirror from '../../utils/InvertedMirror'

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
    <div className='container'>
      <DocHeader
        title='RadioField'
        description='Remember multiple choice?'
      />

      <InvertedMirror>
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
          disabled
        />
      </InvertedMirror>
    </div>
  ),
)


storiesOf('Components|Forms/RadioField', module)
  .add('RadioField', withProps(RadioField)(() => (
    <Provider store={store}>
      <Form />
    </Provider>
  )))

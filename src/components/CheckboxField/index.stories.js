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

import CheckboxField from '../CheckboxField'


const reducer = combineReducers({ form: formReducer })
const store = createStore(reducer)

const Form = reduxForm({
  form: 'checkbox',
  initialValues: {
    terms: true,
  },
  validate: () => ({
    error: 'Something is wrong here...',
  }),
})(
  () =>
    <div className='container'>
      <DocHeader
        title='CheckboxField'
        description='For use with FinalForm. I agree to the terms...'
      />

      <InvertedMirror>
        <Field
          component={CheckboxField}
          name='salt'
          label='Salt'
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
          label='
            1 heaping cup cooked lobster meat, shells removed
            and reserved for sauce (this amount is equal to
            claw, knuckle and leg meat from two 11⁄2 lb lobsters
            OR all meat including tail from one 11⁄2 lb
            lobster)
          '
        />

        <hr className='mc-separator mc-mb-4' />

        <Field
          component={CheckboxField}
          name='error'
          label='
            This checkbox has an error
          '
        />

        <hr className='mc-separator mc-mb-4' />

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
      </InvertedMirror>
    </div>,
)


storiesOf('Components|Forms/Checkbox', module)
  .add('CheckboxField', withAddons({
    path: 'components/CheckboxField/index.stories.js',
    component: CheckboxField,
  })(() => (
    <Provider store={store}>
      <Form />
    </Provider>
  )))

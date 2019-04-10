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
          name='food'
          option='salt'
          label='Salt'
        />

        <Field
          component={RadioField}
          name='food'
          option='pepper'
          label='Freshly ground black pepper'
        />

        <Field
          component={RadioField}
          name='food'
          option='longer'
          label='
            1 heaping cup cooked lobster meat, shells removed
            and reserved for sauce (this amount is equal to
            claw, knuckle and leg meat from two 11⁄2 lb lobsters
            OR all meat including tail from one 11⁄2 lb
            lobster)
          '
        />

        <Field
          component={RadioField}
          name='food'
          option='disabled'
          disabled
          label='
            This checkbox is disabled
          '
        />

        <Field
          component={RadioField}
          name='food'
          option='disabledSelected'
          checked
          disabled
          label='
            This checkbox is disabled but checked
          '
        />
      </InvertedMirror>
    </div>
  ),
)


storiesOf('Components|Forms/RadioField', module)
  .add('RadioField', withAddons({
    path: 'components/RadioField/index.stories.js',
    component: RadioField,
  })(() => (
    <Provider store={store}>
      <Form />
    </Provider>
  )))

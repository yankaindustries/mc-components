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

import SelectField from '../SelectField'


const reducer = combineReducers({ form: formReducer })
const store = createStore(reducer)

const membershipOptions = [
  {
    label: 'Silver',
    value: '1',
  },
  {
    label: 'Gold',
    value: '2',
  },
  {
    label: 'Platinum',
    value: '3',
  },
]

const Form = reduxForm({
  form: 'select',
  initialValues: {
    disabledChecked: '1',
  },
})(
  () =>
    <div className='container'>
      <DocHeader
        title='SelectField'
        description='For use with FinalForm. We got options people!'
      />

      <InvertedMirror>
        <Field
          className='mc-mb-4'
          component={SelectField}
          name='memberships'
          label='Membership Options'
          options={membershipOptions}
        />

        <Field
          className='mc-mb-4'
          component={SelectField}
          name='disabled'
          disabled
          label='
            This select dropdown is disabled
          '
        />

        <Field
          className='mc-mb-4'
          component={SelectField}
          name='disabledChecked'
          disabled
          options={membershipOptions}
          value='Silver'
          label='
            This checkbox is disabled but has a selected option
          '
        />
      </InvertedMirror>
    </div>,
)


storiesOf('Components|Forms/Select', module)
  .add('SelectField', withAddons({
    path: 'components/SelectField/index.stories.js',
    component: SelectField,
  })(() => (
    <Provider store={store}>
      <Form />
    </Provider>
  )))

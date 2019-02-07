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
        <div className='example__heading'>
          <h1 className='mc-text-h1'>InputField</h1>
        </div>

        <div className='example__section'>
          <InvertedMirror>
            <div className='mc-mb-7'>
              <Field
                component={InputField}
                name='default'
                label='Label'
                placeholder='Placeholder'
                help='Helper text'
              />
            </div>

            <hr />

            <div className='mc-mb-7'>
              <Field
                component={InputField}
                name='required'
                label='Required'
                placeholder='Placeholder'
                required
              />
            </div>

            <div className='mc-mb-7'>
              <Field
                component={InputField}
                name='prepend'
                label='Prepended Icon'
                placeholder='Placeholder'
                prepend={<MagnifyingGlass />}
              />
            </div>

            <div className='mc-mb-7'>
              <Field
                component={InputField}
                name='append'
                label='Appended Icon'
                placeholder='Placeholder'
                append={<Close />}
              />
            </div>

            <div className='mc-mb-7'>
              <Field
                component={InputField}
                name='errors'
                label='Error'
                placeholder='Placeholder'
                error='Error explanation'
                touched
              />
            </div>

            <div className='mc-mb-7'>
              <Field
                component={InputField}
                name='disabled'
                label='Disabled'
                placeholder='Not clickable!'
                disabled
              />
            </div>
          </InvertedMirror>
        </div>
      </div>
    </div>,
)


storiesOf('Components|Forms/InputField', module)
  .add('InputField', withProps(InputField)(() => (
    <Provider store={store}>
      <Form />
    </Provider>
  )))

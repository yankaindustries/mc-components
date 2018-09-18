import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer, reduxForm } from 'redux-form'
import { storiesOf } from '@storybook/react'
import { withProps } from '../../utils/addon-props'

import InputField from '../InputField'

const reducer = combineReducers({ form: formReducer })
const store = createStore(reducer)


const Form = reduxForm({
  form: 'radio',
  initialValues: {
    something: 'something',
  },
})(
  () =>
    <div className='example-mc-type'>
      <div className='container'>
        <div className='example--section'>
          <h2 className='mc-text-d1'>InputField</h2>
        </div>

        <div className='example--section'>
          <h5 className='mc-text-h5'>Default</h5>
          <div className='rounded-box'>
            <InputField
              name='something'
              label='Red'
            />
          </div>
        </div>

        <div className='example--section'>
          <h5 className='mc-text-h5'>Inverted</h5>

          <InputField
            name='something'
            label='Red'
            inverted
          />
        </div>
      </div>
    </div>,
)


storiesOf('components|Forms/InputField', module)
  .add('InputField', withProps(InputField)(() => (
    <Provider store={store}>
      <Form />
    </Provider>
  )))

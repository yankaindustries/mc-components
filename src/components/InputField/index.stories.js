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
          <div className='row'>
            <div className='col-sm-6'>
              <h5 className='mc-text-h5'>Default</h5>

              <div className='rounded-box'>
                <div className='mc-form-group'>
                  <InputField
                    name='color'
                    label='Favorite Color'
                    placeholder='Like, red/blue/green?'
                  />
                </div>
              </div>
            </div>

            <div className='col-sm-6'>
              <h5 className='mc-text-h5'>Inverted</h5>

              <div className='mc-form-group'>
                <InputField
                  name='fruit'
                  label='Favorite Fruit'
                  placeholder='Orange ya glad I did not say banana?'
                  inverted
                />
              </div>
            </div>
          </div>
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

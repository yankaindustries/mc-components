import React from 'react'
import { storiesOf } from '@storybook/react'

// TextArea Handler
storiesOf('components|Forms/TextAreaNew', module)
  .add('default', () =>
    <div className='container'>
      <div className='example--section'>
        <h2 className='mc-text-d1'>Textarea</h2>
        <p>Some various textareas...</p>
      </div>

      <div className='example--section'>
        <div className='mc-form'>
          <div className='row'>
            <div className='col-sm-6'>
              <h5 className='mc-text-h5'>Default</h5>
              <div className='rounded-box'>
                <div className='mc-form-group'>

                  <div className='mc-form-textarea'>
                    <textarea name='demo-textarea' id='demo-textarea' className='mc-form-textarea__textarea' placeholder='Now you can type here!'></textarea>
                    <label htmlFor='demo-textarea' className='mc-form-textarea__label'>This is some dummy text.</label>
                  </div>

                </div>
              </div>
            </div>

            <div className='col-sm-6'>
              <h5 className='mc-text-h5'>Inverted</h5>
              <div className='mc-form-group'>

                <div className='mc-form-textarea mc-form-textarea--invert'>
                  <textarea name='demo-textarea-invert' id='demo-textarea-invert' className='mc-form-textarea__textarea' placeholder='Now you can type here!'></textarea>
                  <label htmlFor='demo-textarea-invert' className='mc-form-textarea__label'>This is some dummy text.</label>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
  )

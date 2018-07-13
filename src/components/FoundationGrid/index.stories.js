import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import './_styles.css'

storiesOf('foundation|Grid', module)
  .add('columns', withInfo()(() => (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-6'>
            <div className='example-grid-block'></div>
          </div>
          <div className='col-xs-6'>
            <div className='example-grid-block'></div>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-12 col-md-4'>
            <div className='example-grid-block'></div>
          </div>
          <div className='col-sm-12 col-md-4'>
            <div className='example-grid-block'></div>
          </div>
          <div className='col-sm-12 col-md-4'>
            <div className='example-grid-block'></div>
          </div>
        </div>

        <div className='row'>
          <div className='col-md'>
            <div className='example-grid-block'></div>
          </div>
          <div className='col-md'>
            <div className='example-grid-block'></div>
          </div>
          <div className='col-md'>
            <div className='example-grid-block'></div>
          </div>
          <div className='col-md'>
            <div className='example-grid-block'></div>
          </div>
          <div className='col-md'>
            <div className='example-grid-block'></div>
          </div>
          <div className='col-md'>
            <div className='example-grid-block'></div>
          </div>
          <div className='col-md'>
            <div className='example-grid-block'></div>
          </div>
          <div className='col-md'>
            <div className='example-grid-block'></div>
          </div>
          <div className='col-md'>
            <div className='example-grid-block'></div>
          </div>
          <div className='col-md'>
            <div className='example-grid-block'></div>
          </div>
          <div className='col-md'>
            <div className='example-grid-block'></div>
          </div>
          <div className='col-md'>
            <div className='example-grid-block'></div>
          </div>
        </div>
      </div>
  )))

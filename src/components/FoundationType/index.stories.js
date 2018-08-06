import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

storiesOf('foundation|Type', module)
  .add(
    'default',
    withInfo()(() =>
      <div className='container example-mc-type'>
        <div className='row align-items-center'>
          <div className='col-md-2 mc-type__description'>
            <p>Display 1</p>
          </div>

          <div className='col-md'>
            <h1 className='mc-text-hero-1'>Malcolm Gladwell</h1>
          </div>
        </div>

        <div className='row align-items-center'>
          <div className='col-md-2 mc-type__description'>
            <p>Display 2</p>
          </div>

          <div className='col-md'>
            <h1 className='mc-text-hero-2'>Teaches Writing</h1>
          </div>
        </div>

        <div className='row align-items-center'>
          <div className='col-md-2 mc-type__description'>
            <p>H1</p>
          </div>

          <div className='col-md'>
            <h1 className='mc-heading-1'>Unlock Every Class with the All‑Access Pass</h1>
          </div>
        </div>

        <div className='row align-items-center'>
          <div className='col-md-2 mc-type__description'>
            <p>H2</p>
          </div>

          <div className='col-md'>
            <h2 className='mc-heading-2'>Lorem Ipsum Sin Dolor</h2>
          </div>
        </div>

        <div className='row align-items-center'>
          <div className='col-md-2 mc-type__description'>
            <p>H3</p>
          </div>

          <div className='col-md'>
            <h3 className='mc-heading-3'>All-Access Pass</h3>
          </div>
        </div>

        <div className='row align-items-center'>
          <div className='col-md-2 mc-type__description'>
            <p>H4</p>
          </div>

          <div className='col-md'>
            <h4 className='mc-heading-4'>NOW AVAILABLE</h4>
          </div>
        </div>

        <div className='row align-items-center'>
          <div className='col-md-2 mc-type__description'>
            <p>Body 1</p>
          </div>

          <div className='col-md'>
            <p className='mc-body'>Online classes taught by the world&#39;s
            greatest minds. Now get unlimited access to all classes.
            </p>
          </div>
        </div>

        <div className='row align-items-center'>
          <div className='col-md-2 mc-type__description'>
            <p>Legal</p>
          </div>

          <div className='col-md'>
            <p className='mc-text-legal'>Copyright 2018 MasterClass</p>
          </div>
        </div>
      </div>,
    ),
  )

import React from 'react'
import {
  Form,
  Field,
} from 'react-final-form'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import InvertedMirror from '../../utils/InvertedMirror'

import CheckboxField from '../CheckboxField'


storiesOf('Components|Forms/Checkbox', module)
  .add('CheckboxField', withAddons({
    path: 'components/CheckboxField/index.stories.js',
    component: CheckboxField,
  })(() => (
    <div className='container'>
      <DocHeader
        title='CheckboxField'
        description='For use with FinalForm. I agree to the terms...'
      />

      <InvertedMirror>
        <Form
          initialValues={{ salt: true, disabledChecked: true }}
          onSubmit={console.log}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                component={CheckboxField}
                name='salt'
                label='Salt'
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
                label='
                  This checkbox is disabled but checked
                '
              />
            </form>
          )}
        />
      </InvertedMirror>
    </div>
  )))

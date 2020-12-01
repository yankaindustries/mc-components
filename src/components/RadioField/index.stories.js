import React from 'react'
import { Form, Field } from 'react-final-form'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import InvertedMirror from '../../utils/InvertedMirror'

import RadioField from '../RadioField'


const RadioFieldStory = () => (
  <div className='container'>
    <DocHeader
      title='RadioField'
      description='For use with FinalForm. Remember multiple choice?'
    />

    <InvertedMirror>
    <Form
      onSubmit={() => {}}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
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
        </form>
      )}
    />
    </InvertedMirror>
  </div>
)


storiesOf('Components|Forms/Radio', module)
  .add('RadioField', withAddons({
    path: 'components/RadioField/index.stories.js',
    component: RadioField,
  })(() => (<RadioFieldStory />)))

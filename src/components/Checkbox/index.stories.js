import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import InvertedMirror from '../../utils/InvertedMirror'

import Checkbox from '../Checkbox'


class Story extends PureComponent {
  state = {
    test: true,
    another: false,
    last: false,
  }

  handleChange = name => (value) => {
    console.log(name, value)
    this.setState(() => ({ [name]: value }))
  }

  isChecked = name =>
    this.state[name]

  render () {
    return (
      <div className='container'>
        <DocHeader
          title='Checkbox'
          description='Remember multiple choice?'
        />

        <InvertedMirror>
          <Checkbox
            onChange={this.handleChange('test')}
            checked={this.isChecked('test')}
            label='Pick me'
          />
          <Checkbox
            onChange={this.handleChange('another')}
            checked={this.isChecked('another')}
            label='And me!'
          />
          <Checkbox
            onChange={this.handleChange('last')}
            checked={this.isChecked('last')}
            label='Pick all of us, we are checkboxes!'
          />
        </InvertedMirror>
      </div>
    )
  }
}


storiesOf('Components|Forms/Checkbox', module)
  .add('Checkbox', withAddons({
    path: 'components/Checkbox/index.stories.js',
    component: Checkbox,
  })(() => <Story />))

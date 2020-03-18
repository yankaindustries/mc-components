import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import InvertedMirror from '../../utils/InvertedMirror'

import Radio from '../Radio'


class Story extends PureComponent {
  state = {
    active: null,
  }

  handleChange = active => () => {
    this.setState({ active })
  }

  isChecked = name =>
    this.state.active === name

  render () {
    return (
      <div className='container'>
        <DocHeader
          title='Radio'
          description='Remember multiple choice?'
        />

        <InvertedMirror>
          <Radio
            onChange={this.handleChange('test')}
            checked={this.isChecked('test')}
            label='Pick me'
          />
          <Radio
            onChange={this.handleChange('another')}
            checked={this.isChecked('another')}
            label='No, pick me!'
          />
          <Radio
            onChange={this.handleChange('last')}
            checked={this.isChecked('last')}
            label='Forget these guys, you know you wanna pick me'
          />
        </InvertedMirror>
      </div>
    )
  }
}


storiesOf('Components|Forms/Radio', module)
  .add('Radio', withAddons({
    path: 'components/Radio/index.stories.js',
    component: Radio,
  })(() => <Story />))

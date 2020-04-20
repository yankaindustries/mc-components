import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import InvertedMirror from '../../utils/InvertedMirror'
import PropExample from '../../utils/PropExample'

import AppStore from '../AppStore'


class AppStoreStory extends PureComponent {
  render () {
    return (
      <div className='container'>
        <DocHeader
          title='AppStore'
          description='Simple component to render App Store buttons'
        />

        <DocSection title='Properties'>
          <InvertedMirror>
            <PropExample
              name='kind'
              type='string'
              description='Which App Store?'
            >
              <div className='row'>
                <div className='col-auto'>
                  <AppStore kind='apple' />
                </div>

                <div className='col-auto'>
                  <AppStore kind='google' />
                </div>

                <div className='col-auto'>
                  <AppStore kind='amazon' />
                </div>

                <div className='col-auto'>
                  <AppStore kind='roku' />
                </div>
              </div>
            </PropExample>
          </InvertedMirror>
        </DocSection>
      </div>
    )
  }
}

storiesOf('Components|AppStore', module)
  .add('Summary', withAddons({
    path: 'components/AppStore/index.stories.js',
    component: AppStore,
  })(() => <AppStoreStory />))

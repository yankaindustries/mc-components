import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import Loader from '.'

class LoaderStory extends PureComponent {

  render () {
    return (
      <div className='container'>
        <DocHeader
          title='Loader'
          description='A super basic content loading animation.'
        />

        <DocSection title='Demo'>
          <div className='row'>
            <div className='col-2'>
              <Loader 
                color={"#cc0000"}
              />
            </div>
          </div>
        </DocSection>
      </div>
    )
  }
}

storiesOf('Components|Loader', module)
  .add('Summary', withAddons({
    path: 'components/Loader/index.stories.js',
    component: Loader,
  })(() => <LoaderStory />))

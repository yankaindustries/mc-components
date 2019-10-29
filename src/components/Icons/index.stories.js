import React from 'react'
import { storiesOf } from '@storybook/react'
import { keys, omit } from 'lodash'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import InvertedMirror from '../../utils/InvertedMirror'
import PropExample from '../../utils/PropExample'
import CodeExample from '../../utils/CodeExample'

import Icon from '../Icons'
import { ICONS } from './icons'
import { DEPRECATED } from './deprecated'


const icons = omit(ICONS, DEPRECATED)


storiesOf('Components|Icons', module)
  .add('Summary', withAddons({
    path: 'components/Icons/index.stories.js',
    component: Icon,
  })(() => (
    <div className='container'>
      <DocHeader
        title='Icon'
        description='Hieroglyphics for the modern age.'
      />
      <DocSection title='Sizing'>
        <p className='mc-mb-5'>
          Use the supporting className format
          <span className='mc-code mc-mx-2'>
            className=&apos;mc-icon--x&apos;
          </span>
          where
          <span className='mc-code mc-mx-2'>
            x
          </span>
          is a value between 1-16 correlating to the&nbsp;
          <a
            href='?path=/story/foundation-scale--summary'
            className='mc-text--link'
          >
            scale
          </a>.
        </p>

        <CodeExample>
          <div className='row'>
            <div className='col-auto'>
              <h5 className='mc-text-h5'>
                <span className='mc-code'>mc-icon--1</span>
              </h5>
              <Icon kind='star' className='mc-icon--1' />
            </div>
            <div className='col-auto'>
              <h5 className='mc-text-h5'>
                <span className='mc-code'>mc-icon--5</span>
              </h5>
              <Icon kind='star' className='mc-icon--5' />
            </div>
            <div className='col-auto'>
              <h5 className='mc-text-h5'>
                <span className='mc-code'>mc-icon--9</span>
              </h5>
              <Icon kind='star' className='mc-icon--9' />
            </div>
            <div className='col-auto'>
              <h5 className='mc-text-h5'>
                <span className='mc-code'>mc-icon--10</span>
              </h5>
              <Icon kind='star' className='mc-icon--10' />
            </div>
          </div>
        </CodeExample>
      </DocSection>

      <DocSection title='Properties'>
        <InvertedMirror>
          <PropExample
            name='kind'
            type='string'
            description='Choose the icon you would like to render.'
          >
            <div className='row'>
              {keys(icons).map(kind =>
                <div key={kind} className='col-3 mc-text--center'>
                  <Icon kind={kind} />
                  <br />
                  <span className='mc-text-x-small mc-opacity--muted mc-text--nowrap'>
                    {kind}
                  </span>
                </div>,
              )}
            </div>
          </PropExample>
        </InvertedMirror>
      </DocSection>
    </div>
  )))

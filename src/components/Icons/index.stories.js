import React from 'react'
import { storiesOf } from '@storybook/react'
import { keys, omit } from 'lodash'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'
import InvertedMirror from '../../utils/InvertedMirror'
import PropExample from '../../utils/PropExample'

import Icon from '../Icons'
import {
  DEPRECATED,
  ICONS,
} from './constants'


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
                  <span className='mc-text-x-small mc-text--muted mc-text--nowrap'>
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

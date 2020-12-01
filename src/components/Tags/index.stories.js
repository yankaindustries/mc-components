import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import InvertedMirror from '../../utils/InvertedMirror'

import Tags from '../Tags'
import FormGroup from '../FormGroup'

const TagsStory = () => {
  const [collection, setCollection] = useState(['bob@google.com', 'jill@apple.com'])

  return (
    <div className='container'>
      <DocHeader
        title='Tags'
        description="Type out a list, it's FUN!"
      />

      <InvertedMirror>
        <FormGroup
          label='Tags'
          help={
            <p>
              Use <kbd>tab</kbd>, <kbd>enter</kbd>, <kbd>comma</kbd>
              , or <kbd>semicolon</kbd> to finalize your text as a tag.
            </p>
          }
        >
          <Tags collection={collection} onChange={setCollection} />
        </FormGroup>


      </InvertedMirror>
    </div>
  )
}

storiesOf('Components|Forms/Tags', module)
  .add('Tags', withAddons({
    path: 'components/Tags/index.stories.js',
    component: Tags,
  })(() => <TagsStory />))

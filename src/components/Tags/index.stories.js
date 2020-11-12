import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import InvertedMirror from '../../utils/InvertedMirror'

import Tags from '../Tags'


const TagsStory = () => {
  const [collection, setCollection] = useState(['bob@google.com', 'jill@apple.com'])

  return (
    <div className='container'>
      <DocHeader
        title='Tags'
        description='Type out a list, it\s FUN!'
      />

      <InvertedMirror>
        <Tags collection={collection} onChange={setCollection} />
      </InvertedMirror>
    </div>
  )
}

storiesOf('Components|Forms/Tags', module)
  .add('Tags', withAddons({
    path: 'components/Tags/index.stories.js',
    component: Tags,
  })(() => <TagsStory />))

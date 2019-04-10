import React from 'react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import PropExample from '../../utils/PropExample'


const Sizes = () =>
  <div className='container'>
    <DocHeader
      title='Typography - Sizes'
      description='Available heading and body size options.'
    />

    <PropExample name='.mc-text-h1'>
      <h1 className='mc-text-h1'>
        Gordon Ramsay
      </h1>
    </PropExample>

    <PropExample name='.mc-text-h2'>
      <h2 className='mc-text-h2'>
        All-Access Pass
      </h2>
    </PropExample>

    <PropExample name='.mc-text-h3'>
      <h3 className='mc-text-h3'>
        Now Available
      </h3>
    </PropExample>

    <PropExample name='.mc-text-h4'>
      <h4 className='mc-text-h4'>
        Diane Von Furstenburg
      </h4>
    </PropExample>

    <PropExample name='.mc-text-h5'>
      <h5 className='mc-text-h5'>
        Teaches Fashion
      </h5>
    </PropExample>

    <PropExample name='.mc-text-h6'>
      <h6 className='mc-text-h6'>
        Account Settings
      </h6>
    </PropExample>

    <PropExample name='.mc-text-h7'>
      <h6 className='mc-text-h7'>
        Account Settings
      </h6>
    </PropExample>

    <PropExample name='.mc-text-h8'>
      <h6 className='mc-text-h8'>
        Account Settings
      </h6>
    </PropExample>

    <PropExample name='.mc-text-large'>
      <p className='mc-text-large'>
        Online classes taught by the world&#39;s greatest minds.<br />
        Now get unlimited access to all classes.
      </p>
    </PropExample>

    <PropExample name='body'>
      <p>
        Online classes taught by the world&#39;s greatest minds.<br />
        Now get unlimited access to all classes.
      </p>
    </PropExample>

    <PropExample name='.mc-text-small'>
      <p className='mc-text-small'>
        Online classes taught by the world&#39;s greatest minds.<br />
        Now get unlimited access to all classes.
      </p>
    </PropExample>

    <PropExample name='.mc-text-x-small'>
      <p className='mc-text-x-small'>
        Online classes taught by the world&#39;s greatest minds.<br />
        Now get unlimited access to all classes.
      </p>
    </PropExample>
  </div>


export default withAddons({
  path: 'foundation/typography/sizes.stories.js',
})(() => <Sizes />)

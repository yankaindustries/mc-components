import React from 'react'
import { storiesOf } from '@storybook/react'

import Video from './Video'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'


// 5747090186001

// <BrightcoveVideo
//   videoId='6116577124001'
//   fit='cover'
//   controls
// />


storiesOf('Components|Video', module)
  .add('Summary', withAddons({
    path: 'components/VideoPlayer/index.stories.js',
  })(() =>
    <div className='container'>
      <DocHeader
        title='Video'
        description='Video, just the player...'
        experimental
      />

      <Video poster='https://cf-images.us-east-1.prod.boltdns.net/v1/static/5344802162001/be97f99b-ea1d-40fb-aaf0-4c66555a9884/3d3d0d2a-3cb5-490d-a93e-a8c6d72ec882/1920x1080/match/image.jpg'>
        <source src='https://bcbolt446c5271-a.akamaihd.net/media/v1/pmp4/static/clear/5344802162001/be97f99b-ea1d-40fb-aaf0-4c66555a9884/2bdff7ea-e38f-44cd-974d-2dc9e8a9526a/main.mp4?akamai_token=exp=1596141346~acl=/media/v1/pmp4/static/clear/5344802162001/be97f99b-ea1d-40fb-aaf0-4c66555a9884/2bdff7ea-e38f-44cd-974d-2dc9e8a9526a/main.mp4*~hmac=7f6c9999dce840eab8eed330be943d2e26b191c4e45c41ec67d782d232fe6ffd' type='video/mp4' />
      </Video>
    </div>,
  ))

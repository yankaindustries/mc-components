import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Carousel from '../Carousel'

const defaultSettings = {
  variableWidth: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
}

const carouselDataSource = [
  { id: 1, image: 'https://d21zaivk6zzt6k.cloudfront.net/images/1605/original/1523379082-Slide_Thumb.jpg?1523379082' },
  { id: 2, image: 'https://d21zaivk6zzt6k.cloudfront.net/images/1605/original/1523379082-Slide_Thumb.jpg?1523379082' },
  { id: 3, image: 'https://d21zaivk6zzt6k.cloudfront.net/images/1605/original/1523379082-Slide_Thumb.jpg?1523379082' },
  { id: 4, image: 'https://d21zaivk6zzt6k.cloudfront.net/images/1605/original/1523379082-Slide_Thumb.jpg?1523379082' },
  { id: 5, image: 'https://d21zaivk6zzt6k.cloudfront.net/images/1605/original/1523379082-Slide_Thumb.jpg?1523379082' },
  { id: 6, image: 'https://d21zaivk6zzt6k.cloudfront.net/images/1605/original/1523379082-Slide_Thumb.jpg?1523379082' },
  { id: 7, image: 'https://d21zaivk6zzt6k.cloudfront.net/images/1605/original/1523379082-Slide_Thumb.jpg?1523379082' },
]

storiesOf('components|Carousel', module)
  .add(
    'default',
    withInfo()(() => (
      <Carousel
        slidesDataSource={carouselDataSource}
        settings={defaultSettings}
      />
    )),
  )

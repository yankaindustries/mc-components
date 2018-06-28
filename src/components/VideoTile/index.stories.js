import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import shondaRhimesThumbnail from '../../assets/shonda-rhimes-video.png'

import VideoTile from '../VideoTile'
import TileCaption from '../TileCaption'

const infoProps = {
  inline: true,
  header: false,
}

storiesOf('VideoTile', module)
  .add('VideoTile',
    withInfo({ ...infoProps })(() =>
      <div style={{
        position: 'relative',
        width: 350,
        height: 214,
        margin: 'auto',
      }}>
        <VideoTile
          showPlayIcon
          showBackgroundGradient={false}
          brightcoveVideoId='5707329402001'
          progress={50}
          imageUrl={shondaRhimesThumbnail}
          saveVideoProgress={() => { }}
          slug='/chapter/introduction'
        >
          {() =>
            <div className='chapter-info'>
              <p className='chapter-info__chapter-title'>Creating Memorable Characters: Part 1</p>
              <a href={'/instructors/instructor_path'}>
                <h3 className='chapter-info__course-title'>Shonda Rhimes</h3>
              </a>
            </div>
          }
        </VideoTile>
      </div>,
    ),
  )
  .add('VideoTile - Start the class',
    withInfo({ ...infoProps })(() =>
      <div style={{
        position: 'relative',
        width: 350,
        height: 214,
        margin: 'auto',
      }}>
        <VideoTile
          showPlayIcon={false}
          showBackgroundGradient
          slug={'/course/slug'}
          brightcoveVideoId='5707329402001'
          progress={50}
          imageUrl={shondaRhimesThumbnail}
        >
          {(isScaled, reverseScale) =>
            <Fragment>
              {isScaled &&
                <a
                  style={{ transform: `translate(-50%, 0) scale(${reverseScale})` }}
                  className='c-button c-button--opacity'
                  href={'/courses/slug'}
                >
                  START THE CLASS
                </a>
              }
              <TileCaption
                title='Instructor'
                subtitle='Teaches Something'
                position={isScaled ? 'below-centered' : 'horizontal-centered'}
                animated
                style={{ transform: `scale(${reverseScale})` }}
              />
            </Fragment>
          }
        </VideoTile>
      </div>,
    ),
  )

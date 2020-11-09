import React from 'react'
import { storiesOf } from '@storybook/react'

import withAddons from '../../utils/withAddons'
import DocHeader from '../../utils/DocHeader'
import DocSection from '../../utils/DocSection'

import Tile from '../Tile'
import TileImage from '../TileImage'
import TileOverlay from '../TileOverlay'
import TileCaption from '../TileCaption'
import Nameplate from './'

import aw from './assets/aw.png'
import de from './assets/de.png'
import jb from './assets/jb.png'
import lmrc from './assets/lmrc.png'
import mco from './assets/mco.png'
import rp from './assets/rp.png'
import tk from './assets/tk.png'
import th from './assets/th.png'


const instructors = [
  {
    nameplate: aw,
    course: 'Teaches Creativity and Leadership',
    image: 'https://www.masterclass.com/course-images/images/3500/original/1570652247-awi_primary_2x3.jpg',
  },
  {
    nameplate: de,
    course: 'Teaches Music for Film',
    image: 'https://www.masterclass.com/course-images/images/4798/original/1572490008-DE_cinematic_12x5.jpg',
  },
  {
    nameplate: jb,
    course: 'Teaches Writing',
    image: 'https://www.masterclass.com/course-images/images/3231/original/1570214962-JBL_primary_2x3.jpg',
  },
  {
    nameplate: lmrc,
    course: 'Teach Mixology',
    image: 'https://www.masterclass.com/course-images/images/10616/original/1583376698-primary_2x3.jpg',
  },
  {
    nameplate: mco,
    course: 'Teaches Ballet Technique and Artistry',
    image: 'https://www.masterclass.com/course-images/images/6897/original/1575263998-MCo_primary_2x3.jpg',
  },
  {
    nameplate: rp,
    course: 'Teaches Self-Expression and Authenticity',
    image: 'https://www.masterclass.com/course-images/images/10169/original/1582163671-primary_2x3.jpg',
  },
  {
    nameplate: th,
    course: 'Teaches Skateboarding',
    image: 'https://www.masterclass.com/course-images/images/11366/original/1592437259-TH_primary_2x3.jpg',
    hero: 'https://www.masterclass.com/course-images/images/11367/original/1592437260-TH_secondary_16x9.jpg',
  },
  {
    nameplate: tk,
    course: 'Teaches Cooking Techniques I: Vegetables, Pasta, and Eggs',
    image: 'https://www.masterclass.com/course-images/attachments/udbTiQSdHktKbbKRrzFBTEGd?width=200&height=300&fit=cover&dpr=2',
  },
]

const NameplateStory = () =>
  <div className='container'>
    <DocHeader
      title='Nameplate'
      description="People got names, let's show them off"
    />

    <DocSection title='Hero'>
      <Tile aspectRatio='16x9' className='mc-corners--rounded' style={{ overflow: 'hidden' }}>
        <TileImage imageUrl={instructors[6].hero} />
        <TileCaption position='center bottom' padding={10}>
            <div className='row'>
              <div className='offset-3 col-6'>
                <Nameplate src={instructors[6].nameplate} />
              </div>
            </div>
        </TileCaption>
      </Tile>
    </DocSection>

    <DocSection title='Avatars'>
      <div className='row mc-text--center'>
        {instructors.map(instructor =>
          <div className='col-2' key={instructor.course}>
            <Tile aspectRatio='1x1' className='mc-corners--circle' style={{ overflow: 'hidden' }}>
              <TileImage imageUrl={instructor.image} />
              <TileOverlay type='solid' />
              <TileCaption position='center center' padding={4}>
                <Nameplate src={instructor.nameplate} />
              </TileCaption>
            </Tile>
          </div>,
        )}
      </div>
    </DocSection>

    <DocSection title='Centered'>
      <div className='row mc-text--center'>
        {instructors.map(instructor =>
          <div className='col-4' key={instructor.course}>
            <Tile aspectRatio='4x3' className='mc-corners--rounded' style={{ overflow: 'hidden' }}>
              <TileOverlay type='solid' />
              <TileCaption position='center center' padding={4}>
                <div className='row'>
                  <div className='offset-1 col-10'>
                    <Nameplate
                      src={instructor.nameplate}
                      separator
                      subText={instructor.course}
                    />
                  </div>
                </div>
              </TileCaption>
            </Tile>
          </div>,
        )}
      </div>
    </DocSection>

    <DocSection title='Bottom'>
      <div className='row mc-text--center'>
        {instructors.map(instructor =>
          <div className='col-4' key={instructor.course}>
            <Tile aspectRatio='2x3' className='mc-corners--rounded' style={{ overflow: 'hidden' }}>
              <TileImage imageUrl={instructor.image} />
              <TileOverlay />
              <TileCaption position='center bottom' padding={4}>
                <div className='row'>
                  <div className='offset-1 col-10'>
                    <Nameplate
                      src={instructor.nameplate}
                      separator
                      subText={instructor.course}
                    />
                  </div>
                </div>
              </TileCaption>
            </Tile>
          </div>,
        )}
      </div>
    </DocSection>

    <DocSection title='Dynamic Demo'>
      <div className='row mc-text--center'>
        <div
          className='col-12'
          key={instructors[7].course}
        >
          <Tile aspectRatio='4x3' className='mc-corners--rounded' style={{ overflow: 'hidden' }}>
            <TileOverlay type='solid' />
            <TileCaption position='center center' padding={4}>
              <div className='row'>
                <div className='offset-1 col-10'>
                  <Nameplate
                    src={instructors[7].nameplate}
                    subText={instructors[7].course}
                    separator
                  />
                </div>
              </div>
            </TileCaption>
          </Tile>
        </div>
      </div>
    </DocSection>
  </div>


storiesOf('Components|Nameplate', module)
  .add('Summary', withAddons({
    path: 'components/Nameplate/index.stories.js',
    component: Nameplate,
  })(() => <NameplateStory />))

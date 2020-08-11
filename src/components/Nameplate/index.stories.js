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
import jb from './assets/jb.png'
import lmrc from './assets/lmrc.png'
import mco from './assets/mco.png'
import rp from './assets/rp.png'
import th from './assets/th.png'


const instructors = [
  {
    nameplate: aw,
    course: 'Teaches Creativity and Leadership',
  },
  {
    nameplate: jb,
    course: 'Teaches Writing',
  },
  {
    nameplate: lmrc,
    course: 'Teach Mixology',
  },
  {
    nameplate: mco,
    course: 'Teaches Ballet',
  },
  {
    nameplate: rp,
    course: 'Teaches Self-Expression and Authenticity',
  },
  {
    nameplate: th,
    course: 'Teaches Skateboarding',
  },
]

const NameplateStory = () =>
  <div className='container'>
    <DocHeader
      title='Nameplate'
      description="People got names, let's show them off"
    />

    <DocSection title='Centered'>
      <div className='row mc-text--center'>
        {instructors.map(instructor =>
          <div className='col-4' key={instructor.course}>
            <Tile aspectRatio='16x9'>
              <TileOverlay type='solid' />
              <TileCaption position='center center'>
                <div className='row'>
                  <div className='offset-1 col-10'>
                    <Nameplate src={instructor.nameplate} separator />
                    <p className='mc-text-small'>{instructor.course}</p>
                  </div>
                </div>
              </TileCaption>
            </Tile>
          </div>,
        )}
      </div>
    </DocSection>

    <DocSection title='Fixed'>
      <div className='row mc-text--center'>
        {instructors.map(instructor =>
          <div className='col-4' key={instructor.course}>
            <Tile aspectRatio='2x3'>
              <TileImage imageUrl='https://placekitten.com/600/600' />
              <TileOverlay />
              <TileCaption position='center bottom' padding={9}>
                <div className='row'>
                  <div className='offset-1 col-10'>
                    <Nameplate src={instructor.nameplate} separator fixed />
                    <p className='mc-text-small mc-text--2-lines'>{instructor.course}</p>
                  </div>
                </div>
              </TileCaption>
            </Tile>
          </div>,
        )}
      </div>
    </DocSection>
  </div>


storiesOf('Components|Nameplate', module)
  .add('Summary', withAddons({
    path: 'components/Nameplate/index.stories.js',
    component: Nameplate,
  })(() => <NameplateStory />))

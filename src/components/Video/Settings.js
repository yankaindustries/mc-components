import React, { useContext } from 'react'

import { VideoContext } from './Video'

import Button from '../Button'
import Icon from '../Icons'
import Dropdown from '../Dropdown'
import DropdownToggle from '../DropdownToggle'
import DropdownContent from '../DropdownContent'
import DropdownHeader from '../DropdownHeader'
import DropdownBody from '../DropdownBody'


const Settings = () => {
  const {
    speed,
    setSpeed,
  } = useContext(VideoContext)

  return (
    <div className='mc-video__settings mc-video__control'>
      <Dropdown placement='top-end'>
        <DropdownToggle>
          <Button
            kind='link'
            size='small'
          >
            <Icon kind='cog' className='mc-icon mc-icon--4' />
          </Button>
        </DropdownToggle>

        <DropdownContent>
          <DropdownHeader className='mc-px-4 mc-py-2 mc-text-x-small mc-opacity--muted mc-mr-3'>
            Speed
          </DropdownHeader>

          <DropdownBody className='mc-px-4 mc-py-2'>
            <Button
              kind={speed === 0.5 ? 'secondary' : 'link'}
              onClick={() => setSpeed(0.5)}
            >
              0.5x
            </Button>

            <Button
              kind={speed === 1 ? 'secondary' : 'link'}
              onClick={() => setSpeed(1)}
            >
              1x
            </Button>

            <Button
              kind={speed === 2 ? 'secondary' : 'link'}
              onClick={() => setSpeed(2)}
            >
              2x
            </Button>
          </DropdownBody>
        </DropdownContent>
      </Dropdown>
    </div>
  )
}


export default Settings

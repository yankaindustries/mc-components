import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import Button from '../Button'

const infoProps = {
  inline: true,
  header: false,
}

const FacebookIcon = () => (
  <svg
    width='22'
    height='22'
    viewBox='0 0 22 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      opacity='0.2'
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 3.2C0 2.0799 0 1.51984 0.217987 1.09202C0.409734 0.715695 0.715695 0.409734 1.09202 0.217987C1.51984 0 2.0799 0 3.2 0H18.8C19.9201 0 20.4802 0 20.908 0.217987C21.2843 0.409734 21.5903 0.715695 21.782 1.09202C22 1.51984 22 2.0799 22 3.2V18.8C22 19.9201 22 20.4802 21.782 20.908C21.5903 21.2843 21.2843 21.5903 20.908 21.782C20.4802 22 19.9201 22 18.8 22H3.2C2.0799 22 1.51984 22 1.09202 21.782C0.715695 21.5903 0.409734 21.2843 0.217987 20.908C0 20.4802 0 19.9201 0 18.8V3.2Z'
      fill='black'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.91079 3.55442V5.68707H0V8.53061H2.91079V17.7721H5.82157V8.53061H9.02344L9.75113 5.68707H5.82157V3.55442C5.82157 3.12789 6.11265 2.84354 6.54927 2.84354H9.47687V0H6.54927C4.51172 0 2.91079 1.56395 2.91079 3.55442Z'
      transform='translate(6.37891 2.8252)'
      fill='white'
    />
  </svg>
)

storiesOf('components|Button', module)
  .add(
    'primary',
    withInfo({ ...infoProps })(() => (
      <Button
        onClick={action('clicked')}
        primary
      >
        Button
      </Button>
    )),
  )
  .add(
    'secondary',
    withInfo({ ...infoProps })(() => (
      <Button
        onClick={action('clicked')}
        secondary
      >
        Button
      </Button>
    )),
  )
  .add(
    'tertiary',
    withInfo({ ...infoProps })(() => (
      <Button
        onClick={action('clicked')}
        tertiary
      >
        Button
      </Button>
    )),
  )
  .add(
    'text button',
    withInfo({ ...infoProps })(() => (
      <Button
        onClick={action('clicked')}
        text
      >
        Button
      </Button>
    )),
  )
  .add(
    'link button',
    withInfo({ ...infoProps })(() => (
      <Button
        onClick={action('clicked')}
        link
      >
        Button
      </Button>
    )),
  )
  .add(
    'link muted button',
    withInfo({ ...infoProps })(() => (
      <Button
        onClick={action('clicked')}
        linkMuted
      >
        Button
      </Button>
    )),
  )
  .add(
    'with icon',
    withInfo({ ...infoProps })(() => (
      <Button
        className='c-button--facebook'
        Icon={<FacebookIcon />}
      >
        CONNECTED
      </Button>
    )),
  )
  .add(
    'loading',
    withInfo({ ...infoProps })(() => (
      <Button
        onClick={action('clicked')}
        primary
        loading
      >
        Button
      </Button>
    )),
  )
  .add(
    'full width',
    withInfo({ ...infoProps })(() => (
      <div style={{ width: '500px' }}>
        <Button
          onClick={action('clicked')}
          primary
          fullWidth
        >
          Button
        </Button>
      </div>
    )),
  )

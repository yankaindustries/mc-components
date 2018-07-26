import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'

import ClassCard from '../ClassCard'
import shondaRhimesThumbnail from '../../assets/shonda-rhimes-video.png'

const infoProps = {
  inline: true,
  header: false,
  propTables: [ClassCard],
}

const ClassCardProps = {
  teacherName: 'John Doe',
  teacherDescription: 'Teaches something',
  imageUrl: shondaRhimesThumbnail,
  imageAlt: 'Lorem ipsum',
  width: 500,
  height: 300,
}

storiesOf('components|ClassCard', module)
  .add('default',
    withInfo({ ...infoProps })(() => <ClassCard {...ClassCardProps} />),
  )
  .add('with action',
    withInfo({ ...infoProps })(() => (
      <ClassCard
        action={action('clicked')}
        {...ClassCardProps}
      />
    )),
  )
  .add('with href',
    withInfo({ ...infoProps })(() => (
      <ClassCard
        href='#'
        {...ClassCardProps}
      />
    )),
  )
  .add('with custom trigger',
    withInfo({ ...infoProps })(() => {
      const renderLinkComponent = ({ className, children }) => (
        <button
          onClick={action('clicked')}
          className={className}
          styles={{ display: 'block' }}
        >
          {children}
        </button>
      )

      renderLinkComponent.propTypes = ClassCard.renderTriggerComponentPropTypes

      return (
        <ClassCard
          renderLinkComponent={renderLinkComponent}
          {...ClassCardProps}
        />
      )
    }),
  )

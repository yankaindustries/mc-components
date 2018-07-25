import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withProps } from '../../utils/addon-props'

import ClassCard from '../ClassCard'
import shondaRhimesThumbnail from '../../assets/shonda-rhimes-video.png'


const ClassCardProps = {
  teacherName: 'John Doe',
  teacherDescription: 'Teaches something',
  imageUrl: shondaRhimesThumbnail,
  imageAlt: 'Lorem ipsum',
  width: 500,
  height: 300,
}

storiesOf('components|Tiles/ClassCard', module)
  .add('default', withProps(ClassCard)(() =>
    <ClassCard {...ClassCardProps} />,
  ))
  .add('with action', withProps(ClassCard)(() => (
    <ClassCard
      action={action('clicked')}
      {...ClassCardProps}
    />
  )))
  .add('with href', withProps(ClassCard)(() => (
    <ClassCard
      href='#'
      {...ClassCardProps}
    />
  )))
  .add('with custom trigger', withProps(ClassCard)(() => {
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
  }))

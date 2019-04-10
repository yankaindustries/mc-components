/* eslint-disable react/display-name */
import React, { Fragment } from 'react'

import SourceLink from '../SourceLink'


export const withSourceLink = path =>
  story =>
    context =>
      <Fragment>
        <SourceLink path={path} />
        {story(context)}
      </Fragment>

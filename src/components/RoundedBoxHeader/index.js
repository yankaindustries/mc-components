import React, { Fragment } from 'react'
import { string } from 'prop-types'

const RoundedBoxHeader = ({ subheader, header }) => (
  <Fragment>
    {subheader &&
      <h4 className='rounded-box__subheader'>{subheader}</h4>
    }
    {header &&
      <h2 className='rounded-box__header'>{header}</h2>
    }
  </Fragment>
)

RoundedBoxHeader.propTypes = {
  subheader: string,
  header: string,
}

export default RoundedBoxHeader

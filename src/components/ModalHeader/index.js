import React, { Fragment } from 'react'
import { string } from 'prop-types'

const ModalHeader = ({ subheader, header }) => (
  <Fragment>
    {subheader &&
      <h4 className='modal-header__subheader'>{subheader}</h4>
    }
    {header &&
      <h2 className='modal-header__header'>{header}</h2>
    }
  </Fragment>
)

ModalHeader.propTypes = {
  subheader: string,
  header: string,
}

export default ModalHeader

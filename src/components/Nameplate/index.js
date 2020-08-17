import React from 'react'
import PropTypes from 'prop-types'


const Nameplate = ({ src, separator, ...props }) =>
  <>
    <img src={src} className='mc-nameplate' {...props} />

    {separator &&
      <div className='mc-nameplate__separator' />
    }
  </>


Nameplate.propTypes = {
  src: PropTypes.string.isRequired,
  separator: PropTypes.bool,
}


export default Nameplate

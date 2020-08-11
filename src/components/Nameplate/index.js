import React from 'react'
import PropTypes from 'prop-types'


const Nameplate = ({ fixed, src, separator }) =>
  <div className={`mc-nameplate ${fixed ? 'mc-nameplate--fixed' : ''}`}>
    <div className='mc-nameplate__content'>
      <img src={src} className='mc-nameplate__image' />
    </div>

    {separator &&
      <div className='mc-nameplate__separator' />
    }
  </div>


Nameplate.propTypes = {
  fixed: PropTypes.bool,
  src: PropTypes.string.isRequired,
  separator: PropTypes.bool,
}


export default Nameplate

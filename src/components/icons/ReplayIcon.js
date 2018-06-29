

import React from 'react'
import { string, func } from 'prop-types'

const ReplayIcon = ({ color = '#dadada', onClick, className }) => (
  <div className={className} onClick={onClick}>
    <svg
      height='48'
      viewBox='0 0 48 48'
      width='48'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0 0h48v48H0z'
        fill='none'
      />
      <path
        fill={color}
        d='M24 10V2L14 12l10 10v-8c6.63 0 12 5.37 12 12s-5.37 12-12 12-12-5.37-12-12H8c0 8.84 7.16 16 16 16s16-7.16 16-16-7.16-16-16-16z'
      />
    </svg>
  </div>
)

ReplayIcon.propTypes = {
  onClick: func,
  color: string,
  className: string,
}

export default ReplayIcon

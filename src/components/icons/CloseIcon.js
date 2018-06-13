import React from 'react'
import { string, func } from 'prop-types'

const CloseIcon = ({ color = '#dadada', onClick, className }) => (
  <div className={className} onClick={onClick}>
    <svg
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      opacity='0.5'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.16895 6L0.172852 1.00488C-0.0576172 0.775391 -0.0576172 0.402344 0.172852 0.172852C0.40332 -0.0576172 0.774414 -0.0576172 1.00488 0.172852L6.00098 5.16699L10.9932 0.172852C11.2236 -0.0576172 11.5986 -0.0576172 11.8252 0.172852C12.0557 0.402344 12.0557 0.775391 11.8252 1.00488L6.8291 6L11.8252 10.9941C12.0557 11.2236 12.0557 11.5967 11.8252 11.8262C11.5986 12.0557 11.2236 12.0557 10.9932 11.8262L6.00098 6.83203L1.00488 11.8262C0.774414 12.0557 0.40332 12.0557 0.172852 11.8262C-0.0576172 11.5967 -0.0576172 11.2236 0.172852 10.9941L5.16895 6Z'
        transform='translate(1 1)'
        fill={color}
        stroke={color}
      />
    </svg>
  </div>
)

CloseIcon.propTypes = {
  onClick: func.isRequired,
  color: string,
  className: string,
}

export default CloseIcon

import React from 'react'

const SvgArrowDown = props => (
  <svg width='2em' height='2em' viewBox='0 0 24 24' fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M18.53 11.845a.75.75 0 010 1.06l-6 6a.75.75 0 01-1.06 0l-6-6a.75.75 0 111.06-1.06l5.47 5.47 5.47-5.47a.75.75 0 011.06 0z'
      fill='currentColor'
    />
    <path
      d='M11.977 17.75V6.25'
      stroke='currentColor'
      strokeWidth={1.5}
      strokeLinecap='round'
    />
  </svg>
)

export default SvgArrowDown

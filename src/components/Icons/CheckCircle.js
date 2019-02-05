import React from 'react'

const SvgCheckCircle = props => (
  <svg width='2em' height='2em' viewBox='0 0 52 52' fill='none' {...props}>
    <path
      clipRule='evenodd'
      d='M26 50c13.255 0 24-10.745 24-24S39.255 2 26 2 2 12.745 2 26s10.745 24 24 24z'
      stroke='currentColor'
      strokeWidth={3}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M35.613 17.426L21.949 32.15l-5.657-4.815c-.523-.447-1.375-.447-1.898 0-.525.448-.525 1.171 0 1.615l6.713 5.714c.252.215.595.336.95.336.391 0 .782-.15 1.044-.425L37.7 18.86c.467-.491.377-1.211-.2-1.605-.578-.4-1.424-.322-1.888.17z'
      fill='currentColor'
      stroke='currentColor'
    />
  </svg>
)

export default SvgCheckCircle

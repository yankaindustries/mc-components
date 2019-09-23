import React from 'react'

const SvgPlayCircle = props => (
  <svg viewBox='0 0 40 40' width='2em' height='2em' {...props}>
    <g fill='none' fillRule='evenodd'>
      <circle cx={20} cy={20} r={18.5} stroke='currentColor' strokeWidth={3} />
      <path
        d='M27.29 19.662l-9.421-5.71a1.119 1.119 0 00-.947-.078c-.308.116-.504.357-.504.622v11.42c0 .265.196.507.504.623a1.123 1.123 0 00.947-.079l9.42-5.71c.217-.13.343-.331.343-.544 0-.212-.126-.413-.343-.544z'
        fill='currentColor'
      />
    </g>
  </svg>
)

export default SvgPlayCircle

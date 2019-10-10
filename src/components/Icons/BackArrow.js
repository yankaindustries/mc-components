import React from 'react'

const SvgBackArrow = props => (
  <svg width='2em' height='2em' viewBox='0 0 5 9' fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.63 9a.374.374 0 01-.262-.105l-4.26-4.14a.355.355 0 010-.51l4.26-4.14c.144-.14.379-.14.523 0a.353.353 0 010 .51L.894 4.5l3.997 3.885a.353.353 0 010 .51A.374.374 0 014.63 9z'
      fill='currentColor'
    />
    <path
      d='M4.63 9a.374.374 0 01-.262-.105l-4.26-4.14a.355.355 0 010-.51l4.26-4.14c.144-.14.379-.14.523 0a.353.353 0 010 .51L.894 4.5l3.997 3.885a.353.353 0 010 .51A.374.374 0 014.63 9'
      stroke='currentColor'
      strokeWidth={0.5}
    />
  </svg>
)

export default SvgBackArrow

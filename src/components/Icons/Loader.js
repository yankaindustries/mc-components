import React from 'react'

const SvgLoader = props => (
  <svg width='2em' height='2em' viewBox='0 0 24 24' fill='none' {...props}>
    <path
      opacity={0.3}
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 6.75a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zM5.25 12a6.75 6.75 0 1113.5 0 6.75 6.75 0 01-13.5 0z'
      fill='currentColor'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.25 6a.75.75 0 01.75-.75A6.75 6.75 0 0118.75 12a.75.75 0 01-1.5 0c0-2.9-2.35-5.25-5.25-5.25a.75.75 0 01-.75-.75z'
      fill='currentColor'
    />
  </svg>
)

export default SvgLoader

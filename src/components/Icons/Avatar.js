import React from 'react'

const SvgAvatar = props => (
  <svg width='2em' height='2em' viewBox='0 0 24 24' fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.648 12.372a.75.75 0 0 1-.27 1.026A5.32 5.32 0 0 0 6.75 18a.75.75 0 0 1-1.5 0 6.82 6.82 0 0 1 3.372-5.898.75.75 0 0 1 1.026.27zm4.704 0a.75.75 0 0 1 1.026-.27A6.82 6.82 0 0 1 18.75 18a.75.75 0 0 1-1.5 0 5.32 5.32 0 0 0-2.628-4.602.75.75 0 0 1-.27-1.026z'
      fill='currentColor'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 6.75a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-4.5 3a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z'
      fill='currentColor'
    />
  </svg>
)

export default SvgAvatar

import React from 'react'

const SvgAvatar = props => (
  <svg width='2em' height='2em' viewBox='0 0 24 24' fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.648 12.372a.75.75 0 01-.27 1.026A5.32 5.32 0 006.75 18a.75.75 0 01-1.5 0 6.82 6.82 0 013.372-5.898.75.75 0 011.026.27zm4.704 0a.75.75 0 011.026-.27A6.82 6.82 0 0118.75 18a.75.75 0 01-1.5 0 5.32 5.32 0 00-2.628-4.602.75.75 0 01-.27-1.026z'
      fill='currentColor'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 6.75a3 3 0 100 6 3 3 0 000-6zm-4.5 3a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z'
      fill='currentColor'
    />
  </svg>
)

export default SvgAvatar

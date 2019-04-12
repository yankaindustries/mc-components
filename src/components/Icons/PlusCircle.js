import React from 'react'

const SvgPlusCircle = props => (
  <svg width='2em' height='2em' viewBox='0 0 24 24' fill='none' {...props}>
    <circle cx={12} cy={12} r={11} stroke='currentColor' strokeWidth={2} />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.61 12c0-.46.373-.833.833-.833h2.724V8.443a.833.833 0 1 1 1.666 0v2.724h2.724a.833.833 0 0 1 0 1.666h-2.724v2.724a.833.833 0 0 1-1.666 0v-2.724H8.443A.833.833 0 0 1 7.61 12z'
      fill='currentColor'
    />
  </svg>
)

export default SvgPlusCircle

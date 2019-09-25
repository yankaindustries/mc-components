import React from 'react'

const SvgCreditCard = props => (
  <svg fill='none' height='2em' viewBox='0 0 24 24' width='2em' {...props}>
    <rect fill='#dbdde1' height={16} rx={2} width={22} x={1} y={4} />
    <rect fill='currentColor' height={4} rx={1} width={6} x={3} y={6} />
    <rect fill='#949aa4' height={2} rx={1} width={18} x={3} y={14} />
  </svg>
)

export default SvgCreditCard

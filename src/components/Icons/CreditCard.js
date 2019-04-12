import React from 'react'

const SvgCreditCard = props => (
  <svg width='2em' height='2em' viewBox='0 0 24 24' fill='none' {...props}>
    <rect x={1} y={4} width={22} height={16} rx={2} fill='#DBDDE1' />
    <rect x={3} y={6} width={6} height={4} rx={1} fill='#fff' />
    <rect x={3} y={14} width={18} height={2} rx={1} fill='#949AA4' />
  </svg>
)

export default SvgCreditCard

import React from 'react'

const SvgPlayCircle = props => (
  <svg fill='none' height='2em' viewBox='0 0 25 25' width='2em' {...props}>
    <circle cx={12.938} cy={12.938} fill='#191c21' opacity={0.6} r={12.063} />
    <path
      clipRule='evenodd'
      d='M17.294 12.774l-5.67-3.679a.634.634 0 00-.57-.05c-.186.075-.304.23-.304.401v7.358c0 .17.118.326.304.401a.636.636 0 00.57-.05l5.67-3.68a.423.423 0 00.206-.35.423.423 0 00-.206-.35z'
      fill='#fff'
      fillRule='evenodd'
    />
  </svg>
)

export default SvgPlayCircle

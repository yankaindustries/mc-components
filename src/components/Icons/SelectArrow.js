import React from 'react'
import { bool } from 'prop-types'


const SelectArrow = ({ rotate = false }) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    style={{
      transform: `rotate(${rotate ? 180 : 0}deg)`,
    }}
  >
    <rect width='24' height='24' fill='black' fillOpacity='0'/>
    <path fillRule='evenodd' clipRule='evenodd' d='M5.46967 8.84467C5.76256 8.55178 6.23744 8.55178 6.53033 8.84467L12 14.3143L17.4697 8.84467C17.7626 8.55178 18.2374 8.55178 18.5303 8.84467C18.8232 9.13756 18.8232 9.61244 18.5303 9.90533L12.5303 15.9053C12.2374 16.1982 11.7626 16.1982 11.4697 15.9053L5.46967 9.90533C5.17678 9.61244 5.17678 9.13756 5.46967 8.84467Z' fill='#272C33'/>
  </svg>
)

SelectArrow.propTypes = {
  rotate: bool,
}

export default SelectArrow

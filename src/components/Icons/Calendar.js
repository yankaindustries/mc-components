import React from 'react'

const SvgCalendar = props => (
  <svg width='2em' height='2em' viewBox='0 0 24 24' fill='none' {...props}>
    <path
      d='M12 11.2a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zM8 10.4a.8.8 0 1 0 1.6 0 .8.8 0 0 0-1.6 0zM12 14.4a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zM8 13.6a.8.8 0 1 0 1.6 0 .8.8 0 0 0-1.6 0zM15.2 11.2a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z'
      fill='currentColor'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.8 4a.8.8 0 0 1 .8.8v.8h4.8v-.8a.8.8 0 0 1 1.6 0v.8h1.6A2.4 2.4 0 0 1 20 8v9.6a2.4 2.4 0 0 1-2.4 2.4H6.4A2.4 2.4 0 0 1 4 17.6V8a2.4 2.4 0 0 1 2.4-2.4H8v-.8a.8.8 0 0 1 .8-.8zM6.4 7.2a.8.8 0 0 0-.8.8v9.6a.8.8 0 0 0 .8.8h11.2a.8.8 0 0 0 .8-.8V8a.8.8 0 0 0-.8-.8H6.4z'
      fill='currentColor'
    />
  </svg>
)

export default SvgCalendar

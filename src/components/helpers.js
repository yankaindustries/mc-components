import { Children, cloneElement } from 'react'
import { isFunction } from 'lodash'

export const parseInputErrors = (error) => {
  if (!error) {
    return undefined
  }
  if (Array.isArray(error)) {
    return error[0]
  }
  return error
}

export const NumberToPX = value => (
  typeof value === 'number' ? `${value}px` : value
)

export const closeFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen()
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen()
  }
}

export const FormatClassTitle = (title = '', instructorName = '') => {
  if (title.toLowerCase().indexOf(instructorName.toLowerCase()) === -1) {
    return title
  }
  return title
    .trim()
    .slice(instructorName.length)
    .trim()
}

export const renderChildren = (children, props) => {
  if (isFunction(children)) {
    return children(props)
  }

  return Children.map(children, child => cloneElement(child, props))
}

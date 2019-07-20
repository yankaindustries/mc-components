import { Children, cloneElement } from 'react'
import { isFunction } from 'lodash'

export const ASPECT_RATIOS = [
  'auto',
  '1x1',
  '2x3',
  '3x4',
  '4x3',
  '9x16',
  '16x9',
  '21x9',
]

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

  const results = Children.map(children, child =>
    cloneElement(child, {
      ...child.props,
      ...props,
      className: `${child.props.className || ''} ${props.className || ''}`,
    }),
  )

  return results
}


export const responsiveValues = ({ gteLG, gteMD, gteSM }, lg, md, sm, xs) => {
  if (gteLG) {
    return lg
  }

  if (gteMD) {
    return md
  }

  if (gteSM) {
    return sm
  }

  return xs || sm || md || lg
}

export const getClosest = (elem, selector) => {
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector
  }

  let check = elem

  // Get closest match
  for (; check && check !== document; check = check.parentNode) {
    if (check.matches(selector)) return check
  }

  return null
}

export default {
  closeFullscreen,
  FormatClassTitle,
  getClosest,
  NumberToPX,
  parseInputErrors,
  renderChildren,
  responsiveValues,
}

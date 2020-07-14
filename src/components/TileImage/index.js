import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { PROP_TYPE_CHILDREN } from '../constants'

const TileImage = ({ className, image, imageUrl }) => {
  const classes = cn('mc-tile-image', className)
  return image
    ? React.cloneElement(image, { className: classes })
    : <img className={classes} src={imageUrl} />
}

TileImage.propTypes = {
  className: PropTypes.string,
  children: PROP_TYPE_CHILDREN,
  image: PropTypes.node,
  imageUrl: PropTypes.string,
}

TileImage.defaultProps = {
  className: '',
}

export default TileImage

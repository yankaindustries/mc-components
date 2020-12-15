import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Image from '../Image'

const TileImage = ({ className, image, imageUrl }) => {
  const classes = cn('mc-tile-image', className)
  return image
    ? React.cloneElement(image, { className: classes })
    : <Image className={classes} src={imageUrl} />
}

TileImage.propTypes = {
  className: PropTypes.string,
  image: PropTypes.node,
  imageUrl: PropTypes.string,
}

TileImage.defaultProps = {
  className: '',
}

export default TileImage

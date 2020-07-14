import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { PROP_TYPE_CHILDREN } from '../constants'


export default class TileImage extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PROP_TYPE_CHILDREN,
    image: PropTypes.node,
    imageUrl: PropTypes.string,
  }

  static defaultProps = {
    className: '',
  }

  render () {
    const {
      className,
      image,
      imageUrl,
    } = this.props

    const classes = cn('mc-tile-image', className)

    return image
      ? React.cloneElement(image, { className: classes })
      : <img className={classes} src={imageUrl} />
  }
}

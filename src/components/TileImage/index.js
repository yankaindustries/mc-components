import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Background from '../Background'
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
      children,
      image,
      imageUrl,
    } = this.props

    const classes = [
      'mc-tile__component',
      'mc-tile-image',
      className || '',
    ].join(' ')

    return (
      <div className={classes}>
        <Background
          className='mc-tile-image__image'
          element={image || <img src={imageUrl} />}
          fit='container'
          size='cover'
        >
          {children &&
            <div className='mc-tile-image__content'>
              {children}
            </div>
          }
        </Background>
      </div>
    )
  }
}

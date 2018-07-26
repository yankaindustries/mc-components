import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class TileImage extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    imageUrl: PropTypes.string.isRequired,
  }

  static defaultProps = {
    className: '',
  }

  render () {
    const {
      className,
      children,
      imageUrl,
    } = this.props

    const classes = [
      'mc-tile-image',
      className || '',
    ].join(' ')

    return (
      <div className={classes}>
        <div
          className='mc-tile-image__image background'
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
        {children &&
          <div className='mc-tile__content content'>
            {children}
          </div>
        }
      </div>
    )
  }
}

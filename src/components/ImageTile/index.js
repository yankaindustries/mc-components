import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

export default class ImageTile extends PureComponent {
  static propTypes = {
    aspectRatio: PropTypes.oneOf([
      '4x3',
      '16x9',
      '100x65',
      '1000x609',
      '519x187',
    ]),
    className: PropTypes.string,
    children: PropTypes.node,
    imageUrl: PropTypes.string.isRequired,
  }

  static defaultProps = {
    aspectRatio: '16x9',
    className: '',
  }

  backgroundStyle = (url) => {
    return
  }

  render () {
    const {
      aspectRatio,
      className,
      children,
      imageUrl,
    } = this.props

    const classNames = cn(
      'tile',
      `tile--${aspectRatio}`,
      { [className]: Boolean(className) },
    )

    return (
      <div className={classNames}>
        <div
          className='background'
          style={{ backgroundImage: `url('${imageUrl}')` }}
        />
        <div className='content'>
          {children}
        </div>
      </div>
    )
  }
}

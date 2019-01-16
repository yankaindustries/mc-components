import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class Tile extends PureComponent {
  static propTypes = {
    aspectRatio: PropTypes.oneOf([
      'auto',
      '1x1',
      '3x4',
      '4x3',
      '9x16',
      '16x9',
      '21x9',
    ]),
    children: PropTypes.node,
    className: PropTypes.string,
    naked: PropTypes.bool,
  }

  static defaultProps = {
    aspectRatio: '16x9',
    naked: false,
  }

  render () {
    const {
      aspectRatio,
      children,
      className,
      naked,
    } = this.props

    const classes = [
      'mc-tile',
      `mc-tile--${aspectRatio}`,
      naked ? 'mc-tile--naked' : '',
      className || '',
    ].join(' ')

    return (
      <div className={classes}>
        {children &&
          <div className='mc-tile__content content'>
            {children}
          </div>
        }
      </div>
    )
  }
}

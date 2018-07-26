import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class Tile extends PureComponent {
  static propTypes = {
    aspectRatio: PropTypes.oneOf([
      '4x3',
      '16x9',
      '100x65',
      '1000x609',
      '519x187',
    ]),
    children: PropTypes.node,
    className: PropTypes.string,
  }

  static defaultProps = {
    aspectRatio: '16x9',
  }

  render () {
    const {
      aspectRatio,
      children,
      className,
    } = this.props

    const classes = [
      'mc-tile',
      `mc-tile--${aspectRatio}`,
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

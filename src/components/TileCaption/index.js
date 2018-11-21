import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class TileCaption extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    className: PropTypes.string,
    position: PropTypes.oneOf([
      'left center',
      'left bottom',
      'left below',
      'center center',
      'center bottom',
      'center below',
      'right center',
      'right bottom',
      'right below',
    ]),
  }

  static defaultProps = {
    position: 'left bottom',
  }

  render () {
    const {
      children,
      className,
      position,
    } = this.props

    const [x, y] = position.split(' ')

    const classes = [
      'mc-tile__component',
      'mc-tile-caption',
      `mc-tile-caption--x-${x}`,
      `mc-tile-caption--y-${y}`,
      className || '',
    ].join(' ')

    return (
      <div className={classes}>
        {children &&
          <div className='mc-tile-caption__content'>
            {children}
          </div>
        }
      </div>
    )
  }
}

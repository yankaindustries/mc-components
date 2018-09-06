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
      'left bottom',
      'center bottom',
      'left below',
      'center below',
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

    const positionClasses =
      position.split(' ').map(pos => `mc-tile-caption--${pos}`)

    const classes = [
      'mc-tile__component',
      'mc-tile-caption',
      ...positionClasses,
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

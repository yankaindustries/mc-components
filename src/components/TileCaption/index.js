import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { PROP_TYPE_CHILDREN } from '../constants'

export default class TileCaption extends PureComponent {
  static propTypes = {
    children: PROP_TYPE_CHILDREN,
    className: PropTypes.string,
    flush: PropTypes.bool,
    position: PropTypes.oneOf([
      'left center',
      'left bottom',
      'left below',
      'center center',
      'center',
      'center bottom',
      'center below',
      'right center',
      'right bottom',
      'right below',
    ]),
    padding: PropTypes.number,
  }

  static defaultProps = {
    position: 'left bottom',
    padding: 3,
  }

  render () {
    const {
      children,
      className,
      flush,
      padding,
      position,
    } = this.props

    // eslint-disable-next-line prefer-const
    let [x, y] = position.split(' ')

    // Support shorthand for 'center' => 'center center'
    if (x === 'center' && !y) {
      y = 'center'
    }

    const classes = cn({
      [className]: className,
      'mc-tile__component': true,
      'mc-tile-caption': true,
      [`mc-tile-caption--x-${x}`]: true,
      [`mc-tile-caption--y-${y}`]: true,
      'mc-tile-caption--flush': flush,
    })

    return (
      <div className={classes}>
        {children &&
          <div className={`mc-tile-caption__content mc-p-${padding}`}>
            {children}
          </div>
        }
      </div>
    )
  }
}

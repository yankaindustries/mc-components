import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { ASPECT_RATIOS } from '../helpers'


export default class Tile extends PureComponent {
  static propTypes = {
    aspectRatio: PropTypes.oneOf(ASPECT_RATIOS),
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
      ...restProps
    } = this.props

    const classes = cn({
      [className]: className,
      'mc-tile': true,
      [`mc-tile--${aspectRatio}`]: aspectRatio,
      'mc-tile--naked': naked,
    })

    return (
      <div className={classes} {...restProps}>
        {children &&
          <div className='mc-tile__content content'>
            {children}
          </div>
        }
      </div>
    )
  }
}

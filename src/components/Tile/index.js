import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { ASPECT_RATIOS } from '../helpers'


export default class Tile extends PureComponent {
  static propTypes = {
    aspectRatio: PropTypes.oneOf(ASPECT_RATIOS),
    children: PropTypes.node,
    className: PropTypes.string,
    crop: PropTypes.bool,
  }

  static defaultProps = {
    aspectRatio: '16x9',
  }

  render () {
    const {
      aspectRatio,
      children,
      className,
      crop,
      ...restProps
    } = this.props

    const classes = cn({
      [className]: className,
      'mc-tile': true,
      [`mc-tile--${aspectRatio}`]: aspectRatio,
      'mc-tile--crop': crop,
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

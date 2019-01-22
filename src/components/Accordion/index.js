import React, { Children, PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { ASPECT_RATIOS } from '../helpers'


export default class Accordion extends PureComponent {
  static propTypes = {
    aspectRatio: PropTypes.oneOf(ASPECT_RATIOS),
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    className: PropTypes.string,
  }

  static defaultProps = {
    aspectRatio: '21x9',
  }

  render () {
    const {
      aspectRatio,
      children,
      className,
      ...restProps
    } = this.props

    const classes = cn({
      [className]: className,
      'mc-accordion': true,
      [`mc-accordion--${aspectRatio}`]: aspectRatio,
    })

    return (
      <div className={classes} {...restProps}>
        <div className='mc-accordion__content'>
          {Children.map(children, child => (
            <div className='mc-accordion__item'>
              {child}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

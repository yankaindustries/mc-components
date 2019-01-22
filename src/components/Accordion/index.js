import React, { Children, PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'


export default class Accordion extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    className: PropTypes.string,
  }

  render () {
    const {
      children,
      className,
      ...restProps
    } = this.props

    const classes = cn({
      [className]: className,
      'mc-accordion': true,
    })

    return (
      <div className={classes} {...restProps}>
        <div className='mc-accordion__inner'>
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

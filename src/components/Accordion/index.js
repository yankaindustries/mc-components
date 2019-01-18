import React, { Children, PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import HoverHandler from '../HoverHandler'


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
      'mc-accordian': true,
    })

    return (
      <div className={classes} {...restProps}>
        {Children.map(children, (child, key) => (
          <HoverHandler key={key} nowrap>
            {({ intent: hovering, props: panelProps }) =>
              <div
                className={`mc-accordian__item ${hovering ? 'mc-accordian__item--active' : ''}`}
                {...panelProps}
              >
                {child}
              </div>
            }
          </HoverHandler>
        ))}
      </div>
    )
  }
}

import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Consumer } from '../Tooltip'


export default class TooltipBody extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  renderTooltip = () => {
    const {
      children,
      className,
      ...restProps
    } = this.props

    const classes = show => cn({
      'mc-tooltip': true,
      'mc-tooltip--show': show,
      [className]: className,
    })

    return (
      <Consumer>
        {({ tooltipRef, show }) =>
          <div className={classes(show)} ref={tooltipRef} {...restProps}>
            {children}
            <div className='mc-tooltip__arrow' />
          </div>
        }
      </Consumer>
    )
  }

  render () {
    return createPortal(this.renderTooltip(), document.body)
  }
}

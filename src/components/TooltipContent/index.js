import React, { Fragment, PureComponent } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Consumer } from '../Tooltip'
import { getClosest } from '../helpers'


export default class TooltipContent extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  state = {
    checkedInvert: false,
    inverted: false,
  }

  placeholder = React.createRef()

  componentDidMount () {
    const placeholder = this.placeholder && this.placeholder.current

    if (getClosest(placeholder, '.mc-invert')) {
      this.setState({ inverted: true })
    }

    this.setState({ checkedInvert: true })
  }

  renderTooltip = () => {
    const {
      children,
      className,
      ...restProps
    } = this.props

    const { inverted } = this.state

    const classes = show => cn({
      'mc-tooltip': true,
      'mc-tooltip--show': show,
      'mc-invert': inverted,
      [className]: className,
    })

    return (
      <Consumer>
        {({
          arrowRef,
          arrowStyles,
          attributes,
          show,
          styles,
          tooltipRef,
        }) =>
          <div
            className={classes(show)}
            ref={tooltipRef}
            style={styles}
            {...attributes}
            {...restProps}
          >
            <div className='mc-tooltip__content'>
              {children}
            </div>
            <div
              className='mc-tooltip__arrow'
              ref={arrowRef}
              style={arrowStyles}
            />
          </div>
        }
      </Consumer>
    )
  }

  render () {
    const { checkedInvert } = this.state

    return (
      <Fragment>
        {!checkedInvert &&
          <div ref={this.placeholder} />
        }

        {createPortal(
          this.renderTooltip(),
          document.body,
        )}
      </Fragment>
    )
  }
}

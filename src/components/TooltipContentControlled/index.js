import React, { Fragment, PureComponent } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Consumer } from '../Tooltip'
import { PROP_TYPE_CHILDREN } from '../constants'
import { getClosest } from '../helpers'


export default class TooltipContentControlled extends PureComponent {
  static propTypes = {
    children: PROP_TYPE_CHILDREN,
    className: PropTypes.string,
    show: PropTypes.bool,
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
      show,
      ...restProps
    } = this.props

    const { inverted } = this.state

    const classes = cn({
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
          styles,
          tooltipRef,
        }) =>
          <div
            className={classes}
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

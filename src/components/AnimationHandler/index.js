import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class AnimationHandler extends PureComponent {
  static propTypes = {
    animation: PropTypes.oneOf([
      'zoom',
      'ken-burns',
      'lift',
    ]),
    animating: PropTypes.bool,
    children: PropTypes.func,
  }

  static defaultProps = {
    animation: 'zoom',
  }

  render () {
    const {
      animating,
      animation,
      children,
    } = this.props

    const classes = [
      'mc-animation',
      `mc-animation--${animation}`,
      animating ? 'mc-animation--animating' : '',
    ].join(' ')

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}

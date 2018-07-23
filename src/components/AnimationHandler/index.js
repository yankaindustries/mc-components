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
    cropped: PropTypes.bool,
    children: PropTypes.node,
  }

  static defaultProps = {
    animation: 'zoom',
  }

  render () {
    const {
      animating,
      animation,
      cropped,
      children,
    } = this.props

    const classes = [
      'animation',
      `animation--${animation}`,
      animating ? 'animation--animating' : '',
      cropped ? 'animation--cropped' : '',
    ].join(' ')

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}

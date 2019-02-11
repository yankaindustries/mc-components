import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { renderChildren } from '../helpers'


export default class AnimationHandler extends PureComponent {
  static propTypes = {
    animating: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element,
    ]),
    important: PropTypes.bool,
    type: PropTypes.oneOf([
      'zoom',
      'ken-burns',
      'lift',
      'zoom-tile',
      'show',
      'show-delayed',
      'hide',
      'hide-delayed',
    ]),
  }

  static defaultProps = {
    type: 'zoom',
  }

  render () {
    const {
      animating,
      children,
      important,
      type,
      ...restProps
    } = this.props

    const classes = cn({
      'mc-animation': true,
      [`mc-animation--${type}`]: type,
      'mc-animation--animating': animating,
      'mc-animation--important': important,
    })

    return renderChildren(children, {
      className: classes,
      ...restProps,
    })
  }
}

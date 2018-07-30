import { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { renderChildren } from '../../utils/helpers'


export default class AnimationHandler extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf([
      'zoom',
      'ken-burns',
      'lift',
    ]),
    animating: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element,
    ]),
  }

  static defaultProps = {
    type: 'zoom',
  }

  render () {
    const {
      animating,
      type,
      children,
    } = this.props

    const classes = [
      'mc-animation',
      `mc-animation--${type}`,
      animating ? 'mc-animation--animating' : '',
    ].join(' ')

    return renderChildren(children, { className: classes })
  }
}

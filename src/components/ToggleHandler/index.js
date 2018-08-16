import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import { renderChildren } from '../helpers'


export default class CheckOverlay extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
    toggled: PropTypes.bool,
    children: PropTypes.func.isRequired,
  }

  static defaultProps = {
    onChange: noop,
    toggled: false,
  }

  constructor (props) {
    super(props)

    this.state = {
      toggled: props.toggled,
    }
  }

  handleClick = () => {
    const { onChange } = this.props
    const { toggled } = this.state

    this.setState(
      ({ toggled }) => ({ toggled: !toggled }),
      () => onChange(!toggled),
    )
  }

  render () {
    const { children } = this.props
    const { toggled } = this.state

    return renderChildren(children, { toggled, onClick: this.handleClick })
  }
}

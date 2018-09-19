import { Component } from 'react'
import ReactDOM from 'react-dom'
import { node, oneOfType, arrayOf, instanceOf } from 'prop-types'

export default class VideoPlayerPortalScreen extends Component {
  static propTypes = {
    children: oneOfType([arrayOf(node), node]).isRequired,
    videoRoot: instanceOf(Element),
  }

  render () {
    const { videoRoot } = this.props

    return ReactDOM.createPortal(
      this.props.children,
      videoRoot,
    )
  }
}

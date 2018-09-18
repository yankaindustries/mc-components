import { Component } from 'react'
import ReactDOM from 'react-dom'
import { node, oneOfType, arrayOf, instanceOf } from 'prop-types'

export default class VideoPlayerPortalScreen extends Component {
  static propTypes = {
    children: oneOfType([arrayOf(node), node]).isRequired,
    videoRoot: instanceOf(Element),
  }

  componentDidMount () {
    const { videoRoot } = this.props
    videoRoot.appendChild(this.el)
  }

  componentWillUnmount () {
    const { videoRoot } = this.props
    videoRoot.removeChild(this.el)
  }

  el = document.createElement('div')

  render () {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    )
  }
}

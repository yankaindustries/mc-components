import { Component } from 'react'
import ReactDOM from 'react-dom'
import { object } from 'prop-types'

import { PROP_TYPE_CHILDREN } from '../constants'


export default class VideoPlayerPortalScreen extends Component {
  static propTypes = {
    children: PROP_TYPE_CHILDREN,
    videoRoot: object,
  }

  render () {
    const { videoRoot } = this.props

    return ReactDOM.createPortal(
      this.props.children,
      videoRoot,
    )
  }
}

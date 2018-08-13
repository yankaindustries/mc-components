import { Component } from 'react'
import ReactDOM from 'react-dom'
import { node, string, oneOfType, arrayOf } from 'prop-types'

export default class ModalPortal extends Component {
  static propTypes = {
    children: oneOfType([arrayOf(node), node]).isRequired,
    mountEntry: string,
  }

  static defaultProps = {
    mountEntry: 'modal-root',
  }

  componentDidMount () {
    const { mountEntry } = this.props
    const modalRoot = document.getElementById(mountEntry)
    modalRoot.appendChild(this.el)
    this.el.classList.add('mc-components-modal')
    const body = document.getElementsByTagName('body')[0]
    body.classList.add('mc-components-modal__body--open')
  }

  componentWillUnmount () {
    const { mountEntry } = this.props
    const modalRoot = document.getElementById(mountEntry)
    modalRoot.removeChild(this.el)
    const body = document.getElementsByTagName('body')[0]
    body.classList.remove('mc-components-modal__body--open')
  }

  el = document.createElement('div')

  render () {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    )
  }
}

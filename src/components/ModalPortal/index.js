import { Component } from 'react'
import ReactDOM from 'react-dom'
import { node, oneOfType, arrayOf } from 'prop-types'

export default class ModalPortal extends Component {
  static propTypes = {
    children: oneOfType([arrayOf(node), node]).isRequired,
  }

  el = document.createElement('div')

  componentDidMount () {
    const modalRoot = document.getElementById('modal-root')
    modalRoot.appendChild(this.el)
    this.el.classList.add('modal')
    const body = document.getElementsByTagName('body')[0]
    body.classList.add('modal__body--open')
  }

  componentWillUnmount () {
    const modalRoot = document.getElementById('modal-root')
    modalRoot.removeChild(this.el)
    const body = document.getElementsByTagName('body')[0]
    body.classList.remove('modal__body--open')
  }

  render () {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    )
  }
}

import { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { PROP_TYPE_CHILDREN } from '../constants'
import { renderChildren } from '../helpers'


export default class ScrollHandler extends PureComponent {
  static propTypes = {
    to: PropTypes.number,
    end: PropTypes.number,
    children: PROP_TYPE_CHILDREN.isRequired,
  }

  constructor (props) {
    super(props)

    this.state = {
      scrolled: false,
    }

    window.addEventListener('scroll', this.checkIfSufficientlyScrolled)
  }

  componentDidMount () {
    this.checkIfSufficientlyScrolled()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.checkIfSufficientlyScrolled)
  }

  checkIfSufficientlyScrolled = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop
    const endY = this.props.end

    let scrolled = scrollY > this.props.to
    if (endY) scrolled = scrolled && (scrollY < endY)

    this.setState({
      scrolled,
    })
  }

  render () {
    const { children } = this.props
    const { scrolled } = this.state

    return renderChildren(children, { scrolled })
  }
}

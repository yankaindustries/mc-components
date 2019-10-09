import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Fixed extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    className: PropTypes.string,
    showAfter: PropTypes.number,
    transition: PropTypes.bool,
  }

  constructor (props) {
    super(props)

    this.state = {
      show: false,
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
    const { showAfter } = this.props
    const scrollY = window.pageYOffset || document.documentElement.scrollTop

    this.setState({
      show: scrollY > showAfter,
    })
  }

  render () {
    const {
      children,
      className,
      transition,
    } = this.props

    const {
      show,
    } = this.state

    const classes = [
      className,
      'mc-reveal-on-scroll',
      show ? 'mc-reveal-on-scroll--show' : '',
      transition ? 'mc-reveal-on-scroll--transition' : '',
    ].join(' ')

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}

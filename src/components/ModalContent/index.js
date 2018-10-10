import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'


export default class ModalContent extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    className: PropTypes.string,
  }

  constructor (props) {
    super(props)

    this.content = React.createRef()
  }

  componentDidMount () {
    this.content.current.focus()
  }

  render () {
    const {
      children,
      className,
    } = this.props

    const classes = cn({
      [className]: className,
      'mc-modal__content': true,
    })

    return (
      <div
        className={classes}
        ref={this.content}
        tabIndex='-1'
      >
        {children}
      </div>
    )
  }
}

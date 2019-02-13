import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { Consumer } from '../Modal'
import ClickOutside from '../ClickOutside'


export default class ModalContent extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
    className: PropTypes.string,
  }

  componentDidMount () {
    this.content.current.focus()
  }

  content = React.createRef()

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
      <Consumer>
        {({ close }) =>
          <ClickOutside onClickOutside={close('backdrop')}>
            <div
              className={classes}
              ref={this.content}
              tabIndex='-1'
            >
              {children}
            </div>
          </ClickOutside>
        }
      </Consumer>
    )
  }
}

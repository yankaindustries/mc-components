import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


const DropdownContext = React.createContext('dropdown')

export const {
  Provider,
  Consumer,
} = DropdownContext

export default class Dropdown extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  state = {
    show: false,
  }

  toggle = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }))
  }

  render () {
    const {
      children,
      className,
      ...restProps
    } = this.props

    const {
      show
    } = this.state

    return (
      <Provider value={{ show, toggle: this.toggle }}>
        <div className='mc-dropdown' {...restProps}>
          {children}
        </div>
      </Provider>
    )
  }
}

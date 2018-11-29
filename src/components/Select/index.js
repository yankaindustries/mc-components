import React, { PureComponent } from 'react'
import { string, bool, array, func, object } from 'prop-types'
import Select, { components } from 'react-select'
import Arrow from '../Icons/SelectArrow'

export default class SelectInput extends PureComponent {
  static propTypes = {
    onChange: func.isRequired,
    onFocus: func,
    options: array,
    placeholder: string,
    isSearchable: bool,
    defaultValue: object,
    components: object,
  }

  static defaultProps = {
    options: [],
    placeholder: 'Select one',
    isSearchable: false,
  }

  state = { isOpen: false }

  handleOpenMenu = () =>
    this.setState({ isOpen: true })

  handleCloseMenu = () =>
    this.setState({ isOpen: false })

  renderDropdownIndicator = props => (
    <components.DropdownIndicator {...props}>
      <Arrow rotate={props.selectProps.menuIsOpen} />
    </components.DropdownIndicator>
  )

  render () {
    return (
      <Select
        className='mc-select'
        classNamePrefix='mc-select__wrapper'
        isSearchable={false}
        components={{
          DropdownIndicator: this.renderDropdownIndicator,
          ...this.props.components,
        }}
        onMenuOpen={this.handleOpenMenu}
        onMenuClose={this.handleCloseMenu}
        {...this.props}
      />
    )
  }
}

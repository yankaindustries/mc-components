import React, { PureComponent } from 'react'
import { string, bool, array, func, object } from 'prop-types'
import Select, { components } from 'react-select'

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

  renderDropdownIndicator = () => {
    const { isOpen } = this.state
    const DropdownIndicator = props =>
      components.DropdownIndicator &&
        <components.DropdownIndicator {...props}>
          <Arrow rotate={isOpen} />
        </components.DropdownIndicator>
    return DropdownIndicator
  }

  render () {
    const {
      options,
      placeholder,
      onChange,
      onFocus,
      defaultValue,
    } = this.props

    return (
      <Select
        options={options}
        styles={this.styles}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        className='mc-select'
        classNamePrefix='mc-select__wrapper'
        isSearchable={false}
        components={{
          DropdownIndicator: this.renderDropdownIndicator(),
          ...this.props.components,
        }}
        onMenuOpen={this.handleOpenMenu}
        onMenuClose={this.handleCloseMenu}
        defaultValue={defaultValue}
      />
    )
  }
}

const Arrow = ({ rotate = false }) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    style={{
      transform: `rotate(${rotate ? 180 : 0}deg)`,
    }}
  >
    <rect width='24' height='24' fill='black' fillOpacity='0'/>
    <path fillRule='evenodd' clipRule='evenodd' d='M5.46967 8.84467C5.76256 8.55178 6.23744 8.55178 6.53033 8.84467L12 14.3143L17.4697 8.84467C17.7626 8.55178 18.2374 8.55178 18.5303 8.84467C18.8232 9.13756 18.8232 9.61244 18.5303 9.90533L12.5303 15.9053C12.2374 16.1982 11.7626 16.1982 11.4697 15.9053L5.46967 9.90533C5.17678 9.61244 5.17678 9.13756 5.46967 8.84467Z' fill='#272C33'/>
  </svg>
)

Arrow.propTypes = {
  rotate: bool,
}

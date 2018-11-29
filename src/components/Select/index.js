import React, { PureComponent } from 'react'
import { any, shape, string, bool, arrayOf, func, object } from 'prop-types'
import Select, { components } from 'react-select'
import Arrow from '../Icons/SelectArrow'

const Types = {
  option: {
    label: string,
    value: any,
  },
}

export default class SelectInput extends PureComponent {
  static propTypes = {
    onChange: func,
    onFocus: func,
    options: arrayOf(shape(Types.option)),
    placeholder: string,
    isSearchable: bool,
    defaultValue: shape(Types.option),
    components: object,
    value: shape(Types.option),
  }

  static defaultProps = {
    options: [],
    isSearchable: false,
  }

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
        components={{
          DropdownIndicator: this.renderDropdownIndicator,
          ...this.props.components,
        }}
        {...this.props}
      />
    )
  }
}

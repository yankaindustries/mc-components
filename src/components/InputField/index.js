import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

import Input from '../Input'

const FIELD_PROP_TYPE = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
}


const renderInput = ({
  input,
  ...props
}) => (
  <Input
    {...input}
    {...props}
  />
)


export default class InputField extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    ...FIELD_PROP_TYPE,
  }

  render () {
    return (
      <Field
        component={renderInput}
        {...this.props}
      />
    )
  }
}

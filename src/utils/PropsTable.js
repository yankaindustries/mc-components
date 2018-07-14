import { map, isEmpty } from 'lodash'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


export default class PropsTable extends PureComponent {
  static propTypes = {
    component: PropTypes.func.isRequired,
  }

  render () {
    const {
      component,
    } = this.props

    const docgenInfo = '__docgenInfo'

    return (
      <table className='example--table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Required?</th>
            <th>Default?</th>
          </tr>
        </thead>

        <tbody>
          {map(component[docgenInfo].props, (prop, key) =>
              <tr>
                <th>{key}</th>
                <td>{prop.type.name}</td>
                <td>
                  {prop.required
                    ? 'true'
                    : '-'}
                </td>
                <td>
                  {prop.defaultValue && !isEmpty(prop.defaultValue.value)
                    ? prop.defaultValue.value
                    : '-'}
                </td>
              </tr>,
          )}
        </tbody>
      </table>
    )
  }
}

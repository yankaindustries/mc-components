import { map, isEmpty, isArray } from 'lodash'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'


const styles = {
  table: {
    width: '100%',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderCollapse: 'collapse',
    fontFamily: 'sans-serif',
    fontSize: '12px',
    textAlign: 'left',
  },
  row: {
    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
  },
  cell: {
    padding: '5px 10px',
    fontWeight: 300,
  },
}

styles.header = {
  ...styles.cell,
  fontWeight: 600,
}


const formatName = (type) => {
  if (type) {
    return type.value && type.value.name
      ? `${type.name}(${type.value.name})`
      : type.name
  }

  return null
}

const formatOptions = (type) => {
  if (type && isArray(type.value)) {
    return type.value.map(({ value, name }) => value || name).join(', ')
  }

  return null
}


export default class PropsTable extends PureComponent {
  static propTypes = {
    component: PropTypes.object,
  }

  static defaultProps = {
    component: {},
  }

  render () {
    const { component: { props } } = this.props

    if (!props) {
      return null
    }

    return (
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.header}>Name</th>
            <th style={styles.header}>Type</th>
            <th style={styles.header}>Req?</th>
            <th style={styles.header}>Def</th>
          </tr>
        </thead>

        <tbody>
          {map(props, (prop, key) =>
            <tr key={key} style={styles.row}>
              <th style={styles.header}>{key}</th>
              <td style={styles.cell} title={formatOptions(prop.type)}>
                {formatName(prop.type)}
              </td>
              <td style={styles.cell}>
                {prop.required
                  ? 'true'
                  : '-'}
              </td>
              <td style={styles.cell}>
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

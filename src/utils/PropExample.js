import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import CodeExample from './CodeExample'


export default class Definition extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  render () {
    const { name, type, children } = this.props

    return (
      <div className='example--definition'>
        <p>
          <span className='example--definition-name'>{name}</span>
          {type &&
            <span className='example--definition-type'>
              &nbsp;&lt;{type}&gt;
            </span>
          }
        </p>

        <CodeExample>
          {children}
        </CodeExample>
      </div>
    )
  }
}

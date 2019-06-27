import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import CodeExample from './CodeExample'


export default class Definition extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    description: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
  }

  render () {
    const {
      children,
      description,
      name,
      type,
    } = this.props

    return (
      <div className='example__definition'>
        <code className='example__definition-name mc-code'>
          {name}
        </code>
        {' '}

        {type &&
          <p className='example__definition-type mc-text--bold mc-text--lowercase mc-text--nowrap'>
            [{type}]
          </p>
        }

        {description &&
          <p className='example__definition-description mc-opacity--muted'>
            {description}
          </p>
        }

        <CodeExample>
          {children}
        </CodeExample>
      </div>
    )
  }
}

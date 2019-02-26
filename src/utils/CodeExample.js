import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Highlight from 'react-highlight'
import jsxToString from 'jsx-to-string'
import Separator from '../components/Separator'


const toString = node =>
  jsxToString(node, { shortBooleanSyntax: true })


export default class CodeExample extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }

  state = {
    showCode: false,
  }

  toggleCode = () => {
    this.setState({ showCode: !this.state.showCode })
  }

  render () {
    const { children } = this.props

    const code = Array.isArray(children)
      ? children.map(toString).join('\n')
      : toString(children)

    return (
      <div>
        <div className='example__render'>
          {children}
        </div>

        <Separator />

        <div className='example__trigger mc-text--monospace mc-text--right'>
          <a onClick={this.toggleCode}>
            &lt;/&gt;
          </a>
        </div>

        <div className='example__code'>
          {this.state.showCode && (
            <Highlight language='html'>
              {code}
            </Highlight>
          )}
        </div>
      </div>
    )
  }
}

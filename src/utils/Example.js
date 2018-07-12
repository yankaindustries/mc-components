import React, { Fragment, Children, PureComponent } from 'react'
import Highlight from 'react-highlight'
import jsxToString from 'jsx-to-string'


const toString = (node) => (
  jsxToString(node, {
    shortBooleanSyntax: true,
  })
)


export default class Definition extends PureComponent {
  state = {
    showCode: false,
  }

  render() {
    const { name, type, children } = this.props

    const code = Array.isArray(children)
      ? children.map(toString).join('\n')
      : toString(children)

    console.log(code.replace(/\n/, ''))

    return (
      <div className="example--definition">
        <div className="row">
          <div className="col-xs-10">
            <h5>
              <span className="example--definition-name">{name}</span>
              {type && (
                <span className="example--definition-type"> &lt;{type}&gt;</span>
              )}
            </h5>
          </div>

          <div className="col-xs-2 text-right">
            <a onClick={() => this.setState({ showCode: !this.state.showCode })}>
              &lt;/&gt;
            </a>
          </div>
        </div>

        {this.state.showCode && (
          <Highlight language="html">
            {code}
          </Highlight>
        )}

        <div className="example--render">
          {children}
        </div>
      </div>
    )
  }
}

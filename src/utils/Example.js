import React, { Children, PureComponent } from 'react'
import Node from './Node'


export default class Definition extends PureComponent {
  state = {
    showCode: false,
  }

  render() {
    const { name, type, children } = this.props

    return (
      <div className="example--definition">
        <h5>
          <span className="example--definition-name">{name}</span>
          {type && (
            <span className="example--definition-type"> ?{type}</span>
          )}
        </h5>

        <div className="example--render">
          {children}
        </div>

        <a onClick={() => this.setState({ showCode: !this.state.showCode })}>
          Toggle Code
        </a>

        {this.state.showCode && (
          <pre className="example--code">
            {Children.map(children, (child, key) => (
              <Node key={key} node={child} depth={0} />
            ))}
          </pre>
        )}
      </div>
    )
  }
}

import React, { PureComponent } from 'react'


export default class Section extends PureComponent {
  render() {
    const { title, children } = this.props
    
    return (
      <div className="example--section">
        <h4>{title}</h4>
        {children}
      </div>
    )

  }
}

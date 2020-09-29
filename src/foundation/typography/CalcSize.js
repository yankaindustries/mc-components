import React, { PureComponent } from 'react'

export default class CalcSize extends PureComponent {
  state = {}

  componentDidMount () {
    this.updateSizes()
    window.addEventListener('resize', this.updateSizes)
  }

  divRef = React.createRef()

  updateSizes = () => {
    this.setState({
      fontSize: window.getComputedStyle(this.divRef.current).fontSize,
    })
  }

  render () {
    return (
      <span className='mc-code mc-opacity--muted' ref={this.divRef}>
        {this.state.fontSize}
      </span>
    )
  }
}

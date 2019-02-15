import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { renderChildren } from '../helpers'


export default class CarouselConnector extends PureComponent {
  static propTypes = {
    children: PropTypes.func.isRequired,
    className: PropTypes.string,
  }

  state = {
    hero: null,
    thumbs: null,
  }

  ref = name => (slider) => {
    this[name] = slider
  }

  asNavFor = sibling => this.state[sibling]

  componentDidMount () {
    this.setState({
      hero: this.hero,
      thumbs: this.thumbs,
    })
  }

  render () {
    const {
      children,
      className,
    } = this.props

    return (
      <div className={className}>
        {renderChildren(children, {
          sliderRef: this.ref,
          asNavFor: this.asNavFor,
        })}
      </div>
    )
  }
}

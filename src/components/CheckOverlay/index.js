import { noop } from 'lodash'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Check from '../../styles/icons/input-checkmark.svg'
import Close from '../../styles/icons/close.svg'


export default class CheckOverlay extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
  }

  static defaultProps = {
    onChange: noop,
  }

  constructor(props) {
    super(props)

    this.state = {
      checked: props.checked,
    }
  }

  handleClick = () => {
    const { onChange } = this.props
    const { checked } = this.state

    this.setState(
      ({ checked }) => ({ checked: !checked }),
      () => onChange(!checked),
    )
  }

  render() {
    const { children } = this.props
    const { checked } = this.state

    const classes = [
      'overlay-check',
      checked ? 'overlay-check--checked' : 'overlay-check--unchecked',
    ].join(' ')

    return (
      <a className={classes}
        onClick={this.handleClick}>
        <span className="overlay-check__check">
          <img src={checked ? Check : null} />
        </span>

        {children({ checked })}
      </a>
    )
  }
}

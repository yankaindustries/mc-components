import React, { PureComponent } from 'react'
import cn from 'classnames'

import LogoWordmark from '../../assets/logo-wordmark.svg'
import Logo from '../../assets/logo.svg'

export default class HeaderLoggedOut extends PureComponent {
  state = { condensed: false }

  componentDidMount () {
    this.handleScroll()
    document.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    document.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const offsetFromTop = 0
    const offset = window.pageYOffset || document.documentElement.scrollTop
    const condensed = offset > offsetFromTop
    this.setState({ condensed })
  }

  render () {
    const { condensed } = this.state
    const headerCn = cn(
      'header-logged-out',
      { 'header-logged-out--condensed': condensed },
    )
    const loginModalTriggerCn = 'mc-modal-login-trigger'

    return (
      <div className={headerCn}>
        <div className='header-logged-out__nav'>
          <div className='header-logged-out__section'>
            <a className='header-logged-out__wordmark' href='/'>
              <LogoWordmark />
            </a>
            <a className='header-logged-out__logo' href='/'>
              <Logo />
            </a>
          </div>
          <div className='header-logged-out__section'>
            <a
              className={`header-logged-out__login-link ${loginModalTriggerCn}`}
              href='/#'
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    )
  }
}

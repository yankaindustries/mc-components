import React, { PureComponent } from 'react'
import { arrayOf, shape, string } from 'prop-types'
import cn from 'classnames'

import NavBarMenu from '../NavBarMenu'
import ClickOutside from '../ClickOutside'
import logo from '../../assets/logo-wordmark.svg'
import MobileNavButton from '../MobileNavButton'
import Badge from '../Badge'
import defaultAvatar from '../../assets/header/default-avatar@2x.png'

export default class HeaderLoggedIn extends PureComponent {
  static propTypes = {
    menuLinks: arrayOf(
      shape({
        label: string.isRequired,
        href: string.isRequired,
        helperText: string,
      }),
    ).isRequired,
    name: string,
    avatar: string,
  }

  static defaultProps = {
    name: 'set up your profile',
  }

  state = {
    isDropdownOpened: false,
    isMobileMenuOpened: false,
  }
  infoBlock = React.createRef()

  toggleDropdown = () => {
    const { isDropdownOpened } = this.state
    this.setState({ isDropdownOpened: !isDropdownOpened })
  }

  closeDropdown = () => {
    this.setState({ isDropdownOpened: false })
  }

  toggleMobileMenu = () => {
    const { isMobileMenuOpened } = this.state
    this.setState({ isMobileMenuOpened: !isMobileMenuOpened })
  }

  render () {
    const { isDropdownOpened, isMobileMenuOpened } = this.state
    const { menuLinks, name, avatar } = this.props

    const headerClassNames = cn('header', {
      'header--mobile-opened': isMobileMenuOpened,
    })
    const arrowClassNames = cn('header__arrow--down', {
      'header__arrow--down-opened': isDropdownOpened,
    })
    const infoBlockClassNames = cn('header__info-block', {
      'header__info-block--mobile-opened': isMobileMenuOpened,
    })

    const badgeGlobalCount = menuLinks
      .reduce(
        (total, { badgeCount }) => (badgeCount ? total + badgeCount : total),
        0,
      )

    return (
      <div className={headerClassNames}>
        <MobileNavButton
          isOpen={isMobileMenuOpened}
          onClick={this.toggleMobileMenu}
        />
        <nav className='header__nav'>
          <div className='header__section'>{/* TODO: breadcrumbs */}</div>

          <div className='header__section'>
            <a className='header__wordmark'href='/'>
              <img src={logo} alt='Logo wordmark' />
            </a>
          </div>

          <div className='header__section header__section--flex-end'>
            <ClickOutside
              divRef={this.infoBlock}
              onClickOutside={this.closeDropdown}
            >
              <div
                className={infoBlockClassNames}
                ref={this.infoBlock}
                onClick={this.toggleDropdown}
              >
                <div className='header__info-blurb'>
                  <img
                    src={avatar || defaultAvatar}
                    className='header__info-block__avatar'
                  />
                  <span>
                    <span className='header__info-block__username'>{name}</span>
                  </span>
                  {Boolean(badgeGlobalCount) &&
                    <Badge
                      className='header__global-badge'
                      count={badgeGlobalCount}
                    />
                  }
                  <span className={arrowClassNames} />
                </div>
                <NavBarMenu
                  isOpen={isDropdownOpened}
                  menuLinks={menuLinks}
                />
              </div>
            </ClickOutside>
          </div>
        </nav>
      </div>
    )
  }
}

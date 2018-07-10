import React, { PureComponent } from 'react'
import { arrayOf, shape, string, func, bool } from 'prop-types'
import cn from 'classnames'

import NavBarMenu from '../NavBarMenu'
import ClickOutside from '../ClickOutside'
import logo from '../../assets/logo-wordmark.svg'
import MobileNavButton from '../MobileNavButton'
import Badge from '../Badge'
import defaultAvatar from '../../assets/header/default-avatar@2x.png'
import backArrow from '../../assets/header/back-arrow.svg'

export default class HeaderLoggedIn extends PureComponent {
  static propTypes = {
    menuLinks: arrayOf(
      shape({
        label: string.isRequired,
        href: string.isRequired,
        helperText: string,
      }),
    ),
    name: string,
    avatar: string,
    left: shape({
      type: string.isRequired,
      label: string,
      action: func,
    }),
    isMinimal: bool,
  }

  static defaultProps = {
    name: 'set up your profile',
    isMinimal: false,
  }

  state = {
    isDropdownOpened: false,
    isMobileMenuOpened: false,
  }

  handleToggleDropdown = () => {
    const { isDropdownOpened } = this.state
    this.setState({ isDropdownOpened: !isDropdownOpened })
  }

  handleCloseDropdown = () => {
    this.setState({ isDropdownOpened: false })
  }

  handleToggleMobileMenu = () => {
    const { isMobileMenuOpened } = this.state
    this.setState({ isMobileMenuOpened: !isMobileMenuOpened })
  }

  infoBlock = React.createRef()

  renderLeft = () => {
    const { action, label, type } = this.props.left

    if (type === 'back') {
      return (
        <button
          className='header__left-button'
          onClick={Boolean(action) && action}
        >
          <img
            src={backArrow}
            className='header__left-button__icon'
          />
          <span className='header__left-button__label'>{label}</span>
        </button>
      )
    }

    return null
  }


  render () {
    const { isDropdownOpened, isMobileMenuOpened } = this.state
    const {
      menuLinks,
      name,
      avatar,
      left,
      isMinimal,
    } = this.props

    const headerClassNames = cn('header', {
      'header--mobile-opened': isMobileMenuOpened,
    })
    const arrowClassNames = cn('header__arrow--down', {
      'header__arrow--down-opened': isDropdownOpened,
    })
    const infoBlockClassNames = cn('header__info-block', {
      'header__info-block--mobile-opened': isMobileMenuOpened,
    })

    const badgeGlobalCount = !isMinimal && menuLinks
      .reduce(
        (total, { badgeCount }) => (badgeCount ? total + badgeCount : total),
        0,
      )

    return (
      <div className={headerClassNames}>
        {!isMinimal &&
          <MobileNavButton
            isOpen={isMobileMenuOpened}
            onClick={this.handleToggleMobileMenu}
          />
        }
        <nav className='header__nav'>
          {!isMinimal &&
            <div className='header__section'>
              { left && this.renderLeft() }
            </div>
          }
          <div className='header__section'>
            <a className='header__wordmark' href='/'>
              <img src={logo} alt='Logo wordmark' />
            </a>
          </div>

          {!isMinimal &&
            <div className='header__section header__section--flex-end'>
              <ClickOutside
                divRef={this.infoBlock}
                onClickOutside={this.handleCloseDropdown}
              >
                <div
                  className={infoBlockClassNames}
                  ref={this.infoBlock}
                  onClick={this.handleToggleDropdown}
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
          }
        </nav>
      </div>
    )
  }
}

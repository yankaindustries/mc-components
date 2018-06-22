import React, { PureComponent } from 'react'
import { arrayOf, shape, bool, string } from 'prop-types'
import cn from 'classnames'

import NavBarMenuItem from '../NavBarMenuItem'

export default class NavBarMenu extends PureComponent {
  static propTypes = {
    isOpen: bool.isRequired,
    menuLinks: arrayOf(shape({
      label: string.isRequired,
      href: string.isRequired,
      helperText: string,
    })).isRequired,
  }

  render () {
    const { isOpen, menuLinks } = this.props

    const dropDownClassName = cn(
      'navbar-menu',
      { 'navbar-menu--open': isOpen },
    )

    return (
      <ul className={dropDownClassName}>
        {menuLinks.map((menuLink, index) =>
          <NavBarMenuItem
            {...menuLink}
            key={index}
            centered={menuLinks.length === index + 1}
          />,
        )}
      </ul>
    )
  }
}

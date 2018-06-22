import React from 'react'
import { string, bool, number } from 'prop-types'
import cn from 'classnames'

import Badge from '../Badge'

const NavBarMenuItem = ({
  label,
  helperText,
  href,
  badgeCount,
  centered,
}) => {
  const classNames = cn(
    'navbar-menu__item',
    { 'navbar-menu__item--centered': centered },
  )

  return (
    <li className={classNames}>
      <a className='navbar-menu__item-link' href={href}>
        {label}
        {Boolean(badgeCount) && <Badge count={badgeCount} />}
        {helperText &&
          <span className='navbar-menu__item-helper'>
            {helperText}
          </span>
        }
      </a>
    </li>
  )
}

NavBarMenuItem.propTypes = {
  label: string.isRequired,
  href: string.isRequired,
  helperText: string,
  centered: bool,
  badgeCount: number,
}

NavBarMenuItem.defaultProps = {
  centered: false,
}

export default NavBarMenuItem

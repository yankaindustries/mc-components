import React from 'react';
import { string, bool, number } from 'prop-types';
import cn from 'classnames';
import Badge from '../Badge';

var NavBarMenuItem = function NavBarMenuItem(_ref) {
  var label = _ref.label,
      helperText = _ref.helperText,
      href = _ref.href,
      badgeCount = _ref.badgeCount,
      centered = _ref.centered;
  var classNames = cn('navbar-menu__item', {
    'navbar-menu__item--centered': centered
  });
  return React.createElement("li", {
    className: classNames
  }, React.createElement("a", {
    className: "navbar-menu__item-link",
    href: href
  }, label, Boolean(badgeCount) && React.createElement(Badge, {
    count: badgeCount
  }), helperText && React.createElement("span", {
    className: "navbar-menu__item-helper"
  }, helperText)));
};

NavBarMenuItem.propTypes = {
  label: string.isRequired,
  href: string.isRequired,
  helperText: string,
  centered: bool,
  badgeCount: number
};
NavBarMenuItem.defaultProps = {
  centered: false
};
export default NavBarMenuItem;
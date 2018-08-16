import React from 'react';
import { bool, func } from 'prop-types';
import cn from 'classnames';

var MobileNavButton = function MobileNavButton(_ref) {
  var isOpen = _ref.isOpen,
      onClick = _ref.onClick;
  var classNames = cn('mobile-nav-button', {
    'mobile-nav-button--opened': isOpen
  });
  return React.createElement("div", {
    onClick: onClick,
    className: classNames
  }, React.createElement("span", {
    className: "mobile-nav-button__lines"
  }));
};

MobileNavButton.propTypes = {
  isOpen: bool.isRequired,
  onClick: func.isRequired
};
export default MobileNavButton;
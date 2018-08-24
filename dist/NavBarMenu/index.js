var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import { arrayOf, shape, bool, string } from 'prop-types';
import cn from 'classnames';

import NavBarMenuItem from '../NavBarMenuItem';

var NavBarMenu = function (_PureComponent) {
  _inherits(NavBarMenu, _PureComponent);

  function NavBarMenu() {
    _classCallCheck(this, NavBarMenu);

    return _possibleConstructorReturn(this, (NavBarMenu.__proto__ || Object.getPrototypeOf(NavBarMenu)).apply(this, arguments));
  }

  _createClass(NavBarMenu, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOpen = _props.isOpen,
          menuLinks = _props.menuLinks;


      var dropDownClassName = cn('navbar-menu', { 'navbar-menu--open': isOpen });

      return React.createElement(
        'ul',
        { className: dropDownClassName },
        menuLinks.map(function (menuLink, index) {
          return React.createElement(NavBarMenuItem, _extends({}, menuLink, {
            key: index,
            centered: menuLinks.length === index + 1
          }));
        })
      );
    }
  }]);

  return NavBarMenu;
}(PureComponent);

NavBarMenu.propTypes = {
  isOpen: bool.isRequired,
  menuLinks: arrayOf(shape({
    label: string.isRequired,
    href: string.isRequired,
    helperText: string
  })).isRequired
};
export default NavBarMenu;
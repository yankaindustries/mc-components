var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import { arrayOf, shape, string, func, bool } from 'prop-types';
import cn from 'classnames';

import NavBarMenu from '../NavBarMenu';
import ClickOutside from '../ClickOutside';
import MobileNavButton from '../MobileNavButton';
import Badge from '../Badge';

import Logo from '../Icons/LogoWordmark';
import BackArrow from '../Icons/BackArrow';
import DefaultAvatar from '../Icons/Avatar';

var HeaderLoggedIn = function (_PureComponent) {
  _inherits(HeaderLoggedIn, _PureComponent);

  function HeaderLoggedIn() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HeaderLoggedIn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HeaderLoggedIn.__proto__ || Object.getPrototypeOf(HeaderLoggedIn)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isDropdownOpened: false,
      isMobileMenuOpened: false
    }, _this.handleToggleDropdown = function () {
      var isDropdownOpened = _this.state.isDropdownOpened;

      _this.setState({ isDropdownOpened: !isDropdownOpened });
    }, _this.handleCloseDropdown = function () {
      _this.setState({ isDropdownOpened: false });
    }, _this.handleToggleMobileMenu = function () {
      var isMobileMenuOpened = _this.state.isMobileMenuOpened;

      _this.setState({ isMobileMenuOpened: !isMobileMenuOpened });
    }, _this.infoBlock = React.createRef(), _this.renderLeft = function () {
      var _this$props$left = _this.props.left,
          action = _this$props$left.action,
          label = _this$props$left.label,
          type = _this$props$left.type;


      if (type === 'back') {
        return React.createElement(
          'button',
          {
            className: 'header__left-button',
            onClick: Boolean(action) && action
          },
          React.createElement(BackArrow, { className: 'header__left-button__icon' }),
          React.createElement(
            'span',
            { className: 'header__left-button__label' },
            label
          )
        );
      }

      return null;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeaderLoggedIn, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          isDropdownOpened = _state.isDropdownOpened,
          isMobileMenuOpened = _state.isMobileMenuOpened;
      var _props = this.props,
          menuLinks = _props.menuLinks,
          name = _props.name,
          avatar = _props.avatar,
          left = _props.left,
          isMinimal = _props.isMinimal;


      var headerClassNames = cn('header', {
        'header--mobile-opened': isMobileMenuOpened
      });
      var arrowClassNames = cn('header__arrow--down', {
        'header__arrow--down-opened': isDropdownOpened
      });
      var infoBlockClassNames = cn('header__info-block', {
        'header__info-block--mobile-opened': isMobileMenuOpened
      });

      var badgeGlobalCount = !isMinimal && menuLinks.reduce(function (total, _ref2) {
        var badgeCount = _ref2.badgeCount;
        return badgeCount ? total + badgeCount : total;
      }, 0);

      return React.createElement(
        'div',
        { className: headerClassNames },
        !isMinimal && React.createElement(MobileNavButton, {
          isOpen: isMobileMenuOpened,
          onClick: this.handleToggleMobileMenu
        }),
        React.createElement(
          'nav',
          { className: 'header__nav' },
          !isMinimal && React.createElement(
            'div',
            { className: 'header__section' },
            left && this.renderLeft()
          ),
          React.createElement(
            'div',
            { className: 'header__section' },
            React.createElement(
              'a',
              { className: 'header__wordmark', href: '/' },
              React.createElement(Logo, { alt: 'Logo wordmark' })
            )
          ),
          !isMinimal && React.createElement(
            'div',
            { className: 'header__section header__section--flex-end' },
            React.createElement(
              ClickOutside,
              {
                divRef: this.infoBlock,
                onClickOutside: this.handleCloseDropdown
              },
              React.createElement(
                'div',
                {
                  className: infoBlockClassNames,
                  ref: this.infoBlock,
                  onClick: this.handleToggleDropdown
                },
                React.createElement(
                  'div',
                  { className: 'header__info-blurb' },
                  avatar && React.createElement('img', {
                    src: avatar,
                    className: 'header__info-block__avatar'
                  }),
                  !avatar && React.createElement(DefaultAvatar, { className: 'header__info-block__avatar' }),
                  React.createElement(
                    'span',
                    null,
                    React.createElement(
                      'span',
                      { className: 'header__info-block__username' },
                      name
                    )
                  ),
                  Boolean(badgeGlobalCount) && React.createElement(Badge, {
                    className: 'header__global-badge',
                    count: badgeGlobalCount
                  }),
                  React.createElement('span', { className: arrowClassNames })
                ),
                React.createElement(NavBarMenu, {
                  isOpen: isDropdownOpened,
                  menuLinks: menuLinks
                })
              )
            )
          )
        )
      );
    }
  }]);

  return HeaderLoggedIn;
}(PureComponent);

HeaderLoggedIn.propTypes = {
  menuLinks: arrayOf(shape({
    label: string.isRequired,
    href: string.isRequired,
    helperText: string
  })),
  name: string,
  avatar: string,
  left: shape({
    type: string.isRequired,
    label: string,
    action: func
  }),
  isMinimal: bool
};
HeaderLoggedIn.defaultProps = {
  name: 'set up your profile',
  isMinimal: false
};
export default HeaderLoggedIn;
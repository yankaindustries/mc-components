function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import { arrayOf, shape, string, func, bool } from 'prop-types';
import cn from 'classnames';
import NavBarMenu from '../NavBarMenu';
import ClickOutside from '../ClickOutside';
import MobileNavButton from '../MobileNavButton';
import Badge from '../Badge';
import Logo from '../../assets/logo-wordmark.svg';
import BackArrow from '../../assets/icons/back-arrow.svg';
import DefaultAvatar from '../../assets/icons/avatar.svg';

var HeaderLoggedIn =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(HeaderLoggedIn, _PureComponent);

  function HeaderLoggedIn() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HeaderLoggedIn);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HeaderLoggedIn)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isDropdownOpened: false,
      isMobileMenuOpened: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleToggleDropdown", function () {
      var isDropdownOpened = _this.state.isDropdownOpened;

      _this.setState({
        isDropdownOpened: !isDropdownOpened
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCloseDropdown", function () {
      _this.setState({
        isDropdownOpened: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleToggleMobileMenu", function () {
      var isMobileMenuOpened = _this.state.isMobileMenuOpened;

      _this.setState({
        isMobileMenuOpened: !isMobileMenuOpened
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "infoBlock", React.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderLeft", function () {
      var _this$props$left = _this.props.left,
          action = _this$props$left.action,
          label = _this$props$left.label,
          type = _this$props$left.type;

      if (type === 'back') {
        return React.createElement("button", {
          className: "header__left-button",
          onClick: Boolean(action) && action
        }, React.createElement(BackArrow, {
          className: "header__left-button__icon"
        }), React.createElement("span", {
          className: "header__left-button__label"
        }, label));
      }

      return null;
    });

    return _this;
  }

  _createClass(HeaderLoggedIn, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isDropdownOpened = _this$state.isDropdownOpened,
          isMobileMenuOpened = _this$state.isMobileMenuOpened;
      var _this$props = this.props,
          menuLinks = _this$props.menuLinks,
          name = _this$props.name,
          avatar = _this$props.avatar,
          left = _this$props.left,
          isMinimal = _this$props.isMinimal;
      var headerClassNames = cn('header', {
        'header--mobile-opened': isMobileMenuOpened
      });
      var arrowClassNames = cn('header__arrow--down', {
        'header__arrow--down-opened': isDropdownOpened
      });
      var infoBlockClassNames = cn('header__info-block', {
        'header__info-block--mobile-opened': isMobileMenuOpened
      });
      var badgeGlobalCount = !isMinimal && menuLinks.reduce(function (total, _ref) {
        var badgeCount = _ref.badgeCount;
        return badgeCount ? total + badgeCount : total;
      }, 0);
      return React.createElement("div", {
        className: headerClassNames
      }, !isMinimal && React.createElement(MobileNavButton, {
        isOpen: isMobileMenuOpened,
        onClick: this.handleToggleMobileMenu
      }), React.createElement("nav", {
        className: "header__nav"
      }, !isMinimal && React.createElement("div", {
        className: "header__section"
      }, left && this.renderLeft()), React.createElement("div", {
        className: "header__section"
      }, React.createElement("a", {
        className: "header__wordmark",
        href: "/"
      }, React.createElement(Logo, {
        alt: "Logo wordmark"
      }))), !isMinimal && React.createElement("div", {
        className: "header__section header__section--flex-end"
      }, React.createElement(ClickOutside, {
        divRef: this.infoBlock,
        onClickOutside: this.handleCloseDropdown
      }, React.createElement("div", {
        className: infoBlockClassNames,
        ref: this.infoBlock,
        onClick: this.handleToggleDropdown
      }, React.createElement("div", {
        className: "header__info-blurb"
      }, avatar && React.createElement("img", {
        src: avatar,
        className: "header__info-block__avatar"
      }), !avatar && React.createElement(DefaultAvatar, {
        className: "header__info-block__avatar"
      }), React.createElement("span", null, React.createElement("span", {
        className: "header__info-block__username"
      }, name)), Boolean(badgeGlobalCount) && React.createElement(Badge, {
        className: "header__global-badge",
        count: badgeGlobalCount
      }), React.createElement("span", {
        className: arrowClassNames
      })), React.createElement(NavBarMenu, {
        isOpen: isDropdownOpened,
        menuLinks: menuLinks
      }))))));
    }
  }]);

  return HeaderLoggedIn;
}(PureComponent);

_defineProperty(HeaderLoggedIn, "propTypes", {
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
});

_defineProperty(HeaderLoggedIn, "defaultProps", {
  name: 'set up your profile',
  isMinimal: false
});

export { HeaderLoggedIn as default };
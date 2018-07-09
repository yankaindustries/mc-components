'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _NavBarMenu = require('../NavBarMenu');

var _NavBarMenu2 = _interopRequireDefault(_NavBarMenu);

var _ClickOutside = require('../ClickOutside');

var _ClickOutside2 = _interopRequireDefault(_ClickOutside);

var _logoWordmark = require('../../assets/logo-wordmark.svg');

var _logoWordmark2 = _interopRequireDefault(_logoWordmark);

var _MobileNavButton = require('../MobileNavButton');

var _MobileNavButton2 = _interopRequireDefault(_MobileNavButton);

var _Badge = require('../Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _defaultAvatar2x = require('../../assets/header/default-avatar@2x.png');

var _defaultAvatar2x2 = _interopRequireDefault(_defaultAvatar2x);

var _backArrow = require('../../assets/header/back-arrow.svg');

var _backArrow2 = _interopRequireDefault(_backArrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    }, _this.infoBlock = _react2.default.createRef(), _this.renderLeft = function () {
      var _this$props$left = _this.props.left,
          action = _this$props$left.action,
          label = _this$props$left.label,
          type = _this$props$left.type;


      if (type === 'back') {
        return _react2.default.createElement(
          'button',
          {
            className: 'header__left-button',
            onClick: Boolean(action) && action
          },
          _react2.default.createElement('img', {
            src: _backArrow2.default,
            className: 'header__left-button__icon'
          }),
          _react2.default.createElement(
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


      var headerClassNames = (0, _classnames2.default)('header', {
        'header--mobile-opened': isMobileMenuOpened
      });
      var arrowClassNames = (0, _classnames2.default)('header__arrow--down', {
        'header__arrow--down-opened': isDropdownOpened
      });
      var infoBlockClassNames = (0, _classnames2.default)('header__info-block', {
        'header__info-block--mobile-opened': isMobileMenuOpened
      });

      var badgeGlobalCount = !isMinimal && menuLinks.reduce(function (total, _ref2) {
        var badgeCount = _ref2.badgeCount;
        return badgeCount ? total + badgeCount : total;
      }, 0);

      return _react2.default.createElement(
        'div',
        { className: headerClassNames },
        _react2.default.createElement(_MobileNavButton2.default, {
          isOpen: isMobileMenuOpened,
          onClick: this.handleToggleMobileMenu
        }),
        _react2.default.createElement(
          'nav',
          { className: 'header__nav' },
          !isMinimal && _react2.default.createElement(
            'div',
            { className: 'header__section' },
            left && this.renderLeft()
          ),
          _react2.default.createElement(
            'div',
            { className: 'header__section' },
            _react2.default.createElement(
              'a',
              { className: 'header__wordmark', href: '/' },
              _react2.default.createElement('img', { src: _logoWordmark2.default, alt: 'Logo wordmark' })
            )
          ),
          !isMinimal && _react2.default.createElement(
            'div',
            { className: 'header__section header__section--flex-end' },
            _react2.default.createElement(
              _ClickOutside2.default,
              {
                divRef: this.infoBlock,
                onClickOutside: this.handleCloseDropdown
              },
              _react2.default.createElement(
                'div',
                {
                  className: infoBlockClassNames,
                  ref: this.infoBlock,
                  onClick: this.handleToggleDropdown
                },
                _react2.default.createElement(
                  'div',
                  { className: 'header__info-blurb' },
                  _react2.default.createElement('img', {
                    src: avatar || _defaultAvatar2x2.default,
                    className: 'header__info-block__avatar'
                  }),
                  _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                      'span',
                      { className: 'header__info-block__username' },
                      name
                    )
                  ),
                  Boolean(badgeGlobalCount) && _react2.default.createElement(_Badge2.default, {
                    className: 'header__global-badge',
                    count: badgeGlobalCount
                  }),
                  _react2.default.createElement('span', { className: arrowClassNames })
                ),
                _react2.default.createElement(_NavBarMenu2.default, {
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
}(_react.PureComponent);

HeaderLoggedIn.propTypes = {
  menuLinks: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    label: _propTypes.string.isRequired,
    href: _propTypes.string.isRequired,
    helperText: _propTypes.string
  })),
  name: _propTypes.string,
  avatar: _propTypes.string,
  left: (0, _propTypes.shape)({
    type: _propTypes.string.isRequired,
    label: _propTypes.string,
    action: _propTypes.func
  }),
  isMinimal: _propTypes.bool
};
HeaderLoggedIn.defaultProps = {
  name: 'set up your profile',
  isMinimal: false
};
exports.default = HeaderLoggedIn;
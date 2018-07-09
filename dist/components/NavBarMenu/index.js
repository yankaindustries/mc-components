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

var _NavBarMenuItem = require('../NavBarMenuItem');

var _NavBarMenuItem2 = _interopRequireDefault(_NavBarMenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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


      var dropDownClassName = (0, _classnames2.default)('navbar-menu', { 'navbar-menu--open': isOpen });

      return _react2.default.createElement(
        'ul',
        { className: dropDownClassName },
        menuLinks.map(function (menuLink, index) {
          return _react2.default.createElement(_NavBarMenuItem2.default, Object.assign({}, menuLink, {
            key: index,
            centered: menuLinks.length === index + 1
          }));
        })
      );
    }
  }]);

  return NavBarMenu;
}(_react.PureComponent);

NavBarMenu.propTypes = {
  isOpen: _propTypes.bool.isRequired,
  menuLinks: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    label: _propTypes.string.isRequired,
    href: _propTypes.string.isRequired,
    helperText: _propTypes.string
  })).isRequired
};
exports.default = NavBarMenu;
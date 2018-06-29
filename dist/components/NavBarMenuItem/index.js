'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Badge = require('../Badge');

var _Badge2 = _interopRequireDefault(_Badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBarMenuItem = function NavBarMenuItem(_ref) {
  var label = _ref.label,
      helperText = _ref.helperText,
      href = _ref.href,
      badgeCount = _ref.badgeCount,
      centered = _ref.centered;

  var classNames = (0, _classnames2.default)('navbar-menu__item', { 'navbar-menu__item--centered': centered });

  return _react2.default.createElement(
    'li',
    { className: classNames },
    _react2.default.createElement(
      'a',
      { className: 'navbar-menu__item-link', href: href },
      label,
      Boolean(badgeCount) && _react2.default.createElement(_Badge2.default, { count: badgeCount }),
      helperText && _react2.default.createElement(
        'span',
        { className: 'navbar-menu__item-helper' },
        helperText
      )
    )
  );
};

NavBarMenuItem.propTypes = {
  label: _propTypes.string.isRequired,
  href: _propTypes.string.isRequired,
  helperText: _propTypes.string,
  centered: _propTypes.bool,
  badgeCount: _propTypes.number
};

NavBarMenuItem.defaultProps = {
  centered: false
};

exports.default = NavBarMenuItem;
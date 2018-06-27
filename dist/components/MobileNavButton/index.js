'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MobileNavButton = function MobileNavButton(_ref) {
  var isOpen = _ref.isOpen,
      onClick = _ref.onClick;

  var classNames = (0, _classnames2.default)('mobile-nav-button', { 'mobile-nav-button--opened': isOpen });

  return _react2.default.createElement(
    'div',
    { onClick: onClick, className: classNames },
    _react2.default.createElement('span', { className: 'mobile-nav-button__lines' })
  );
};

MobileNavButton.propTypes = {
  isOpen: _propTypes.bool.isRequired,
  onClick: _propTypes.func.isRequired
};

exports.default = MobileNavButton;
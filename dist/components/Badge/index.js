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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Badge = function Badge(_ref) {
  var count = _ref.count,
      className = _ref.className;

  var classNames = (0, _classnames2.default)('badge', _defineProperty({}, className, Boolean(className)));

  return _react2.default.createElement(
    'span',
    { className: classNames },
    count
  );
};

Badge.propTypes = {
  count: _propTypes.number.isRequired,
  className: _propTypes.string
};

exports.default = Badge;
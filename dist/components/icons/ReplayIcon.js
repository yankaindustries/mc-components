'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReplayIcon = function ReplayIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === undefined ? '#dadada' : _ref$color,
      onClick = _ref.onClick,
      className = _ref.className;
  return _react2.default.createElement(
    'div',
    { className: className, onClick: onClick },
    _react2.default.createElement(
      'svg',
      {
        height: '48',
        viewBox: '0 0 48 48',
        width: '48',
        xmlns: 'http://www.w3.org/2000/svg'
      },
      _react2.default.createElement('path', {
        d: 'M0 0h48v48H0z',
        fill: 'none'
      }),
      _react2.default.createElement('path', {
        fill: color,
        d: 'M24 10V2L14 12l10 10v-8c6.63 0 12 5.37 12 12s-5.37 12-12 12-12-5.37-12-12H8c0 8.84 7.16 16 16 16s16-7.16 16-16-7.16-16-16-16z'
      })
    )
  );
};

ReplayIcon.propTypes = {
  onClick: _propTypes.func,
  color: _propTypes.string,
  className: _propTypes.string
};

exports.default = ReplayIcon;
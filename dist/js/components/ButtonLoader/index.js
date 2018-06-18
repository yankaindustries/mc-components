'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonLoader = function ButtonLoader() {
  return _react2.default.createElement(
    'div',
    { className: 'loader' },
    _react2.default.createElement(
      'svg',
      {
        width: '120',
        height: '30',
        viewBox: '0 0 120 30',
        xmlns: 'http://www.w3.org/2000/svg',
        fill: '#fff'
      },
      _react2.default.createElement(
        'circle',
        { cx: '15', cy: '15', r: '15' },
        _react2.default.createElement('animate', {
          attributeName: 'r',
          from: '15',
          to: '15',
          begin: '0s',
          dur: '0.8s',
          values: '15;9;15',
          calcMode: 'linear',
          repeatCount: 'indefinite'
        }),
        _react2.default.createElement('animate', {
          attributeName: 'fill-opacity',
          from: '1',
          to: '1',
          begin: '0s',
          dur: '0.8s',
          values: '1;.5;1',
          calcMode: 'linear',
          repeatCount: 'indefinite'
        })
      ),
      _react2.default.createElement(
        'circle',
        { cx: '60', cy: '15', r: '9', fillOpacity: '0.3' },
        _react2.default.createElement('animate', {
          attributeName: 'r',
          from: '9',
          to: '9',
          begin: '0s',
          dur: '0.8s',
          values: '9;15;9',
          calcMode: 'linear',
          repeatCount: 'indefinite'
        }),
        _react2.default.createElement('animate', {
          attributeName: 'fill-opacity',
          from: '0.5',
          to: '0.5',
          begin: '0s',
          dur: '0.8s',
          values: '.5;1;.5',
          calcMode: 'linear',
          repeatCount: 'indefinite'
        })
      ),
      _react2.default.createElement(
        'circle',
        { cx: '105', cy: '15', r: '15' },
        _react2.default.createElement('animate', {
          attributeName: 'r',
          from: '15',
          to: '15',
          begin: '0s',
          dur: '0.8s',
          values: '15;9;15',
          calcMode: 'linear',
          repeatCount: 'indefinite'
        }),
        _react2.default.createElement('animate', {
          attributeName: 'fill-opacity',
          from: '1',
          to: '1',
          begin: '0s',
          dur: '0.8s',
          values: '1;.5;1',
          calcMode: 'linear',
          repeatCount: 'indefinite'
        })
      )
    )
  );
};

exports.default = ButtonLoader;
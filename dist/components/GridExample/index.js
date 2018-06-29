'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  background: '#ccc',
  width: '100%',
  height: '64px',
  border: '1px solid #929093'
};

var GridExample = function GridExample() {
  return _react2.default.createElement(
    'div',
    { className: 'container grid-example' },
    _react2.default.createElement(
      'div',
      { className: 'row align-items-center' },
      _react2.default.createElement(
        'div',
        { className: 'col-md' },
        _react2.default.createElement('div', { className: 'grid-example-block', style: styles })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md' },
        _react2.default.createElement('div', { className: 'grid-example-block', style: styles })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md' },
        _react2.default.createElement('div', { className: 'grid-example-block', style: styles })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md' },
        _react2.default.createElement('div', { className: 'grid-example-block', style: styles })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md' },
        _react2.default.createElement('div', { className: 'grid-example-block', style: styles })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md' },
        _react2.default.createElement('div', { className: 'grid-example-block', style: styles })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md' },
        _react2.default.createElement('div', { className: 'grid-example-block', style: styles })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md' },
        _react2.default.createElement('div', { className: 'grid-example-block', style: styles })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md' },
        _react2.default.createElement('div', { className: 'grid-example-block', style: styles })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md' },
        _react2.default.createElement('div', { className: 'grid-example-block', style: styles })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md' },
        _react2.default.createElement('div', { className: 'grid-example-block', style: styles })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md' },
        _react2.default.createElement('div', { className: 'grid-example-block', style: styles })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row align-items-center' },
      _react2.default.createElement(
        'div',
        { className: 'col-sm-12 col-md-4' },
        _react2.default.createElement('div', { className: 'grid-example-block', style: styles })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-sm-12 col-md-4' },
        _react2.default.createElement('div', { className: 'grid-example-block', style: styles })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-sm-12 col-md-4' },
        _react2.default.createElement('div', { className: 'grid-example-block', style: styles })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row align-items-center' },
      _react2.default.createElement(
        'div',
        { className: 'col-6' },
        _react2.default.createElement('div', { className: 'grid-example-block', style: styles })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-6' },
        _react2.default.createElement('div', { className: 'grid-example-block', style: styles })
      )
    )
  );
};

exports.default = GridExample;
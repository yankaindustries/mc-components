'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _RoundedBoxHeader = require('../RoundedBoxHeader');

var _RoundedBoxHeader2 = _interopRequireDefault(_RoundedBoxHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RoundedBox = function RoundedBox(_ref) {
  var children = _ref.children,
      header = _ref.header,
      subheader = _ref.subheader,
      style = _ref.style,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      _ref$HeaderComponent = _ref.HeaderComponent,
      HeaderComponent = _ref$HeaderComponent === undefined ? _RoundedBoxHeader2.default : _ref$HeaderComponent;

  var containerClassNames = (0, _classnames2.default)('rounded-box', _defineProperty({}, className, Boolean(className)));

  return _react2.default.createElement(
    'div',
    { style: style, className: containerClassNames },
    _react2.default.createElement(HeaderComponent, { subheader: subheader, header: header }),
    children
  );
};

RoundedBox.propTypes = {
  children: (0, _propTypes.oneOfType)([(0, _propTypes.arrayOf)(_propTypes.node), _propTypes.node]),
  header: _propTypes.string,
  subheader: _propTypes.string,
  className: _propTypes.string,
  style: _propTypes.object,
  HeaderComponent: _propTypes.func
};

exports.default = RoundedBox;
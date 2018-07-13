'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _ButtonLoader = require('../ButtonLoader');

var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      onClick = _ref.onClick,
      primary = _ref.primary,
      secondary = _ref.secondary,
      tertiary = _ref.tertiary,
      fullWidth = _ref.fullWidth,
      text = _ref.text,
      link = _ref.link,
      linkMuted = _ref.linkMuted,
      loading = _ref.loading,
      Icon = _ref.Icon,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'onClick', 'primary', 'secondary', 'tertiary', 'fullWidth', 'text', 'link', 'linkMuted', 'loading', 'Icon']);

  var classNames = (0, _classnames2.default)('c-button', _defineProperty({}, className, Boolean(className)), {
    'c-button--primary': primary,
    'c-button--secondary': secondary,
    'c-button--tertiary': tertiary,
    'c-button--with-icon': Boolean(Icon),
    'c-button--full-width': fullWidth,
    'c-button--text': text,
    'c-button--link': link,
    'c-button--link-muted': linkMuted,
    'c-button--loading': loading
  });

  return _react2.default.createElement(
    'button',
    Object.assign({
      className: classNames,
      onClick: onClick
    }, props),
    Boolean(Icon) && Icon,
    _react2.default.createElement(
      'span',
      null,
      children
    ),
    loading && _react2.default.createElement(_ButtonLoader2.default, null)
  );
};

Button.propTypes = {
  children: (0, _propTypes.oneOfType)([(0, _propTypes.arrayOf)(_propTypes.node), _propTypes.node, _propTypes.string]),
  className: _propTypes.string,
  onClick: _propTypes.func,
  primary: _propTypes.bool,
  secondary: _propTypes.bool,
  tertiary: _propTypes.bool,
  fullWidth: _propTypes.bool,
  text: _propTypes.bool,
  link: _propTypes.bool,
  linkMuted: _propTypes.bool,
  loading: _propTypes.bool,
  Icon: _propTypes.node
};

Button.defaultProps = {
  className: '',
  onClick: function onClick() {},
  primary: false,
  secondary: false,
  tertiary: false,
  fullWidth: false,
  text: false,
  link: false,
  linkMuted: false,
  loading: false
};

exports.default = Button;
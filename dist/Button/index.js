var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import cn from 'classnames';
import { string, func, bool, node, oneOfType, arrayOf } from 'prop-types';

import Loader from '../Icons/Loader';

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      onClick = _ref.onClick,
      secondary = _ref.secondary,
      tertiary = _ref.tertiary,
      fullWidth = _ref.fullWidth,
      text = _ref.text,
      link = _ref.link,
      linkMuted = _ref.linkMuted,
      loading = _ref.loading,
      Icon = _ref.Icon,
      props = _objectWithoutProperties(_ref, ['children', 'className', 'onClick', 'secondary', 'tertiary', 'fullWidth', 'text', 'link', 'linkMuted', 'loading', 'Icon']);

  var classNames = cn('c-button', _defineProperty({}, className, Boolean(className)), {
    'c-button--secondary': secondary,
    'c-button--tertiary': tertiary,
    'c-button--with-icon': Boolean(Icon),
    'c-button--full-width': fullWidth,
    'c-button--text': text,
    'c-button--link': link,
    'c-button--link-muted': linkMuted,
    'c-button--loading': loading
  });

  return React.createElement(
    'button',
    _extends({
      className: classNames,
      onClick: onClick
    }, props),
    Boolean(Icon) && Icon,
    React.createElement(
      'span',
      null,
      children
    ),
    loading && React.createElement(Loader, { className: 'loader' })
  );
};

Button.propTypes = {
  children: oneOfType([arrayOf(node), node, string]),
  className: string,
  onClick: func,
  secondary: bool,
  tertiary: bool,
  fullWidth: bool,
  text: bool,
  link: bool,
  linkMuted: bool,
  loading: bool,
  Icon: node
};

Button.defaultProps = {
  className: '',
  onClick: function onClick() {},
  secondary: false,
  tertiary: false,
  fullWidth: false,
  text: false,
  link: false,
  linkMuted: false,
  loading: false
};

export default Button;
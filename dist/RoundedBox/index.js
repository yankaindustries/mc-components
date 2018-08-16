function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { node, func, oneOfType, arrayOf, string, object } from 'prop-types';
import classNames from 'classnames';
import RoundedBoxHeader from '../RoundedBoxHeader';

var RoundedBox = function RoundedBox(_ref) {
  var children = _ref.children,
      header = _ref.header,
      subheader = _ref.subheader,
      style = _ref.style,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$HeaderComponent = _ref.HeaderComponent,
      HeaderComponent = _ref$HeaderComponent === void 0 ? RoundedBoxHeader : _ref$HeaderComponent;
  var containerClassNames = classNames('rounded-box', _defineProperty({}, className, Boolean(className)));
  return React.createElement("div", {
    style: style,
    className: containerClassNames
  }, React.createElement(HeaderComponent, {
    subheader: subheader,
    header: header
  }), children);
};

RoundedBox.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  header: string,
  subheader: string,
  className: string,
  style: object,
  HeaderComponent: func
};
export default RoundedBox;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { number, string } from 'prop-types';
import cn from 'classnames';

var Badge = function Badge(_ref) {
  var count = _ref.count,
      className = _ref.className;

  var classNames = cn('badge', _defineProperty({}, className, Boolean(className)));

  return React.createElement(
    'span',
    { className: classNames },
    count
  );
};

Badge.propTypes = {
  count: number.isRequired,
  className: string
};

export default Badge;
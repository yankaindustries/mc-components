function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { node, bool, oneOf, oneOfType, arrayOf } from 'prop-types';
import cn from 'classnames';

var VideoPlayerScreen = function VideoPlayerScreen(_ref) {
  var isActive = _ref.isActive,
      variation = _ref.variation,
      children = _ref.children;

  var classNames = cn('bc-player-screen', _defineProperty({}, 'bc-player-' + variation, variation), { 'bc-player-screen--is-open': isActive });

  return React.createElement(
    'div',
    {
      className: classNames,
      style: { opacity: isActive ? 1 : 0 }
    },
    children
  );
};

VideoPlayerScreen.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  variation: oneOf(['endscreen', 'beforescreen', 'pausescreen']),
  isActive: bool
};

VideoPlayerScreen.defaultProps = {
  isActive: false
};

export default VideoPlayerScreen;
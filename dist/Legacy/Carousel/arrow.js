function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Arrow from '../../Icons/Arrow';

var CarouselArrow = function CarouselArrow(_ref) {
  var direction = _ref.direction,
      className = _ref.className,
      onClick = _ref.onClick,
      isHidden = _ref.isHidden;

  var classNames = cn('mc-carousel-arrow', _defineProperty({}, className, Boolean(className)), _defineProperty({}, 'mc-carousel-arrow--' + direction, Boolean(direction)));
  return React.createElement(
    'button',
    {
      className: classNames,
      onClick: onClick,
      style: isHidden ? { opacity: 0 } : null
    },
    React.createElement(Arrow, { className: 'mc-carousel-arrow__image' })
  );
};

CarouselArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  direction: PropTypes.string,
  isHidden: PropTypes.bool
};

CarouselArrow.defaultProps = {
  isHidden: false
};

export default CarouselArrow;
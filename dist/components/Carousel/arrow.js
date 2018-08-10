'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _arrow = require('../../assets/icons/arrow.svg');

var _arrow2 = _interopRequireDefault(_arrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CarouselArrow = function CarouselArrow(_ref) {
  var direction = _ref.direction,
      className = _ref.className,
      onClick = _ref.onClick,
      isHidden = _ref.isHidden;

  var classNames = (0, _classnames2.default)('mc-carousel-arrow', _defineProperty({}, className, Boolean(className)), _defineProperty({}, 'mc-carousel-arrow--' + direction, Boolean(direction)));

  return _react2.default.createElement(
    'button',
    {
      className: classNames,
      onClick: onClick,
      style: isHidden ? { opacity: 0 } : null
    },
    _react2.default.createElement(_arrow2.default, { className: 'mc-carousel-arrow__image' })
  );
};

CarouselArrow.propTypes = {
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired,
  direction: _propTypes2.default.string,
  isHidden: _propTypes2.default.bool
};

CarouselArrow.defaultProps = {
  isHidden: false
};

exports.default = CarouselArrow;
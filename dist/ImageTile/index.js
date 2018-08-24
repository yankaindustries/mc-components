var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

var ImageTile = function (_PureComponent) {
  _inherits(ImageTile, _PureComponent);

  function ImageTile() {
    _classCallCheck(this, ImageTile);

    return _possibleConstructorReturn(this, (ImageTile.__proto__ || Object.getPrototypeOf(ImageTile)).apply(this, arguments));
  }

  _createClass(ImageTile, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          aspectRatio = _props.aspectRatio,
          className = _props.className,
          children = _props.children,
          imageUrl = _props.imageUrl;


      var classNames = cn('tile', 'tile--' + aspectRatio, _defineProperty({}, className, Boolean(className)));

      return React.createElement(
        'div',
        { className: classNames },
        React.createElement('div', {
          className: 'background',
          style: { backgroundImage: 'url(\'' + imageUrl + '\')' }
        }),
        React.createElement(
          'div',
          { className: 'content' },
          children
        )
      );
    }
  }]);

  return ImageTile;
}(PureComponent);

ImageTile.propTypes = {
  aspectRatio: PropTypes.oneOf(['4x3', '16x9', '100x65', '1000x609', '519x187']),
  className: PropTypes.string,
  children: PropTypes.node,
  imageUrl: PropTypes.string.isRequired
};
ImageTile.defaultProps = {
  aspectRatio: '16x9',
  className: ''
};
export default ImageTile;
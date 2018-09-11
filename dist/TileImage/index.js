var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Background from '../Background';

var TileImage = function (_PureComponent) {
  _inherits(TileImage, _PureComponent);

  function TileImage() {
    _classCallCheck(this, TileImage);

    return _possibleConstructorReturn(this, (TileImage.__proto__ || Object.getPrototypeOf(TileImage)).apply(this, arguments));
  }

  _createClass(TileImage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          image = _props.image,
          imageUrl = _props.imageUrl;


      var classes = ['mc-tile__component', 'mc-tile-image', className || ''].join(' ');

      return React.createElement(
        'div',
        { className: classes },
        React.createElement(
          Background,
          {
            className: 'mc-tile-image__image',
            element: image || React.createElement('img', { src: imageUrl }),
            fit: 'container',
            size: 'cover'
          },
          children && React.createElement(
            'div',
            { className: 'mc-tile-image__content' },
            children
          )
        )
      );
    }
  }]);

  return TileImage;
}(PureComponent);

TileImage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  image: PropTypes.node,
  imageUrl: PropTypes.string
};
TileImage.defaultProps = {
  className: ''
};
export default TileImage;
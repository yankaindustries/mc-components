var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

var ImageTileCaption = function (_PureComponent) {
  _inherits(ImageTileCaption, _PureComponent);

  function ImageTileCaption() {
    _classCallCheck(this, ImageTileCaption);

    return _possibleConstructorReturn(this, (ImageTileCaption.__proto__ || Object.getPrototypeOf(ImageTileCaption)).apply(this, arguments));
  }

  _createClass(ImageTileCaption, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          subtitle = _props.subtitle,
          position = _props.position,
          children = _props.children;


      var classNames = ['tile__caption', 'imate-tile__caption--' + position].join(' ');

      return React.createElement(
        'div',
        { className: classNames },
        React.createElement(
          'h2',
          { className: 'tile__caption__title' },
          title
        ),
        React.createElement(
          'h3',
          { className: 'tile__caption__subtitle' },
          subtitle
        ),
        children
      );
    }
  }]);

  return ImageTileCaption;
}(PureComponent);

ImageTileCaption.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  position: PropTypes.oneOf(['above', 'below']),
  children: PropTypes.node
};
ImageTileCaption.defaultProps = {
  position: 'above'
};
export default ImageTileCaption;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

var Tile = function (_PureComponent) {
  _inherits(Tile, _PureComponent);

  function Tile() {
    _classCallCheck(this, Tile);

    return _possibleConstructorReturn(this, (Tile.__proto__ || Object.getPrototypeOf(Tile)).apply(this, arguments));
  }

  _createClass(Tile, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          aspectRatio = _props.aspectRatio,
          children = _props.children,
          className = _props.className;


      var classes = ['mc-tile', 'mc-tile--' + aspectRatio, className || ''].join(' ');

      return React.createElement(
        'div',
        { className: classes },
        children && React.createElement(
          'div',
          { className: 'mc-tile__content content' },
          children
        )
      );
    }
  }]);

  return Tile;
}(PureComponent);

Tile.propTypes = {
  aspectRatio: PropTypes.oneOf(['1x1', '4x3', '16x9', '100x65', '1000x609', '519x187']),
  children: PropTypes.node,
  className: PropTypes.string
};
Tile.defaultProps = {
  aspectRatio: '16x9'
};
export default Tile;
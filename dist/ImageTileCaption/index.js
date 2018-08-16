function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

var ImageTileCaption =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ImageTileCaption, _PureComponent);

  function ImageTileCaption() {
    _classCallCheck(this, ImageTileCaption);

    return _possibleConstructorReturn(this, _getPrototypeOf(ImageTileCaption).apply(this, arguments));
  }

  _createClass(ImageTileCaption, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          subtitle = _this$props.subtitle,
          position = _this$props.position,
          children = _this$props.children;
      var classNames = ['tile__caption', "imate-tile__caption--".concat(position)].join(' ');
      return React.createElement("div", {
        className: classNames
      }, React.createElement("h2", {
        className: "tile__caption__title"
      }, title), React.createElement("h3", {
        className: "tile__caption__subtitle"
      }, subtitle), children);
    }
  }]);

  return ImageTileCaption;
}(PureComponent);

_defineProperty(ImageTileCaption, "propTypes", {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  position: PropTypes.oneOf(['above', 'below']),
  children: PropTypes.node
});

_defineProperty(ImageTileCaption, "defaultProps", {
  position: 'above'
});

export { ImageTileCaption as default };
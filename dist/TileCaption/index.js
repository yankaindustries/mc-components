function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

var TileCaption =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TileCaption, _PureComponent);

  function TileCaption() {
    _classCallCheck(this, TileCaption);

    return _possibleConstructorReturn(this, _getPrototypeOf(TileCaption).apply(this, arguments));
  }

  _createClass(TileCaption, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          position = _this$props.position,
          subtitle = _this$props.subtitle,
          title = _this$props.title;
      var positionClasses = position.split(' ').map(function (pos) {
        return "mc-tile-caption--".concat(pos);
      });
      var classes = ['mc-tile__component', 'mc-tile-caption'].concat(_toConsumableArray(positionClasses), [className || '']).join(' ');
      return React.createElement("div", {
        className: classes
      }, React.createElement("div", {
        className: "mc-tile-caption__titles"
      }, title && React.createElement("h4", {
        className: "mc-tile-caption__title mc-text-h2 mc-text--uppercase"
      }, title), subtitle && React.createElement("h5", {
        className: "mc-tile-caption__subtitle mc-text-h4 mc-text--muted"
      }, subtitle)), children && React.createElement("div", {
        className: "mc-tile-caption__content content"
      }, children));
    }
  }]);

  return TileCaption;
}(PureComponent);

_defineProperty(TileCaption, "propTypes", {
  children: PropTypes.element,
  className: PropTypes.string,
  position: PropTypes.oneOf(['left bottom', 'center bottom', 'left below', 'center below']),
  subtitle: PropTypes.string,
  title: PropTypes.string
});

_defineProperty(TileCaption, "defaultProps", {
  position: 'left bottom'
});

export { TileCaption as default };
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

import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { renderChildren } from '../helpers';

var AnimationHandler =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AnimationHandler, _PureComponent);

  function AnimationHandler() {
    _classCallCheck(this, AnimationHandler);

    return _possibleConstructorReturn(this, _getPrototypeOf(AnimationHandler).apply(this, arguments));
  }

  _createClass(AnimationHandler, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          animating = _this$props.animating,
          type = _this$props.type,
          children = _this$props.children;
      var classes = ['mc-animation', "mc-animation--".concat(type), animating ? 'mc-animation--animating' : ''].join(' ');
      return renderChildren(children, {
        className: classes
      });
    }
  }]);

  return AnimationHandler;
}(PureComponent);

_defineProperty(AnimationHandler, "propTypes", {
  type: PropTypes.oneOf(['zoom', 'ken-burns', 'lift']),
  animating: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
});

_defineProperty(AnimationHandler, "defaultProps", {
  type: 'zoom'
});

export { AnimationHandler as default };
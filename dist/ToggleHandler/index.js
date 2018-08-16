function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { renderChildren } from '../helpers';

var CheckOverlay =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(CheckOverlay, _PureComponent);

  function CheckOverlay(props) {
    var _this;

    _classCallCheck(this, CheckOverlay);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckOverlay).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function () {
      var onChange = _this.props.onChange;
      var toggled = _this.state.toggled;

      _this.setState(function (_ref) {
        var toggled = _ref.toggled;
        return {
          toggled: !toggled
        };
      }, function () {
        return onChange(!toggled);
      });
    });

    _this.state = {
      toggled: props.toggled
    };
    return _this;
  }

  _createClass(CheckOverlay, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var toggled = this.state.toggled;
      return renderChildren(children, {
        toggled: toggled,
        onClick: this.handleClick
      });
    }
  }]);

  return CheckOverlay;
}(PureComponent);

_defineProperty(CheckOverlay, "propTypes", {
  onChange: PropTypes.func,
  toggled: PropTypes.bool,
  children: PropTypes.func.isRequired
});

_defineProperty(CheckOverlay, "defaultProps", {
  onChange: noop,
  toggled: false
});

export { CheckOverlay as default };
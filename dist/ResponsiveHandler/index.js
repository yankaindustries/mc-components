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
import { renderChildren } from '../helpers';
var BP = {
  XS: 0,
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200
};

var ResponsiveHandler =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ResponsiveHandler, _PureComponent);

  function ResponsiveHandler() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ResponsiveHandler);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ResponsiveHandler)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isXS: false,
      isSM: false,
      ltSM: false,
      gteSM: false,
      isMD: false,
      ltMD: false,
      gteMD: false,
      isLG: false,
      ltLG: false,
      gteLG: false,
      isXL: false,
      ltXL: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calculateSizes", function () {
      var width = window.innerWidth;
      var sizes = {
        isXS: width < BP.SM,
        gteXS: width >= BP.XS,
        isSM: width >= BP.SM && width < BP.MD,
        ltSM: width < BP.SM,
        gteSM: width >= BP.SM,
        isMD: width >= BP.MD && width < BP.LG,
        ltMD: width < BP.MD,
        gteMD: width >= BP.MD,
        isLG: width >= BP.LG && width < BP.XL,
        ltLG: width < BP.LG,
        gteLG: width >= BP.LG,
        isXL: width >= BP.XL,
        ltXL: width < BP.XL
      };

      _this.setState(sizes);
    });

    return _this;
  }

  _createClass(ResponsiveHandler, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.calculateSizes);
      this.calculateSizes();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.calculateSizes);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return renderChildren(children, this.state);
    }
  }]);

  return ResponsiveHandler;
}(PureComponent);

_defineProperty(ResponsiveHandler, "propTypes", {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
});

export { ResponsiveHandler as default };
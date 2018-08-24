var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var ResponsiveHandler = function (_PureComponent) {
  _inherits(ResponsiveHandler, _PureComponent);

  function ResponsiveHandler() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ResponsiveHandler);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ResponsiveHandler.__proto__ || Object.getPrototypeOf(ResponsiveHandler)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
    }, _this.calculateSizes = function () {
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ResponsiveHandler, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.calculateSizes);
      this.calculateSizes();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.calculateSizes);
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return renderChildren(children, this.state);
    }
  }]);

  return ResponsiveHandler;
}(PureComponent);

ResponsiveHandler.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
};
export default ResponsiveHandler;
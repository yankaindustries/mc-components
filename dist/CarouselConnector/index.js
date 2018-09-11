var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { renderChildren } from '../helpers';

var CarouselConnector = function (_PureComponent) {
  _inherits(CarouselConnector, _PureComponent);

  function CarouselConnector() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CarouselConnector);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CarouselConnector.__proto__ || Object.getPrototypeOf(CarouselConnector)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hero: null,
      thumbs: null
    }, _this.ref = function (name) {
      return function (slider) {
        _this[name] = slider;
      };
    }, _this.asNavFor = function (sibling) {
      return _this.state[sibling];
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CarouselConnector, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        hero: this.hero,
        thumbs: this.thumbs
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className;


      return React.createElement(
        'div',
        { className: className },
        renderChildren(children, {
          sliderRef: this.ref,
          asNavFor: this.asNavFor
        })
      );
    }
  }]);

  return CarouselConnector;
}(PureComponent);

CarouselConnector.propTypes = {
  children: PropTypes.func,
  className: PropTypes.string
};
export default CarouselConnector;
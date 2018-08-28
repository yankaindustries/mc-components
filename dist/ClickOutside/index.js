var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { func, node, object, oneOfType, arrayOf } from 'prop-types';

var ClickOutside = function (_Component) {
  _inherits(ClickOutside, _Component);

  function ClickOutside() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ClickOutside);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ClickOutside.__proto__ || Object.getPrototypeOf(ClickOutside)).call.apply(_ref, [this].concat(args))), _this), _this.state = { isTouch: false }, _this.onClickOutside = function (e) {
      if (e.type === 'touchend') {
        _this.setState({ isTouch: true });
      }
      if (e.type === 'click' && _this.state.isTouch) return;
      var divRef = _this.props.divRef;

      var ref = divRef || _this.box;
      if (!ref || !ref.current.contains(e.target)) {
        var onClickOutside = _this.props.onClickOutside;

        onClickOutside(e);
      }
    }, _this.box = React.createRef(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ClickOutside, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('touchend', this.onClickOutside, true);
      document.addEventListener('click', this.onClickOutside, true);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('touchend', this.onClickOutside, true);
      document.removeEventListener('click', this.onClickOutside, true);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          divRef = _props.divRef;


      if (divRef) {
        return children;
      }

      return React.createElement(
        'div',
        { ref: this.box },
        children
      );
    }
  }]);

  return ClickOutside;
}(Component);

ClickOutside.propTypes = {
  onClickOutside: func.isRequired,
  children: oneOfType([arrayOf(node), node]).isRequired,
  divRef: object
};
export default ClickOutside;
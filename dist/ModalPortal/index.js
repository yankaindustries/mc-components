var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Component } from 'react';
import ReactDOM from 'react-dom';
import { node, oneOfType, arrayOf } from 'prop-types';

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ModalPortal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call.apply(_ref, [this].concat(args))), _this), _this.el = document.createElement('div'), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ModalPortal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var modalRoot = document.getElementById('modal-root');
      modalRoot.appendChild(this.el);
      this.el.classList.add('modal');
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('modal__body--open');
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var modalRoot = document.getElementById('modal-root');
      modalRoot.removeChild(this.el);
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('modal__body--open');
    }
  }, {
    key: 'render',
    value: function render() {
      return ReactDOM.createPortal(this.props.children, this.el);
    }
  }]);

  return ModalPortal;
}(Component);

ModalPortal.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired
};
export default ModalPortal;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import cn from 'classnames';

import LogoWordmark from '../Icons/LogoWordmark';
import Logo from '../Icons/Logo';

var HeaderLoggedOut = function (_PureComponent) {
  _inherits(HeaderLoggedOut, _PureComponent);

  function HeaderLoggedOut() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HeaderLoggedOut);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HeaderLoggedOut.__proto__ || Object.getPrototypeOf(HeaderLoggedOut)).call.apply(_ref, [this].concat(args))), _this), _this.state = { condensed: false }, _this.handleScroll = function () {
      var offsetFromTop = 0;
      var offset = window.pageYOffset || document.documentElement.scrollTop;
      var condensed = offset > offsetFromTop;
      _this.setState({ condensed: condensed });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeaderLoggedOut, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleScroll();
      document.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      var condensed = this.state.condensed;

      var headerCn = cn('header-logged-out', { 'header-logged-out--condensed': condensed });
      var loginModalTriggerCn = 'mc-modal-login-trigger';

      return React.createElement(
        'div',
        { className: headerCn },
        React.createElement(
          'div',
          { className: 'header-logged-out__nav' },
          React.createElement(
            'div',
            { className: 'header-logged-out__section' },
            React.createElement(
              'a',
              { className: 'header-logged-out__wordmark', href: '/' },
              React.createElement(LogoWordmark, null)
            ),
            React.createElement(
              'a',
              { className: 'header-logged-out__logo', href: '/' },
              React.createElement(Logo, null)
            )
          ),
          React.createElement(
            'div',
            { className: 'header-logged-out__section' },
            React.createElement(
              'a',
              {
                className: 'header-logged-out__login-link ' + loginModalTriggerCn,
                href: '/#'
              },
              'Log In'
            )
          )
        )
      );
    }
  }]);

  return HeaderLoggedOut;
}(PureComponent);

export default HeaderLoggedOut;
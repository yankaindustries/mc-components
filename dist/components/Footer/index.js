'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _logo = require('../../assets/logo.svg');

var _logo2 = _interopRequireDefault(_logo);

var _sslBadge = require('../../assets/ssl-badge.svg');

var _sslBadge2 = _interopRequireDefault(_sslBadge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_PureComponent) {
  _inherits(Footer, _PureComponent);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'mc-site-footer' },
        _react2.default.createElement(
          'div',
          { className: 'mc-container mc-contain-inner' },
          _react2.default.createElement('img', {
            src: _logo2.default,
            alt: 'Logo wordmark',
            className: 'mc-site-footer__logo-footer'
          }),
          _react2.default.createElement(
            'ul',
            { className: 'mc-site-footer__links' },
            _react2.default.createElement(
              'li',
              { className: 'mc-site-footer__link' },
              _react2.default.createElement(
                'a',
                { href: '/#now-available' },
                'Browse Classes'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'mc-site-footer__link' },
              _react2.default.createElement(
                'a',
                { href: '/all-access-pass' },
                'All-Access'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'mc-site-footer__link' },
              _react2.default.createElement(
                'a',
                { href: '/gift' },
                'Gifts'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'mc-site-footer__link' },
              _react2.default.createElement(
                'a',
                {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  href: 'https://masterclasshelp.zendesk.com/hc/en-us'
                },
                'Help Center'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'mc-site-footer__link' },
              _react2.default.createElement(
                'a',
                {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  href: 'https://masterclasshelp.zendesk.com/hc/en-us/articles/205081248'
                },
                'Contact Us'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'mc-site-footer__link' },
              _react2.default.createElement(
                'a',
                { href: '/privacy' },
                'Privacy'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'mc-site-footer__link' },
              _react2.default.createElement(
                'a',
                { href: '/terms' },
                'Terms'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'mc-site-footer__link' },
              _react2.default.createElement(
                'a',
                { href: 'http://careers.masterclass.com' },
                'Careers'
              )
            ),
            _react2.default.createElement(
              'p',
              { className: 'mc-site-footer__copyright' },
              'Copyright \xA9 2018 MasterClass'
            )
          ),
          _react2.default.createElement('img', {
            src: _sslBadge2.default,
            alt: 'Secured by Expedited SSL',
            className: 'mc-site-footer__ssl-badge',
            name: 'ssl-badge'
          })
        )
      );
    }
  }]);

  return Footer;
}(_react.PureComponent);

exports.default = Footer;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent, Fragment } from 'react';
import { bool } from 'prop-types';

import Logo from '../Icons/Logo';
import SSLBadge from '../Icons/SslBadge';

var Footer = function (_PureComponent) {
  _inherits(Footer, _PureComponent);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      var isMinimal = this.props.isMinimal;


      return React.createElement(
        Fragment,
        null,
        React.createElement(
          'div',
          { className: 'mc-site-footer' },
          React.createElement(
            'div',
            { className: 'mc-container mc-contain-inner' },
            React.createElement(Logo, { className: 'mc-site-footer__logo-footer' }),
            !isMinimal && React.createElement(
              Fragment,
              null,
              React.createElement(
                'ul',
                { className: 'mc-site-footer__links' },
                React.createElement(
                  'li',
                  { className: 'mc-site-footer__link' },
                  React.createElement(
                    'a',
                    { href: '/#now-available' },
                    'Browse Classes'
                  )
                ),
                React.createElement(
                  'li',
                  { className: 'mc-site-footer__link' },
                  React.createElement(
                    'a',
                    { href: '/all-access-pass' },
                    'All-Access'
                  )
                ),
                React.createElement(
                  'li',
                  { className: 'mc-site-footer__link' },
                  React.createElement(
                    'a',
                    { href: '/gift' },
                    'Gifts'
                  )
                ),
                React.createElement(
                  'li',
                  { className: 'mc-site-footer__link' },
                  React.createElement(
                    'a',
                    {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      href: 'https://masterclasshelp.zendesk.com/hc/en-us'
                    },
                    'Help Center'
                  )
                ),
                React.createElement(
                  'li',
                  { className: 'mc-site-footer__link' },
                  React.createElement(
                    'a',
                    {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      href: 'https://masterclasshelp.zendesk.com/hc/en-us/articles/205081248'
                    },
                    'Contact Us'
                  )
                ),
                React.createElement(
                  'li',
                  { className: 'mc-site-footer__link' },
                  React.createElement(
                    'a',
                    { href: '/privacy' },
                    'Privacy'
                  )
                ),
                React.createElement(
                  'li',
                  { className: 'mc-site-footer__link' },
                  React.createElement(
                    'a',
                    { href: '/terms' },
                    'Terms'
                  )
                ),
                React.createElement(
                  'li',
                  { className: 'mc-site-footer__link' },
                  React.createElement(
                    'a',
                    { href: 'http://careers.masterclass.com' },
                    'Careers'
                  )
                ),
                React.createElement(
                  'p',
                  { className: 'mc-site-footer__copyright' },
                  'Copyright \xA9 2018 MasterClass'
                )
              ),
              React.createElement(SSLBadge, { className: 'mc-site-footer__ssl-badge' })
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(PureComponent);

Footer.propTypes = {
  isMinimal: bool
};
Footer.defaultProps = {
  isMinimal: false
};
export default Footer;
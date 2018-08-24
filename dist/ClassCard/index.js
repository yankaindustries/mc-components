var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { NumberToPX } from '../helpers';

var ClassCard = function (_PureComponent) {
  _inherits(ClassCard, _PureComponent);

  function ClassCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ClassCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ClassCard.__proto__ || Object.getPrototypeOf(ClassCard)).call.apply(_ref, [this].concat(args))), _this), _this.renderTriggerComponent = function (children) {
      var _this$props = _this.props,
          renderLinkComponent = _this$props.renderLinkComponent,
          href = _this$props.href,
          action = _this$props.action;


      if (renderLinkComponent) {
        return renderLinkComponent({
          children: children,
          className: 'mc-class-card__trigger'
        });
      }

      if (href) {
        return React.createElement(
          'a',
          { className: 'mc-class-card__trigger mc-class-card__trigger--anchor', href: href },
          children
        );
      }

      if (action) {
        return React.createElement(
          'button',
          { className: 'mc-class-card__trigger mc-class-card__trigger--button', onClick: action },
          children
        );
      }

      return children;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ClassCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          imageUrl = _props.imageUrl,
          teacherName = _props.teacherName,
          teacherDescription = _props.teacherDescription,
          className = _props.className,
          imageAlt = _props.imageAlt,
          width = _props.width,
          height = _props.height;


      var classNames = 'mc-class-card ' + className;

      return React.createElement(
        'div',
        {
          className: classNames,
          style: {
            width: NumberToPX(width),
            height: NumberToPX(height)
          }
        },
        this.renderTriggerComponent(React.createElement(
          Fragment,
          null,
          React.createElement('img', { className: 'mc-class-card__image', src: imageUrl, alt: imageAlt }),
          React.createElement(
            'div',
            { className: 'mc-class-card__caption' },
            React.createElement(
              'h2',
              { className: 'mc-class-card__caption__title' },
              teacherName
            ),
            React.createElement(
              'h3',
              { className: 'mc-class-card__caption__subtitle' },
              teacherDescription
            )
          )
        ))
      );
    }
  }]);

  return ClassCard;
}(PureComponent);

ClassCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  teacherName: PropTypes.string.isRequired,
  teacherDescription: PropTypes.string.isRequired,
  action: PropTypes.func,
  href: PropTypes.string,
  renderLinkComponent: PropTypes.func,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
ClassCard.defaultProps = {
  className: '',
  width: '',
  height: ''
};
ClassCard.renderTriggerComponentPropTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
export default ClassCard;
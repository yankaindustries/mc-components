'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../../utils/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        return _react2.default.createElement(
          'a',
          { className: 'mc-class-card__trigger mc-class-card__trigger--anchor', href: href },
          children
        );
      }

      if (action) {
        return _react2.default.createElement(
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

      return _react2.default.createElement(
        'div',
        {
          className: classNames,
          style: {
            width: (0, _helpers.NumberToPX)(width),
            height: (0, _helpers.NumberToPX)(height)
          }
        },
        this.renderTriggerComponent(_react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement('img', { className: 'mc-class-card__image', src: imageUrl, alt: imageAlt }),
          _react2.default.createElement(
            'div',
            { className: 'mc-class-card__caption' },
            _react2.default.createElement(
              'h2',
              { className: 'mc-class-card__caption__title' },
              teacherName
            ),
            _react2.default.createElement(
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
}(_react.PureComponent);

ClassCard.propTypes = {
  imageUrl: _propTypes2.default.string.isRequired,
  imageAlt: _propTypes2.default.string,
  teacherName: _propTypes2.default.string.isRequired,
  teacherDescription: _propTypes2.default.string.isRequired,
  action: _propTypes2.default.func,
  href: _propTypes2.default.string,
  renderLinkComponent: _propTypes2.default.func,
  className: _propTypes2.default.string,
  width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};
ClassCard.defaultProps = {
  className: '',
  width: '',
  height: ''
};
ClassCard.renderTriggerComponentPropTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};
exports.default = ClassCard;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Unmute from '../Icons/Muted';
import Mute from '../Icons/Unmuted';

var ACCOUNT_ID = '5344802162001';
var PLAYER_ID = 'rkcQq7gAe';

var TileVideo = function (_PureComponent) {
  _inherits(TileVideo, _PureComponent);

  function TileVideo(props) {
    _classCallCheck(this, TileVideo);

    var _this = _possibleConstructorReturn(this, (TileVideo.__proto__ || Object.getPrototypeOf(TileVideo)).call(this, props));

    _this.onMuteClick = function () {
      _this.setState(function (state) {
        return {
          muted: !state.muted
        };
      });
    };

    _this.playerRef = React.createRef();

    _this.state = {
      muted: props.muted
    };
    return _this;
  }

  _createClass(TileVideo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (window.bc && window.videojs) {
        window.bc(this.playerRef.current, {
          playbackRates: [0.5, 1, 1.5, 2]
        });
        window.videojs(this.playerRef.current);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          controls = _props.controls,
          videoId = _props.videoId,
          restProps = _objectWithoutProperties(_props, ['children', 'className', 'controls', 'videoId']);

      var muted = this.state.muted;


      var classes = ['mc-tile__component', 'mc-tile-video__video', 'bc-player__video', 'bc-player__video--default', 'mc-tile-video__video', 'video-js', className || ''].join(' ');

      return React.createElement(
        'div',
        { className: 'mc-tile-video mc-tile__component' },
        !controls && React.createElement(
          'a',
          { className: 'mc-tile-video__mute', onClick: this.onMuteClick },
          muted ? React.createElement(Unmute, null) : React.createElement(Mute, null)
        ),
        React.createElement('video', _extends({
          ref: this.playerRef,
          className: classes,
          'data-embed': 'default',
          'data-video-id': videoId,
          'data-player-id': PLAYER_ID,
          'data-account': ACCOUNT_ID,
          controls: controls,
          muted: muted
        }, restProps)),
        children
      );
    }
  }]);

  return TileVideo;
}(PureComponent);

TileVideo.propTypes = {
  autoPlay: PropTypes.bool,
  children: PropTypes.element,
  controls: PropTypes.bool,
  className: PropTypes.string,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  videoId: PropTypes.string.isRequired
};
TileVideo.defaultProps = {
  autoPlay: false,
  controls: false,
  loop: false,
  muted: false
};
export default TileVideo;
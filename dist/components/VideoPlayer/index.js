'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ReplayIcon = require('../icons/ReplayIcon');

var _ReplayIcon2 = _interopRequireDefault(_ReplayIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoPlayer = function (_React$PureComponent) {
  _inherits(VideoPlayer, _React$PureComponent);

  function VideoPlayer(props) {
    _classCallCheck(this, VideoPlayer);

    var _this = _possibleConstructorReturn(this, (VideoPlayer.__proto__ || Object.getPrototypeOf(VideoPlayer)).call(this, props));

    _this.state = { endscreenOpen: false };

    _this.handlePlayerReady = function () {
      var _this$props = _this.props,
          onPlay = _this$props.onPlay,
          onPause = _this$props.onPause,
          onVideoReady = _this$props.onVideoReady,
          onPlayerReady = _this$props.onPlayerReady;


      if (onPlay) {
        _this.video.on('play', function () {
          onPlay(_this.video);
        });
      }
      if (onPause) {
        _this.video.on('pause', function () {
          onPause(_this.video);
        });
      }

      _this.video.on('ended', _this.handleVideoEnd);

      if (onVideoReady) {
        _this.video.on('loadedmetadata', function () {
          onVideoReady(_this.video);
        });
      }
      if (onPlayerReady) {
        onPlayerReady(_this.video);
      }

      _this.startSecondsTimer();
    };

    _this.handleVideoEnd = function () {
      _this.currentTime = 0;
      _this.hasEnded = true;
      if (_this.props.isLooped) {
        _this.video.play();
      } else if (_this.props.endscreenComponent) {
        _this.setState({
          endscreenOpen: true
        });
      }
      if (_this.props.onEnd) {
        _this.props.onEnd(_this.video);
      }
    };

    _this.handleReplayClick = function () {
      _this.video.play();
      _this.setState({
        endscreenOpen: false
      });
    };

    _this.replaceWith = function (videoId) {
      if (_this.video.customOverlay) {
        _this.video.customOverlay.close();
      }

      _this.video.catalog.getVideo(videoId, function (error, video) {
        if (error && _this.props.onError) {
          _this.props.onError(error, _this.video);
          return;
        }
        _this.video.catalog.load(video);
        _this.hasEnded = false;
        _this.currentTime = 0;
        _this.setState({
          endscreenOpen: false
        });
        _this.video.play();
      });
    };

    _this.startSecondsTimer = function () {
      if (_this.props.onTimeChange) {
        _this.video.on('timeupdate', function () {
          var currentTime = Math.floor(_this.video.currentTime());
          if (_this.currentTime < currentTime) {
            _this.currentTime = currentTime;
            _this.props.onTimeChange(currentTime);
          }
        });
      }
    };

    _this.renderEndScreen = function () {
      return _react2.default.createElement(
        'div',
        { className: 'bc-player-endscreen' },
        _react2.default.createElement(_ReplayIcon2.default, {
          className: 'bc-player-endscreen__replay',
          onClick: _this.handleReplayClick
        }),
        _react2.default.createElement(
          'div',
          { className: 'bc-player-endscreen__content' },
          _this.props.endscreenComponent
        )
      );
    };

    _this.playerRef = _react2.default.createRef();
    return _this;
  }

  _createClass(VideoPlayer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (window.bc && window.videojs) {
        window.bc(this.playerRef.current, {
          playbackRates: [0.5, 1, 1.5, 2]
        });
        this.video = window.videojs(this.playerRef.current);
        this.video.ready(this.handlePlayerReady);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.videoId !== nextProps.videoId) {
        this.replaceWith(nextProps.videoId);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          endscreenComponent = _props.endscreenComponent,
          hasBreakpoints = _props.hasBreakpoints,
          theme = _props.theme,
          videoId = _props.videoId,
          playerId = _props.playerId,
          hasAutoplay = _props.hasAutoplay,
          hasControls = _props.hasControls,
          isMuted = _props.isMuted;


      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('bc-player', {
            'bc-player--endscreen-open': this.state.endscreenOpen,
            'bc-player--has-breakpoints': hasBreakpoints
          })
        },
        endscreenComponent && this.renderEndScreen(),
        _react2.default.createElement(
          'div',
          { className: 'bc-player__wrapper' },
          _react2.default.createElement('video', {
            'data-application-id': true,
            ref: this.playerRef,
            className: (0, _classnames2.default)('video-js', 'bc-player__video', 'bc-player__video--' + theme),
            'data-embed': 'default',
            'data-video-id': videoId,
            'data-player-id': playerId,
            'data-account': '5344802162001',
            autoPlay: hasAutoplay ? 'autoplay' : '',
            muted: isMuted ? 'muted' : '',
            controls: hasControls ? 'controls' : ''
          })
        )
      );
    }
  }]);

  return VideoPlayer;
}(_react2.default.PureComponent);

VideoPlayer.propTypes = {
  playerId: _propTypes2.default.string.isRequired,
  videoId: _propTypes2.default.string.isRequired,
  /** Player theme styles, must have correlating styles to go with it */
  theme: _propTypes2.default.oneOf(['default', 'chapter']),
  /** Pass in a react component to be shown at the end of the video. */
  endscreenComponent: _propTypes2.default.element,
  /**
   * Keeps video constrained to standard sizes, eg 1080x720.
   * Used to keep videos looking crisp.
   * Scales responsively.
   * */
  hasBreakpoints: _propTypes2.default.bool,
  hasControls: _propTypes2.default.bool,
  isMuted: _propTypes2.default.bool,
  isLooped: _propTypes2.default.bool,
  hasAutoplay: _propTypes2.default.bool,
  /** Player has been initialized */
  onPlayerReady: _propTypes2.default.func,
  /** Video is loaded and ready to play */
  onVideoReady: _propTypes2.default.func,
  onPlay: _propTypes2.default.func,
  onPause: _propTypes2.default.func,
  onEnd: _propTypes2.default.func,
  onTimeChange: _propTypes2.default.func,
  onError: _propTypes2.default.func
};
VideoPlayer.defaultProps = {
  playerId: 'rkcQq7gAe',
  videoId: '5450137526001',
  theme: 'default',
  isLooped: false,
  isMuted: false,
  hasAutoplay: true,
  hasControls: true,
  hasBreakpoints: false
};
exports.default = VideoPlayer;
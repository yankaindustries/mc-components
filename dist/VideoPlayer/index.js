var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import VideoPlayerScreen from '../VideoPlayerScreen';
import { renderChildren, closeFullscreen } from '../helpers';

var VideoPlayer = function (_PureComponent) {
  _inherits(VideoPlayer, _PureComponent);

  function VideoPlayer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, VideoPlayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VideoPlayer.__proto__ || Object.getPrototypeOf(VideoPlayer)).call.apply(_ref, [this].concat(args))), _this), _this.playerRef = React.createRef(), _this.currentTime = 0, _this.state = {
      endscreenOpen: false,
      beforescreenOpen: false,
      pausescreenOpen: false
    }, _this.handlePlayerReady = function () {
      var _this$props = _this.props,
          onPlay = _this$props.onPlay,
          onPause = _this$props.onPause,
          onVideoReady = _this$props.onVideoReady,
          onPlayerReady = _this$props.onPlayerReady,
          pausescreenComponent = _this$props.pausescreenComponent;


      _this.video.on('play', function () {
        var _this$state = _this.state,
            beforescreenOpen = _this$state.beforescreenOpen,
            pausescreenOpen = _this$state.pausescreenOpen;

        if (beforescreenOpen) {
          _this.setState({ beforescreenOpen: false });
        }
        if (pausescreenOpen) {
          _this.setState({ pausescreenOpen: false });
        }
        if (onPlay) {
          onPlay(_this.video);
        }
      });
      _this.video.on('pause', function () {
        // eslint-disable-next-line
        if (pausescreenComponent && !_this.video.isFullscreen_) {
          _this.setState({ pausescreenOpen: true });
        }
        if (onPause) {
          onPause(_this.video);
        }
      });

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
    }, _this.handleVideoEnd = function () {
      _this.currentTime = 0;
      _this.hasEnded = true;
      var _this$props2 = _this.props,
          isLooped = _this$props2.isLooped,
          endscreenComponent = _this$props2.endscreenComponent,
          pausescreenComponent = _this$props2.pausescreenComponent,
          onEnd = _this$props2.onEnd;

      if (isLooped) {
        _this.video.play();
      } else if (endscreenComponent) {
        _this.setState({ endscreenOpen: true });
        // eslint-disable-next-line
        if (_this.video.isFullscreen_) {
          closeFullscreen();
        }
      }
      if (pausescreenComponent) {
        _this.setState({ pausescreenOpen: false });
      }
      if (onEnd) {
        onEnd(_this.video);
      }
    }, _this.handleReplayClick = function () {
      _this.video.play();
      _this.setState({
        endscreenOpen: false
      });
    }, _this.resumeVideo = function () {
      _this.video.play();
    }, _this.setupVideo = function () {
      window.bc(_this.playerRef.current, {
        playbackRates: [0.5, 1, 1.5, 2]
      });
      _this.video = window.videojs(_this.playerRef.current);
      _this.video.ready(_this.handlePlayerReady);
    }, _this.replaceWith = function (videoId) {
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
    }, _this.startSecondsTimer = function () {
      if (_this.props.onTimeChange) {
        _this.video.on('timeupdate', function () {
          var currentTime = Math.floor(_this.video.currentTime());
          var remainingTime = Math.floor(_this.video.remainingTime());
          if (_this.currentTime < currentTime) {
            _this.currentTime = currentTime;
            _this.props.onTimeChange(currentTime, remainingTime);
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(VideoPlayer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (window.bc && window.videojs) {
        this.setupVideo();
      } else {
        var _props = this.props,
            playerId = _props.playerId,
            accountId = _props.accountId;


        var bcScript = document.createElement('script');
        bcScript.src = '//players.brightcove.net/' + accountId + '/' + playerId + '_default/index.min.js';

        document.body.appendChild(bcScript);
        // Call a function to play the video once player's JavaScropt loaded
        bcScript.onload = this.setupVideo;
      }
      var _props2 = this.props,
          progress = _props2.progress,
          beforescreenComponent = _props2.beforescreenComponent;


      if (progress) {
        this.playerRef.current.currentTime = progress;
      }

      if (beforescreenComponent) {
        this.setState({ beforescreenOpen: true });
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
      var _props3 = this.props,
          endscreenComponent = _props3.endscreenComponent,
          beforescreenComponent = _props3.beforescreenComponent,
          pausescreenComponent = _props3.pausescreenComponent,
          hasBreakpoints = _props3.hasBreakpoints,
          theme = _props3.theme,
          videoId = _props3.videoId,
          playerId = _props3.playerId,
          hasAutoplay = _props3.hasAutoplay,
          hasControls = _props3.hasControls,
          isMuted = _props3.isMuted,
          accountId = _props3.accountId;
      var _state = this.state,
          endscreenOpen = _state.endscreenOpen,
          beforescreenOpen = _state.beforescreenOpen,
          pausescreenOpen = _state.pausescreenOpen;

      var isScreenOpen = endscreenOpen || beforescreenOpen || pausescreenOpen;

      return React.createElement(
        'div',
        {
          className: cn('bc-player', {
            'bc-player--screen-open': isScreenOpen,
            'bc-player--has-breakpoints': hasBreakpoints
          })
        },
        endscreenComponent && React.createElement(
          VideoPlayerScreen,
          {
            isActive: endscreenOpen,
            variation: 'endscreen'
          },
          renderChildren(endscreenComponent, { onReplay: this.handleReplayClick, isActive: endscreenOpen })
        ),
        beforescreenComponent && React.createElement(
          VideoPlayerScreen,
          {
            isActive: beforescreenOpen,
            variation: 'beforescreen'
          },
          renderChildren(beforescreenComponent, { onResume: this.resumeVideo, isActive: beforescreenOpen })
        ),
        pausescreenComponent && React.createElement(
          VideoPlayerScreen,
          {
            isActive: pausescreenOpen,
            variation: 'pausescreen'
          },
          renderChildren(pausescreenComponent, { onResume: this.resumeVideo, isActive: pausescreenOpen })
        ),
        React.createElement(
          'div',
          { className: 'bc-player__wrapper' },
          React.createElement('video', {
            'data-application-id': true,
            ref: this.playerRef,
            className: cn('video-js', 'bc-player__video', 'bc-player__video--' + theme),
            'data-embed': 'default',
            'data-video-id': videoId,
            'data-player-id': playerId,
            'data-account': accountId,
            autoPlay: hasAutoplay ? 'autoplay' : '',
            muted: isMuted ? 'muted' : '',
            controls: hasControls ? 'controls' : ''
          })
        )
      );
    }
  }]);

  return VideoPlayer;
}(PureComponent);

VideoPlayer.propTypes = {
  playerId: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  /** Player theme styles, must have correlating styles to go with it */
  theme: PropTypes.oneOf(['default', 'chapter']),
  /** Pass in a react component to be shown at the end of the video. */
  endscreenComponent: PropTypes.func,
  /** Pass in a react component to be shown before video starts. */
  beforescreenComponent: PropTypes.func,
  /** Pass in a react component to be shown when the video is paused. */
  pausescreenComponent: PropTypes.func,
  /**
   * Keeps video constrained to standard sizes, eg 1080x720.
   * Used to keep videos looking crisp.
   * Scales responsively.
   * */
  hasBreakpoints: PropTypes.bool,
  hasControls: PropTypes.bool,
  isMuted: PropTypes.bool,
  isLooped: PropTypes.bool,
  hasAutoplay: PropTypes.bool,
  /** Player has been initialized */
  onPlayerReady: PropTypes.func,
  /** Video is loaded and ready to play */
  onVideoReady: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnd: PropTypes.func,
  onTimeChange: PropTypes.func,
  onError: PropTypes.func,
  accountId: PropTypes.string,
  progress: PropTypes.number
};
VideoPlayer.defaultProps = {
  playerId: 'rkcQq7gAe',
  videoId: '5450137526001',
  theme: 'default',
  isLooped: false,
  isMuted: false,
  hasAutoplay: true,
  hasControls: true,
  hasBreakpoints: false,
  accountId: '5344802162001'
};
export default VideoPlayer;
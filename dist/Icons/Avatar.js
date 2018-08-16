function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

var Avatar = function Avatar(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 100 100",
    width: "1em",
    height: "1em"
  }, props), React.createElement("defs", null, React.createElement("linearGradient", {
    id: "a",
    x1: 50,
    y1: 100,
    x2: 50,
    gradientUnits: "userSpaceOnUse"
  }, React.createElement("stop", {
    offset: 0,
    stopColor: "#2a2a2a"
  }), React.createElement("stop", {
    offset: 1,
    stopColor: "#111"
  }))), React.createElement("path", {
    fill: "url(#a)",
    d: "M0 0h100v100H0z"
  }), React.createElement("path", {
    d: "M94.81 100c-.25-3.51-.76-9.85-1.65-12.35-1.37-3.84-3.06-5.56-5.17-7-1-.7-4.89-2.16-10.65-4.3-5.23-2-11.16-4.17-13.29-5.38-1.89-1.08-3.36-6.32-3.36-8 .6-.59 1-1.09 1.3-1.37a31.64 31.64 0 0 0 6.48-11.81c1.68-6.27 3-19-2.84-26.8-3.3-4.44-8.44-6.81-15.28-7h-.69c-6.84.22-12 2.59-15.28 7-5.81 7.83-4.52 20.53-2.85 26.8A31.73 31.73 0 0 0 38 61.64c.09.1.55.62 1.29 1.32.6 1.68-1.58 6.95-3.37 8-2.13 1.2-8.06 3.42-13.37 5.4C16.87 78.54 13 80 12 80.68c-2.11 1.4-3.79 3.13-5.16 7C6 90.14 5.44 96.45 5.19 100z",
    fill: "#606060"
  }), React.createElement("path", {
    d: "M35.4 48.8C34 43.61 32.68 32 37.59 25.43c2.57-3.43 6.56-5.24 12.2-5.43h.45c5.62.18 9.61 2 12.18 5.42C67.33 32 66 43.61 64.61 48.8A27.66 27.66 0 0 1 59 59l-.14.15C57.8 60.31 54.46 64 50 64c-.74 0-4.62-.24-8.79-4.78L41 59a27.36 27.36 0 0 1-5.6-10.2zM9.21 100c.52-7.27 1-10 1.4-11 1.11-3.11 2.29-4.09 3.6-5 1-.59 6.28-2.56 9.78-3.87 6.74-2.51 11.68-4.39 13.91-5.66s3.6-3.92 4.26-5.42a15.66 15.66 0 0 0 1-3.1A13.52 13.52 0 0 0 50 68a13.54 13.54 0 0 0 7-2.1c.66 2.91 2.23 7 5 8.57 2.24 1.28 7.17 3.15 13.87 5.65 3.53 1.32 8.86 3.31 9.85 3.9 1.32.88 2.49 1.87 3.61 5 .35 1 .87 3.71 1.4 11h4c-.25-3.51-.76-9.85-1.65-12.35-1.37-3.84-3.06-5.56-5.17-7-1-.7-4.89-2.16-10.65-4.3-5.23-2-11.16-4.17-13.29-5.38-1.89-1.08-3.36-6.32-3.36-8 .6-.59 1-1.09 1.3-1.37a31.64 31.64 0 0 0 6.48-11.81c1.68-6.27 3-19-2.84-26.8-3.3-4.44-8.44-6.81-15.28-7h-.69c-6.84.22-12 2.59-15.28 7-5.81 7.83-4.52 20.53-2.85 26.8A31.73 31.73 0 0 0 38 61.64c.09.1.55.62 1.29 1.32.6 1.68-1.58 6.95-3.37 8-2.13 1.2-8.06 3.42-13.37 5.4C16.87 78.54 13 80 12 80.68c-2.11 1.4-3.79 3.13-5.16 7C6 90.14 5.44 96.45 5.19 100z",
    fill: "#fff"
  }));
};

export default Avatar;
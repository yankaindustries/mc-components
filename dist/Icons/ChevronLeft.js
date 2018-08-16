function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

var ChevronLeft = function ChevronLeft(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 11 18",
    fill: "none",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.207.293a1 1 0 0 1 0 1.414L2.914 9l7.293 7.293a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414l8-8a1 1 0 0 1 1.414 0z",
    fill: "currentColor"
  }));
};

export default ChevronLeft;
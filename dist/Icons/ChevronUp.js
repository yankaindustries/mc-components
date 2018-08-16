function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

var ChevronUp = function ChevronUp(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 18 11",
    fill: "none",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.293.793a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1-1.414 1.414L9 2.914l-7.293 7.293A1 1 0 0 1 .293 8.793l8-8z",
    fill: "currentColor"
  }));
};

export default ChevronUp;
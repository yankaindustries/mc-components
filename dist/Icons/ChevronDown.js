function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

var ChevronDown = function ChevronDown(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 18 11",
    fill: "none",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M.293.793a1 1 0 0 1 1.414 0L9 8.086 16.293.793a1 1 0 1 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0l-8-8a1 1 0 0 1 0-1.414z",
    fill: "currentColor"
  }));
};

export default ChevronDown;
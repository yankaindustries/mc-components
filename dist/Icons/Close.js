function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";

var Close = function Close(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 14 14",
    fill: "none",
    width: "1em",
    height: "1em"
  }, props), React.createElement("path", {
    d: "M6.169 7L1.173 2.005a.587.587 0 0 1 0-.832c.23-.23.601-.23.832 0L7 6.167l4.992-4.994c.23-.23.606-.23.832 0 .23.23.23.602 0 .832L7.83 7l4.996 4.994a.589.589 0 0 1-.832.832L7.001 7.832l-4.996 4.994a.589.589 0 0 1-.832-.832L6.169 7z",
    fill: "currentColor",
    stroke: "currentColor"
  }));
};

export default Close;
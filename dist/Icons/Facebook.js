var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var Facebook = function Facebook(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 50 50", fill: "none", width: "1em", height: "1em" }, props),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22.644 18.633v2.938h-4.011v3.919h4.01v12.734h4.012V25.49h4.412l1.002-3.919h-5.414v-2.938c0-.588.4-.98 1.002-.98h4.035v-3.918h-4.035c-2.807 0-5.013 2.155-5.013 4.898z",
      fill: "currentColor"
    })
  );
};

export default Facebook;
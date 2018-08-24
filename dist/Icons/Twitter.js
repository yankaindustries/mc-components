var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from "react";

var Twitter = function Twitter(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 50 50", fill: "none", width: "1em", height: "1em" }, props),
    React.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M39.204 16.623c-1.022.5-2.044.666-3.237.832 1.193-.665 2.044-1.664 2.385-2.995-1.022.665-2.215.998-3.577 1.331-1.023-.998-2.556-1.664-4.09-1.664-3.066 0-5.621 2.496-5.621 5.492 0 .5 0 .832.17 1.165-4.6-.166-8.688-2.33-11.585-5.658-.51.832-.681 1.664-.681 2.829 0 1.83 1.022 3.495 2.555 4.493-.851 0-1.703-.332-2.555-.665 0 2.662 1.874 4.826 4.43 5.325-.512.167-1.023.167-1.534.167-.34 0-.681 0-1.022-.167a5.505 5.505 0 0 0 5.281 3.828c-1.874 1.498-4.259 2.33-6.985 2.33h-1.363c2.556 1.498 5.452 2.497 8.519 2.497 10.221 0 15.843-8.322 15.843-15.478v-.666c1.363-.832 2.386-1.83 3.067-2.996z",
      fill: "currentColor"
    })
  );
};

export default Twitter;
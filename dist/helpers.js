import { Children, cloneElement } from 'react';
import { isFunction } from 'lodash';

export var parseInputErrors = function parseInputErrors(error) {
  if (!error) {
    return undefined;
  }
  if (Array.isArray(error)) {
    return error[0];
  }
  return error;
};

export var NumberToPX = function NumberToPX(value) {
  return typeof value === 'number' ? value + 'px' : value;
};

export var closeFullscreen = function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE/Edge */
    document.msExitFullscreen();
  }
};

export var FormatClassTitle = function FormatClassTitle() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var instructorName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (title.toLowerCase().indexOf(instructorName.toLowerCase()) === -1) {
    return title;
  }
  return title.trim().slice(instructorName.length).trim();
};

export var renderChildren = function renderChildren(children, props) {
  if (isFunction(children)) {
    return children(props);
  }

  return Children.map(children, function (child) {
    return cloneElement(child, props);
  });
};
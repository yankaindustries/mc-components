import React, { Fragment } from 'react';
import { string } from 'prop-types';

var RoundedBoxHeader = function RoundedBoxHeader(_ref) {
  var subheader = _ref.subheader,
      header = _ref.header;
  return React.createElement(
    Fragment,
    null,
    subheader && React.createElement(
      'h4',
      { className: 'rounded-box__subheader' },
      subheader
    ),
    header && React.createElement(
      'h2',
      { className: 'rounded-box__header' },
      header
    )
  );
};

RoundedBoxHeader.propTypes = {
  subheader: string,
  header: string
};

export default RoundedBoxHeader;
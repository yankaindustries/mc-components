import React, { Fragment } from 'react';
import { string } from 'prop-types';

var ModalHeader = function ModalHeader(_ref) {
  var subheader = _ref.subheader,
      header = _ref.header;
  return React.createElement(
    Fragment,
    null,
    subheader && React.createElement(
      'h4',
      { className: 'modal-header__subheader' },
      subheader
    ),
    header && React.createElement(
      'h2',
      { className: 'modal-header__header' },
      header
    )
  );
};

ModalHeader.propTypes = {
  subheader: string,
  header: string
};

export default ModalHeader;
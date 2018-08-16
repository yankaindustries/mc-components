import React from 'react';
import { storiesOf } from '@storybook/react';
import { withProps } from '../../utils/addon-props';
import HeaderLoggedOut from '../HeaderLoggedOut';
storiesOf('components|Structure/Header/LoggedOut', module).add('default', withProps(HeaderLoggedOut)(function () {
  return React.createElement("div", null, React.createElement(HeaderLoggedOut, null), React.createElement("div", {
    style: {
      paddingBottom: '2000px',
      background: '#ccc'
    }
  }));
}));
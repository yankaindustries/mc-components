import React from 'react';
import { storiesOf } from '@storybook/react';
import { withProps } from '../../utils/addon-props';
import RoundedBox from '../RoundedBox';
storiesOf('components|RoundedBox', module).add('default', withProps(RoundedBox)(function () {
  return React.createElement(RoundedBox, null, React.createElement("p", null, "Content"));
})).add('with header', withProps(RoundedBox)(function () {
  return React.createElement(RoundedBox, {
    header: "Header",
    subheader: "Sub header"
  }, React.createElement("p", null, "Content"));
}));
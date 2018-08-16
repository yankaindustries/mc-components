import React from 'react';
import { storiesOf } from '@storybook/react';
import { withProps } from '../../utils/addon-props';
import Footer from '../Footer';
storiesOf('components|Structure/Footer', module).add('default', withProps(Footer)(function () {
  return React.createElement(Footer, null);
})).add('minimal', withProps(Footer)(function () {
  return React.createElement(Footer, {
    isMinimal: true
  });
}));
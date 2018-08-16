import React from 'react';
import { storiesOf } from '@storybook/react';
import { withProps } from '../../utils/addon-props';
import Badge from '../Badge';
storiesOf('components|Badge', module).add('default', withProps(Badge)(function () {
  return React.createElement(Badge, {
    count: 2
  });
}));
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withProps } from '../../utils/addon-props';
import DocSection from '../../utils/DocSection';
import PropExample from '../../utils/PropExample';
import ToggleHandler from './index';
import Button from '../Button';
storiesOf('utilities|ToggleHandler', module).add('default', withProps(ToggleHandler)(function () {
  return React.createElement("div", {
    className: "container"
  }, React.createElement("h2", {
    className: "mc-text-h2"
  }, "ToggleHandler"), React.createElement(DocSection, {
    title: "Variations"
  }, React.createElement(PropExample, {
    name: "children",
    type: "RenderProp"
  }, React.createElement(ToggleHandler, null, function (_ref) {
    var toggled = _ref.toggled,
        onClick = _ref.onClick;
    return React.createElement(Button, {
      onClick: onClick,
      primary: toggled,
      tertiary: !toggled
    }, toggled ? 'On' : 'Off');
  }))));
}));
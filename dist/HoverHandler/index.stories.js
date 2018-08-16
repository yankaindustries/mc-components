import React from 'react';
import { storiesOf } from '@storybook/react';
import { withProps } from '../../utils/addon-props';
import DocSection from '../../utils/DocSection';
import PropExample from '../../utils/PropExample';
import HoverHandler from './index';
import Button from '../Button';
storiesOf('utilities|HoverHandler', module).add('default', withProps(HoverHandler)(function () {
  return React.createElement("div", {
    className: "container"
  }, React.createElement("h2", null, "HoverHandler"), React.createElement(DocSection, {
    title: "Variations"
  }, React.createElement(PropExample, {
    name: "children",
    type: "RenderProp"
  }, React.createElement(HoverHandler, null, function (_ref) {
    var hovering = _ref.hovering;
    return React.createElement(Button, {
      primary: true
    }, hovering ? 'Hovering' : 'Normal');
  }))));
}));
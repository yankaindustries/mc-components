import React from 'react';
import { storiesOf } from '@storybook/react';
import { withProps } from '../../utils/addon-props';
import DocSection from '../../utils/DocSection';
import PropExample from '../../utils/PropExample';
import Button from '../Button';

var FacebookIcon = function FacebookIcon() {
  return React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    opacity: "0.2",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 3.2C0 2.0799 0 1.51984 0.217987 1.09202C0.409734 0.715695 0.715695 0.409734 1.09202 0.217987C1.51984 0 2.0799 0 3.2 0H18.8C19.9201 0 20.4802 0 20.908 0.217987C21.2843 0.409734 21.5903 0.715695 21.782 1.09202C22 1.51984 22 2.0799 22 3.2V18.8C22 19.9201 22 20.4802 21.782 20.908C21.5903 21.2843 21.2843 21.5903 20.908 21.782C20.4802 22 19.9201 22 18.8 22H3.2C2.0799 22 1.51984 22 1.09202 21.782C0.715695 21.5903 0.409734 21.2843 0.217987 20.908C0 20.4802 0 19.9201 0 18.8V3.2Z",
    fill: "black"
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.91079 3.55442V5.68707H0V8.53061H2.91079V17.7721H5.82157V8.53061H9.02344L9.75113 5.68707H5.82157V3.55442C5.82157 3.12789 6.11265 2.84354 6.54927 2.84354H9.47687V0H6.54927C4.51172 0 2.91079 1.56395 2.91079 3.55442Z",
    transform: "translate(6.37891 2.8252)",
    fill: "white"
  }));
};

storiesOf('components|Buttons', module).add('Button', withProps(Button)(function () {
  return React.createElement("div", {
    className: "container"
  }, React.createElement("h2", {
    className: "mc-text-h2"
  }, "Button Types"), React.createElement(DocSection, {
    title: "Variations"
  }, React.createElement(PropExample, {
    name: "default (no properties)"
  }, React.createElement(Button, null, "Default")), React.createElement(PropExample, {
    name: "secondary | tertiary",
    type: "Boolean"
  }, React.createElement(Button, {
    secondary: true
  }, "Secondary"), React.createElement(Button, {
    tertiary: true
  }, "Tertiary")), React.createElement(PropExample, {
    name: "link | link muted | text",
    type: "Boolean"
  }, React.createElement(Button, {
    link: true
  }, "Link"), React.createElement(Button, {
    linkMuted: true
  }, "Link Muted"), React.createElement(Button, {
    text: true
  }, "Text")), React.createElement(PropExample, {
    name: "icon",
    type: "Component"
  }, React.createElement(Button, {
    className: "c-button--facebook",
    Icon: React.createElement(FacebookIcon, null)
  }, "Connected")), React.createElement(PropExample, {
    name: "loading",
    type: "Boolean"
  }, React.createElement(Button, {
    primary: true,
    loading: true
  }, "Button")), React.createElement(PropExample, {
    name: "fullWidth",
    type: "Boolean"
  }, React.createElement(Button, {
    primary: true,
    fullWidth: true
  }, "Button"))));
}));
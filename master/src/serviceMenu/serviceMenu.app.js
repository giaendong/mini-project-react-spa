import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import ServiceMenu from './root.component.js';

export const serviceMenu = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: ServiceMenu,
  domElementGetter,
})

function domElementGetter() {
  return document.getElementById("serviceMenu")
}
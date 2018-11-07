import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import ServiceHeader from './root.component.js';

export const serviceHeader = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: ServiceHeader,
  domElementGetter,
})

function domElementGetter() {
  return document.getElementById("serviceHeader")
}
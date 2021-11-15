import { css } from 'lit-element';

const sharedStyles={};

export function getSharedStyles(name){
  return sharedStyles[name] || css``;
}

export function setSharedStyles(name, value){
  sharedStyles[name]=value;
}

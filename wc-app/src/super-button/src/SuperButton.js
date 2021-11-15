import { html, LitElement } from 'lit-element';
import styles from './SuperButton-styles.js';
import {getSharedStyles} from '../../litElementUtils.js';

export class SuperButton extends LitElement {
  static get styles() {
    return [styles, getSharedStyles('super-button-shared-styles')];
  }

  static get properties() {
    return {
      label:{
        type:String
      }
    };
  }

  constructor() {
    super();
    this._label='Default';
  }

  get label(){
    return this._label;
  }

  set label(newvalue){
    //console.log("newvalue", newvalue);
    const oldvalue=this._label;
    this._label=newvalue.slice(0,5)+'...';
    this.requestUpdate('label', oldvalue);
  }

  updated(changedProperties){
    if(changedProperties.has('label')){
      console.log("changedProperties", changedProperties.get('label'), this.label);
    }
  }

  _dispatch(event, detail, bubbles=true, composed=true){
    console.log("event", event);
    this.dispatchEvent(new CustomEvent(event, {detail, bubbles, composed}));
  }

  _onClick(e){
    //console.log("e", e, this.label);
    this._dispatch('super-button-click', {label:this.label});
  }

  get _leftSlotTemplate(){
    return html`<slot name="left"></slot>`;
  }

  get _rightSlotTemplate(){
    return html`<slot name="right"></slot>`;
  }

  get _contentTemplate(){
    return html`
      <button part="button" @click="${this._onClick}">${this.label}</button>
    `;
  }


  render() {
    return html`
      ${this._leftSlotTemplate}
      ${this._contentTemplate}
      ${this._rightSlotTemplate}
    `;
  }
}

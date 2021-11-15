import { LitElement, html, css } from 'lit-element';
import { setSharedStyles } from './litElementUtils.js';
import './super-button/super-button.js';

setSharedStyles('super-button-shared-styles', css`
  button{
    font-size:25px;
    color:orange;
    --super-button-background-color:green;
    border:solid 5px black;
  }
`);

export class WcApp extends LitElement {


  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
    :host{
      --super-button-background-color:white;
      --super-button-color:black;
    }
    :host(.dark-theme){
      --super-button-background-color:black;
      --super-button-color:white;
    }
    button{
      background-color:none !important;
      border:none;
    }
    ::part(button){
      padding:20px;
    }
    `;
  }

  _onSuperButtonClick({detail}){
    console.log(detail);
  }

  render() {
    return html`<super-button @super-button-click="${this._onSuperButtonClick}" label="HELLO">
    <span slot="left">--> </span>
    <span slot="right"> <--</span>
    </super-button>
    `;
  }
}

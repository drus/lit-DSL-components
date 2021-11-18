import { LitElement, html, nothing } from 'lit';
import componentStyles from './DrusChip-styles.js';
import '../../drus-icon/index.js';

const ICON_SIZES={
  'S':'S',
  'M':'S',
  'L':'XL',
  'XL':'XL'
};


export class DrusChip extends LitElement {
  static get styles() {
    return componentStyles;
  }

  static get properties() {
    return {
      size:{
        type:String
      },
      disabled:{
        type:Boolean
      },
      iconLeft: {
        type: String,
        attribute:'icon-left'
       },
      iconRight: {
        type: String,
        attribute:'icon-right'
       },
       showCloseButton:{
         type:Boolean,
         attribute:'show-close-button'
       }
    };
  }

  constructor(){
        super();
        this.showCloseButton=false;
        this.disabled=false;
        this.size=undefined;
        this.iconLeft=undefined;
        this.iconRight=undefined;
    }

    get _iconSize(){
      return ICON_SIZES[this.size] || ICON_SIZES.M;
    }

  static getIconTemplate(iconId) {
    // return html`<span id="${iconId}">${iconId}</span>`;
    return html`<drus-icon id="${iconId}" size="${this._iconSize}"></drus-icon>`;
  }

  _onCloseClick(event){
    console.log('close', event);
  }

  get _closeButtonTemplate(){
    return html`
      <button
        ?disabled="${this.disabled}"
        class="close-button"
        @click="${this._onCloseClick}"
      >X</button>
    `;
  }



  render() {
    const iconLeft = DrusChip.getIconTemplate(this.iconLeft);
    const iconRight = DrusChip.getIconTemplate(this.iconRight);
    return html`<span>
      ${this.iconLeft ? iconLeft : nothing}
      <slot></slot>
      ${this.iconRight ? iconRight : nothing}
      ${this.showCloseButton ? this._closeButtonTemplate : nothing}
    </span>`;
  }
}

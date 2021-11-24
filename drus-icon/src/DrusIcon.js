import { html, nothing, LitElement } from 'lit';
import componentStyles from './DrusIcon-styles.js';
import ICON_LIST from './IconList.js';

export class DrusIcon extends LitElement {
  static get styles() {
    return componentStyles;
  }

  static get properties() {
    return {
      iconId: {
        type: String,
        attribute:'icon-id'
      },
      size: {
        type: String,
        reflect:true
       },
    };
  }

  constructor() {
    super();
    this.iconId = undefined;
    this.size=undefined;
  }


  get _icon() {
    return ICON_LIST[this.iconId];
  }

  get _iconTemplate() {
    return html`<span class="icon">${this._icon}</span>`;
  }

  render() {
    return this._icon ? this._iconTemplate : nothing;
  }
}

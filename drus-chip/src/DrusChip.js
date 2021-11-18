import { LitElement, html, nothing } from 'lit';
import componentStyles from './DrusChip-styles.js';

export class DrusChip extends LitElement {
  static get styles() {
    return componentStyles;
  }

  static get properties() {
    return {
      iconLeft: { type: String },
      iconRight: { type: String },
    };
  }

  /* constructor(){
        super();
    } */

  static getIconTemplate(iconId) {
    // return html`<span id="${iconId}">${iconId}</span>`;
    return html`<drus-icon id="${iconId}"></drus-icon>`;
  }

  render() {
    const iconLeft = DrusChip.getIconTemplate(this.iconLeft);
    const iconRight = DrusChip.getIconTemplate(this.iconRight);
    return html`<span>
      ${this.iconLeft ? iconLeft : nothing}
      <slot></slot>
      ${this.iconRight ? iconRight : nothing}
    </span>`;
  }
}

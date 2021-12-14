import { html, LitElement, nothing } from 'lit';
import componentStyles from './DrusButton-styles.js';
import '../../drus-icon/index.js';

export class DrusButton extends LitElement {
  static get styles() {
    return componentStyles;
  }

  static get properties() {
    return {
      size: {
        type: String,
        reflect: true,
      },
      rounded: {
        type: String,
        reflect: true,
      },
      iconLeft: {
        type: String,
        attribute: 'icon-left',
      },
      iconRight: {
        type: String,
        attribute: 'icon-right',
      },
      icon: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.size = undefined;
    this.rounded = undefined;
    this.iconLeft = undefined;
    this.iconRight = undefined;
  }

  _getIconTemplate(iconId) {
    return html`<drus-icon
      icon-id="${iconId}"
      size="${this.size}"
    ></drus-icon>`;
  }

  render() {
    return html`
      <span class="wrapper">
        ${this.iconLeft ? this._getIconTemplate(this.iconLeft) : nothing}
        ${this.icon ? this._getIconTemplate(this.icon) : nothing}

        <span class="content">
          <slot></slot>
        </span>

        ${this.iconRight ? this._getIconTemplate(this.iconRight) : nothing}
      </span>
    `;
  }
}

import { html, nothing, LitElement } from 'lit';
import componentStyles from './DrusIcon-styles.js';

const ICON_LIST = {
  ok: '👍',
  ko: '👎',
  rock: '🤟',
  nerd: '🤓',
};
export class DrusIcon extends LitElement {
  static get styles() {
    return componentStyles;
  }

  static get properties() {
    return {
      id: { type: String },
    };
  }

  constructor() {
    super();
    this.id = undefined;
  }

  get _icon() {
    return ICON_LIST[this.id];
  }

  get _iconTemplate() {
    return html`<span class="icon">${this._icon}</span>`;
  }

  render() {
    return this._icon ? this._iconTemplate : nothing;
  }
}

import { html, nothing, LitElement } from 'lit';
import componentStyles from './DrusIcon-styles.js';

export class DrusIcon extends LitElement {
  static get styles() {
    return componentStyles;
  }

  static get properties() {
    return {
      id: { type: String },
    };
  }

  /* constructor() {
    super();
  } */
  static get iconList() {
    return {
      ok: '👍',
      ko: '👎',
      rock: '🤟',
      nerd: '🤓',
    };
  }

  get icon() {
    return DrusIcon.iconList[this.id];
  }

  render() {
    return this.icon ? html` <span>${this.icon}</span> ` : nothing;
  }
}

import { html, LitElement } from 'lit';
import componentStyles from './DrusAvatar-styles.js';
import { colors } from './DrusAvatarColors.js';

export class DrusAvatar extends LitElement {
  static get styles() {
    return componentStyles;
  }

  static get properties() {
    return {
      username: {
        type: String,
      },
      size: {
        type: String,
      },
      color: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.username = undefined;
    this.size = undefined;
    this.color = undefined;
  }

  get _hexColor() {
    return colors[this.color] || colors.default;
  }

  get _initialCharacters() {
    const words = this.username
      ? this.username.toUpperCase().split(' ').slice(0, 2)
      : '';

    const safeWords = [...words].filter(word => !!word && word !== ' ');

    const initials = safeWords.reduce(
      (accumulator, word) => accumulator + [...word][0],
      ''
    );
    return initials;
  }

  render() {
    return html`
      <span
        class="wrapper"
        title="${this.username}"
        style="--drus-avatar-color: ${this._hexColor}"
      >
        <span class="initials">${this._initialCharacters || '·'}</span>
      </span>
    `;
  }
}

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
    const initials = [...words].reduce(
      (accumulator, word) => accumulator + [...word][0],
      ''
    );
    return initials;
  }

  render() {
    console.log('initials', this._initialCharacters);
    return html`
      <style>
        span {
          --drus-avatar-color: ${this._hexColor};
        }
      </style>
      <span class="wrapper" title="${this.username}">
        <span class="initials">${this._initialCharacters || '·'}</span>
      </span>
    `;
  }
}

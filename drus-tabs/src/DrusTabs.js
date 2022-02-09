import { html, css, LitElement } from 'lit';
// import { DrusScrollableContainer } from './DrusScrollableContainer';

export class DrusTabs extends LitElement {
  static get styles() {
    return css`
    :host[grow]){
      background-color:green;
    }
    :host([grow])::slotted .tab{
      background-color:blue;
      flex-grow: 1;
      }
    :host::slotted[grow] .tab{
      background-color:blue;
      flex-grow: 1;
      }
    }
    `;
  }

  static get properties() {
    return {
      grow: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.grow = false;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <drus-scrollable-container>
        <slot ?grow=${this.grow}></slot>
      </drus-scrollable-container>
    `;
  }
}

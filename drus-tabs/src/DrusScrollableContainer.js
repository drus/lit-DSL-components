import { html, css, LitElement } from 'lit';

export class DrusScrollableContainer extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-shrink: 0;
        overflow: hidden;
      }

      .tablist-wrapper {
        flex-grow: 1;
        overflow: hidden;
        width: 100%;
      }

      .tablist {
        display: flex;
        overflow-x: auto;
        padding-bottom: 50px;
        margin-bottom: -50px;
        flex-shrink: 0;
      }

      .previous,
      .next {
        /*display: none;*/
        transform: translate3D(0, 0, 0);
        background: none;
        border: none;
        color: blue;
      }
      .previous {
        box-shadow: 4px 0 10px 0 $white-shadow;
      }
      .next {
        box-shadow: -4px 0 10px 0 $white-shadow;
      }
    `;
  }

  static get properties() {
    return {};
  }

  /* constructor() {
    super();

  } */

  render() {
    return html`
      <button class="previous">&lt;</button>
      <div class="tablist-wrapper">
        <slot class="tablist"></slot>
      </div>
      <button class="next">&gt;</button>
    `;
  }
}

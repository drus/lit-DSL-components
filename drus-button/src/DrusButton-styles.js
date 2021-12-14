import { css } from 'lit';

export default css`
  :host {
    /* position: relative; */
    /* display: inline-block; */
    --padding: 0.3em 1em;
    --background-color: #cc1111;
    --color: white;
  }

  :host .wrapper {
    position: relative;
    line-height: 1.2;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 16px;

    padding: var(--padding);
    background-color: var(--background-color);
    color: var(--color);

    appearence: none;
    border: none;
  }

  :host(:not([disabled]):hover) .wrapper:after {
    content: '';
    background-color: #ff0000;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    mix-blend-mode: lighten;
    border-radius: inherit;
  }

  :host([icon]) {
    --padding: 0.6em;
  }

  :host([icon]) .wrapper {
    border-radius: 50%;
  }

  :host([icon]) .content {
    border: 0;
    clip: rect(0 0 0 0);
    height: auto;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }

  :host([icon-left]) .wrapper,
  :host([icon-right]) .wrapper {
    display: flex;
    align-items: center;
  }

  :host([icon-left]) .wrapper drus-icon {
    margin-right: 8px;
  }

  :host([icon-right]) .wrapper drus-icon {
    margin-left: 8px;
  }

  :host([shadow]) .wrapper {
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.5);
  }

  :host([rounded]) .wrapper {
    border-radius: 4px;
  }

  :host([size='S']) .wrapper {
    font-size: 12px;
  }

  /* :host([size="M"]) fall in default ) .wrapper */

  :host([size='L']) .wrapper {
    font-size: 20px;
  }

  :host([size='XL']) .wrapper {
    font-size: 24px;
  }

  :host([color='primary']) {
    --background-color: #cc1111;
    --color: white;
  }

  :host([color='secondary']) {
    --background-color: #212121;
    --color: white;
  }

  :host([color='alert']) {
    --background-color: #ff931e;
    --color: #000;
  }

  :host([color='success']) {
    --background-color: #0e8331;
    --color: white;
  }

  :host([ghost]) {
    --background-color: transparent;
    --color: #212121;
  }

  /* STATE */

  :host([disabled]) .wrapper {
    background-color: #00000022;
    color: #616161;
    box-shadow: none;
    pointer-events: none;
  }
`;

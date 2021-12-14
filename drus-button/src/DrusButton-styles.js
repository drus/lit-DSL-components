import { css } from 'lit';

export default css`
  :host {
    position: relative;
    display: inline-block;
    --padding: 0.3em 1em;
    --background-color: #cc1111;
    --color: white;
  }
  :host button {
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

  :host(:not([disabled]):hover) button:after {
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

  :host([icon]) button {
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

  :host([icon-left]) button,
  :host([icon-right]) button {
    display: flex;
    align-items: center;
  }

  :host([icon-left]) button drus-icon {
    margin-right: 8px;
  }

  :host([icon-right]) button drus-icon {
    margin-left: 8px;
  }

  :host([shadow]) button {
    box-shadow: 0 2px 10px 2px #666666cc;
  }

  :host([rounded]) button {
    border-radius: 4px;
  }

  :host([size='S']) button {
    font-size: 12px;
  }

  /* :host([size="M"]) fall in default ) button */

  :host([size='L']) button {
    font-size: 20px;
  }

  :host([size='XL']) button {
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

  :host([disabled]) button {
    background-color: #00000022;
    color: #616161;
    box-shadow: none;
    pointer-events: none;
  }
`;

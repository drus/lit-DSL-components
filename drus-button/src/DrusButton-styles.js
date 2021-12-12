import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
    --padding: 0.3em 0.8em;
    --background-color: #cc1111;
    --color: white;
  }
  :host button {
    text-transform: uppercase;
    cursor: pointer;
    font-size: 16px;

    padding: var(--padding);
    background-color: var(--background-color);
    color: var(--color);

    appearence: none;
    border: none;
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
    box-shadow: 0 2px 6px #00000066;
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
    --color: #212121;
  }

  :host([color='success']) {
    --background-color: #0e8331;
    --color: white;
  }

  /* STATE */

  :host([disabled]) button {
    background-color: #00000022;
    color: #616161;
    box-shadow: none;
    pointer-events: none;
  }
`;

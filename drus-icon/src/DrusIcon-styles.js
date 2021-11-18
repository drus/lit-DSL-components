import { css } from 'lit';

export default css`
  :host {
    --font-size: 16px;
    font-size: var(--font-size);
  }
  :host([size='S']) {
    --font-size: 12px;
  }

  :host([size='L']) {
    --font-size: 20px;
  }

  :host([size='M']) {
    /* fall in default */
  }

  :host([size='XL']) {
    --font-size: 24px;
  }
`;

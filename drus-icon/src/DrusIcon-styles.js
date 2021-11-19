import { css } from 'lit';

export default css`
  :host svg {
    width: 16px;
    height: 16px;
  }

  :host([size='S']) svg {
    width: 12px;
    height: 12px;
  }

  /* :host([size="M"]) fall in default */

  :host([size='L']) svg {
    width: 20px;
    height: 20px;
  }

  :host([size='XL']) svg {
    width: 24px;
    height: 24px;
  }
`;

import { css } from 'lit';

export default css`
  .icon {
    font-size: 16px;
  }

  .icon([size='S']) {
    font-size: 12px;
  }

  /* .icon([size='M']) fall in default */

  .icon([size='L']) {
    font-size: 20px;
  }

  .icon([size='XL']) {
    font-size: 24px;
  }
`;

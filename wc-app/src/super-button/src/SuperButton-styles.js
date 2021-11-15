import { css} from 'lit-element';

export default css`
  :host {
    display: block;
    padding: 25px;
  }
  :host([large]) button{
    font-size:60px;
    padding:50px;
  }
  button{
    background-color:var(--super-button-background-color, var(--roche-background-color, gray));
    color:var(--super-button-color, black);
    border:none;
  }

`;

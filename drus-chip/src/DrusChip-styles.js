import { css } from "lit";

export default css`

    :host{

        display:inline-block;
        text-transform:upperCase;
        cursor:default;

        --font-size:16px;
        --padding:0.3em 0.8em;
        --background-color:#cc1111;
        --color:white;

        font-size:var(--font-size);
        padding:var(--padding);
        background-color:var(--background-color);
        color:var(--color);
    }

    :host([shadow]){
        box-shadow:0 2px 6px #00000066;
    }

    :host([rounded]){
        border-radius:4px;
    }

    :host([size="S"]){
        --font-size:12px;
    }

    :host([size="L"]){
        --font-size:20px;
    }

    :host([size="M"]){
        /* fall in default */
    }

    :host([size="XL"]){
        --font-size:24px;
    }

    :host([color="primary"]){
        --background-color:#cc1111;
        --color:white;
    }

    :host([color="secondary"]){
        --background-color:#212121;
        --color:white;
    }

    :host([color="alert"]){
        --background-color:#ff931e;
        --color:#212121;
    }

    :host([color="success"]){
        --background-color:#0e8331;
        --color:white;
    }

    /* STATE */

    :host([disabled]){
        background-color:#00000022;
        color:#616161;
        box-shadow:none;
        pointer-events:none;
    }

    /*
    :host([icon-left]):before{
        margin-right:4px;
    }

    :host([icon-right]):after{
        margin-left:4px;
    }

    :host([icon-left="ok"]):before{
        content:'👍';
    }

    :host([icon-right="ok"]):after{
        content:'👍';
    }
     */
`;
